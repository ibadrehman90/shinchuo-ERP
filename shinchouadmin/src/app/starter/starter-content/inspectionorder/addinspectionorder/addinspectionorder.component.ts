import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addinspectionorder',
  templateUrl: './addinspectionorder.component.html',
  styleUrls: ['./addinspectionorder.component.css']
})
export class AddinspectionorderComponent implements OnInit {

  model: any = {};
  public divId = 1;
  public maxdivId = 3;
  public repnum = 1;

  public inspections;
  public insSelectable;
  public selectedIns;

  public VehicleList;
  public vehicleSelectable;
  public selectedVehicle;

  public inspectionyard;

  
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block";  
    
    $('#ro').datepicker('setDate', new Date());
    
    this.LoadVehicles();
    this.LoadInspection();
    this.LoadYardServices();

    var self = this;

    $("#ro").change(function()
    {
      self.SelectRO();
    });

  }

  SelectRO()
  {
    this.model.ro = (<HTMLInputElement>document.getElementById('ro')).value;
  }

  filterInspection(event)
  {
    let tmp = this.insSelectable;

    let x = tmp.filter(function(val){
      let y = val.iname.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.inspections = x;
  }

  LoadInspection()
  {
    this.myService.getinspections().subscribe((data)=>{          
      this.inspections = JSON.parse(data).Status;

      this.insSelectable = this.inspections;
      
    },err => {      
      console.error(err);    
    });
  }

  SelectInspection(event, vid)
  {
    $('#next2 .btnself').removeClass('btn-black');
    $('#next2 .btnself').addClass('btn-danger');
    $('#next2 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedIns = vid;

    let x = this.inspections.filter(function(val){     
      return val.ins_id == vid;     
    }); 

    this.model.reqinspection = x[0].iname;
  }


  filterVehicles(event)
  {
    let tmp = this.vehicleSelectable;

    let x = tmp.filter(function(val){
      let y = val.prefix.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.VehicleList = x;
  }

  LoadVehicles()
  {
    this.myService.getYardVehicles().subscribe((data)=>{          
      this.VehicleList = JSON.parse(data).Status; 
      this.vehicleSelectable = this.VehicleList;  
 
     },err => {      
       console.error(err);    
     });
  }

  SelectVehicles(event, vid)
  {
    $('#next1 .btnself').removeClass('btn-black');
    $('#next1 .btnself').addClass('btn-danger');
    $('#next1 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedVehicle = vid;

    let x = this.vehicleSelectable.filter(function(val){     
      return val.p_id == vid;     
    }); 

    this.model.chassis = x[0].prefix;
    this.model.make = x[0].make;
    this.model.model = x[0].model;
    this.model.year = x[0].year;
    this.model.yardname = x[0].yardname;
  }


  BackForm()
  {
    if(this.divId > 1)
    {
      this.divId--;

      let cl = document.getElementsByClassName("nextgroup");
  
      for(var i = 0; i < cl.length; i++)
      {
        document.getElementById(cl[i].id).style.display = "none";
      }
  
      document.getElementById("next"+this.divId).style.display = "block";
    }    
  }

  NextForm()
  {
          if(this.divId < this.maxdivId)
          {
              this.divId++;

              let cl = document.getElementsByClassName("nextgroup");

              for(var i = 0; i < cl.length; i++)
              {
                document.getElementById(cl[i].id).style.display = "none";
              }

              document.getElementById("next"+this.divId).style.display = "block";                       
          }   
  }

  LoadYardServices()
  {
    this.myService.getyardswithservices().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      var self = this;

      let z = myd.filter(function(val){
        return val.serviceid == 4;     
      });

      this.inspectionyard = z;
      
      
    },err => {      
      console.error(err);    
    }); 
  }


  //** Sent to DB */
  SaveForm()
  {
    $('.smallLoader').show();

        let tempvehi = '';

        var self = this;

          let x = this.vehicleSelectable.filter(function(val){       
            return val.p_id == self.selectedVehicle;     
          });

          tempvehi += '{"chassis":"';
          tempvehi += x[0].prefix;
          tempvehi += '","make":"';
          tempvehi += x[0].make;
          tempvehi += '","model":"';
          tempvehi += x[0].model;
          tempvehi += '","year":"';
          tempvehi += x[0].year;
          tempvehi += '","yardname":"';
          tempvehi += x[0].yardname;
          tempvehi += '"}';

        
    
        this.myService.addinspectionorder(this.selectedVehicle, encodeURIComponent(this.model.servicename), this.selectedIns, this.model.ro,this.model.email,this.model.remark, window.localStorage.getItem("adm_user"), tempvehi, this.model.reqinspection).subscribe((data)=>{          
         let myd = JSON.parse(data);

        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.ResetForm();
          this.router.navigate(["view_inspectionorder"]);
        }
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        $('.smallLoader').hide();

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);

      },err => {      
        console.error(err);    
      }); 
  }

  ResetForm()
  {
    this.model = {};
    this.divId = 1;
    this.maxdivId = 3;
    this.repnum = 1;

    this.selectedVehicle = undefined;
    this.selectedIns = undefined;

    this.LoadInspection();
    this.LoadVehicles();
  
    let cl = document.getElementsByClassName("nextgroup");

      for(var i = 0; i < cl.length; i++)
      {
        document.getElementById(cl[i].id).style.display = "none";
      }

      document.getElementById("next"+this.divId).style.display = "block";
    
  }

  //** Sent to Others */

  senttoinspection()
  {
    this.router.navigate(['add_inspection']);
    window.localStorage.setItem('returnUrl','add_inspectionorder');
  }

}

