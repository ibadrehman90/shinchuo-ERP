import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editshipmentschedule',
  templateUrl: './editshipmentschedule.component.html',
  styleUrls: ['./editshipmentschedule.component.css']
})
export class EditshipmentscheduleComponent implements OnInit {

  model: any = {};
  productID: string;
  public reps;
  public yardservice;
  public ports;
  public yardports;
  public portsSelectable;
  public allPort;
  public yardserviceSelectable;
  public bagencyservice;
  public Countries;
  public ValSelect = 0;
  public repnum = 0;

  public shipsch;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    
   }

  ngOnInit() {

    document.getElementById("yardup").style.display = "none";
    
    this.LoadData();
    this.getPorts();
    $('#etd1').datepicker('setDate', new Date());
    $('#eta1').datepicker('setDate', new Date());

  }

  EditItem(val)
  {
    document.getElementById("yardup").style.display = "block";
    $('.nextgroup').hide();
    this.ValSelect = val;

    if(val == 1)
    {
      $('#yardup .box-title').text("Edit Route");
      $('#next1').show();
    }
  }

  LoadData()
  {
    this.myService.getsingleschedule(this.productID).subscribe((data)=>{          
      this.shipsch = JSON.parse(data).Status;  

      this.model.vesselname = this.shipsch[0].vessel;
      this.model.voyagename = this.shipsch[0].voyage;
      
      console.log(this.shipsch);
 
     },err => {      
       console.error(err);    
     });     
  } 


  Save()
  {
    if(this.ValSelect == 1)
    {
      this.AddRoute();
    }
  }

  getPorts()
  {
    this.myService.getallpendingports().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.approval == 1;     
      });  
      
      this.ports = x;
      this.portsSelectable = this.ports;
      
    },err => {      
      console.error(err);    
    });
  }

  AddRoute()
  {
    $('.smallLoader').show();

    let origin = (<HTMLSelectElement>document.getElementById("origin1")).value;
    let dest = (<HTMLSelectElement>document.getElementById("dest1")).value;
    let etd = (<HTMLInputElement>document.getElementById("etd1")).value;
    let eta = (<HTMLInputElement>document.getElementById("eta1")).value;

    this.myService.addmoreroute(this.productID, origin, etd, dest, eta).subscribe((data)=>{          
      let myd = JSON.parse(data);  

        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.LoadData();
        }
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }
 
     },err => {      
       console.error(err);    
     }); 
  }

  deleteroute(rid)
  {
    $('.smallLoader').show();
    this.myService.deleteroute(rid).subscribe((data)=>{          
      let myd = JSON.parse(data);  

        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
          this.LoadData();
        }
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }
 
     },err => {      
       console.error(err);    
     });
  }

  senttoport()
  {
    this.router.navigate(['add_ports']);
  }

}


