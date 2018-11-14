import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addvoyage',
  templateUrl: './addvoyage.component.html',
  styleUrls: ['./addvoyage.component.css']
})
export class AddvoyageComponent implements OnInit {
  model: any = {};
  public Vessels;
  public Voyage;
  public SelectedVessel;
  public SelectedVesselname;
  public shipmentsTable;
  public returnurl;
  constructor(public myService : DatafromServicesService, private router : Router) { }

  ngOnInit() {

    this.getVessel();

    let rtl = window.localStorage.getItem('returnUrl');
    if(rtl != null)
    {
      this.returnurl = window.localStorage.getItem('returnUrl');
      document.getElementById("cancelbtn").style.display = "inline-block";
    }
  }

  cancelTransaction()
  {
    window.localStorage.removeItem('returnUrl');
    this.router.navigate([this.returnurl]);
  }

  getVessel()
  {
    this.myService.getvessel().subscribe((data)=>{          
      this.Vessels = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  SelectVessel(event)
  {
    this.SelectedVessel = event.target.value;

    let x = this.Vessels.filter(function(val){
      return val.ys_id = event.target.value;     
    }); 

    this.SelectedVesselname = x[0].vesselname;
    
    if(event.target.value != "")
    {
      document.getElementById("forCountry").style.display = "block";
      this.getVoyages();
    }
    else
    {
      document.getElementById("forCountry").style.display = "none";
    }
  }

  getVoyages()
  {
    this.myService.getvoyages(this.SelectedVessel).subscribe((data)=>{          
      this.Voyage = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  addvoyage()
  {
    if(this.model.voyagename != undefined && this.model.voyagename != "")
    {
      this.myService.addvoyage(this.model.voyagename, this.SelectedVessel, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.getVoyages();
        }    
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);
      },err => {      
        console.error(err);    
      });
    }
    else
    {
      alert("Field can't be left empty!");
    }
  }

}

