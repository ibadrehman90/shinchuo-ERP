import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../../datafrom-services.service';

@Component({
  selector: 'app-addloadingplan',
  templateUrl: './addloadingplan.component.html',
  styleUrls: ['./addloadingplan.component.css']
})
export class AddloadingplanComponent implements OnInit {

  model: any = {};
  public divId = 1;
  public maxdivId = 2;
  public repnum = 1;

  public yards;
  public yardSelectable;
  public selectedYard;
  public yvar;

  public VehicleList;
  public vehicleSelectable;
  public selectedVehicle = new Array();

  public SelectedContainerType;
  
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 
    this.getordercount();

    this.LoadYards();

  }

  filterYard(event)
  {
    let tmp = this.yardSelectable;

    let x = tmp.filter(function(val){
      let y = val.name.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.yards = x;
  }

  LoadYards()
  {
    this.myService.getYards().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      let x = myd.filter(function(val){
        return val.status == 1;     
      });

      this.yards = x;

      this.yardSelectable = this.yards;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectYard(event, vid)
  {
    $('#next1 .btnself').removeClass('btn-black');
    $('#next1 .btnself').addClass('btn-danger');
    $('#next1 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedYard = vid;

    let x = this.yardSelectable.filter(function(val){
      return val.y_id == vid;     
    });

    this.model.yard = x[0].name;

    this.selectedVehicle = new Array();

    this.LoadVehicles();
  }

  SelectContainerType(event)
  {
    this.SelectedContainerType = event.target.value;
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
    this.myService.getyardvehicles(this.model.yard).subscribe((data)=>{          
     this.VehicleList = JSON.parse(data).Status; 
     this.vehicleSelectable = this.VehicleList;  

    },err => {      
      console.error(err);    
    }); 
  }

  SelectVehicles(event, val)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.selectedVehicle.push(val);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedVehicle.indexOf(val);
      this.selectedVehicle.splice(ind, 1);
    }
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

    if(this.selectedYard != undefined)
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
    else
    {
      alert("Yard must be selected first!");
    }
  }




  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) 
    result += chars[Math.floor(Math.random() * chars.length)];

    return result;
  }

  getordercount()
  {
    this.myService.getCountsData("plancode","loadingplan","").subscribe((data)=>{          
      let myd = (JSON.parse(data).Status)[0]; 
      
      this.model.plancode = "LP-" + (parseInt(myd.cnt) + 10).toString(16).toUpperCase() + "-" + this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
 
     },err => {      
       console.error(err);    
     }); 
  }


  //** Sent to DB */
  SaveForm()
  {
    $('.smallLoader').show();

        let tempcon = '';

        for(let i = 0; i < this.selectedVehicle.length; i++)
        {
          if(i > 0)
          tempcon += ',';

          tempcon += '{"pid":"';
          tempcon += this.selectedVehicle[i];
          tempcon += '"}';
        }
    
      this.myService.addloadingplan(this.selectedYard, this.SelectedContainerType, tempcon, window.localStorage.getItem("adm_user"), this.model.plancode).subscribe((data)=>{          
        let myd = JSON.parse(data);

        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.ResetForm();
          this.router.navigate(["view_loadingplan"]);
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
this.maxdivId = 2;
this.repnum = 1;

this.SelectedContainerType = undefined;
this.selectedYard = undefined;
this.selectedVehicle = new Array();

this.LoadYards();
  
    let cl = document.getElementsByClassName("nextgroup");

      for(var i = 0; i < cl.length; i++)
      {
        document.getElementById(cl[i].id).style.display = "none";
      }

      document.getElementById("next"+this.divId).style.display = "block";
    
  }

  //** Sent to Others */

  senttoyard()
  {
    this.router.navigate(['add_yard']);
    window.localStorage.setItem('returnUrl','add_booking');
  }

}
