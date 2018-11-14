import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../../datafrom-services.service';

@Component({
  selector: 'app-addshipmentplan',
  templateUrl: './addshipmentplan.component.html',
  styleUrls: ['./addshipmentplan.component.css']
})
export class AddshipmentplanComponent implements OnInit {

  model: any = {};
  public divId = 1;
  public maxdivId = 8;
  public repnum = 1;

  public yards;
  public yardSelectable;
  public selectedYard;
  public yvar;

  public ports;
  public portsSelectable;
  public selectedPort;

  public Bookings = new Array();
  public bookingSelectable;
  public selectedBooking;

  public drayageyard;
  public drayageSelectable;
  public selectedDrayage;

  public packingyard;
  public packingSelectable;
  public selectedPacking;

  public loadingplan;
  public planSelectable;
  public selectedPlan;


  public iVL = undefined;

  public vehicles;
  public vehicleSelectable;
  public selectedVehicle = new Array();

  public shipmenttype;
  public reservedqty = 0;
  public SelectedContainer;
  public SelectedP;

  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 
    this.getPorts();
    this.LoadYardServices();
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
    this.myService.getYardsbyDestination(this.model.port).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      this.yards = myd;
      this.yardSelectable = this.yards;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectYard(event, vid)
  {

    this.selectedBooking = undefined;
    this.model.booking = undefined;

    $('#next2 .btnself').removeClass('btn-black');
    $('#next2 .btnself').addClass('btn-danger');
    $('#next2 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedYard = vid;
    this.getBookings();

    let x = this.yardSelectable.filter(function(val){
      return val.yardid == vid;     
    });

    this.model.yardname = x[0].yardname;
  }

 
  SelectPort(event, vid)
  {
    $('#next1 .btnself').removeClass('btn-black');
    $('#next1 .btnself').addClass('btn-danger');
    $('#next1 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedPort = vid;

    let x = this.portsSelectable.filter(function(val){
      return val.port_id == vid;     
    });

    this.model.port = x[0].port;

    this.yards = undefined;
    this.yardSelectable = undefined;
    this.model.yardname = undefined;
    this.LoadYards();

  }

  filterPort(event)
  {
    let tmpports = this.portsSelectable;

    let x = tmpports.filter(function(val){
      let y = val.port.toLowerCase();
      return y.indexOf(event.target.value) > -1;     
    });  
    
    this.ports = x;
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



  SelectBooking(event, vid)
  {
    $('#next3 .btnself').removeClass('btn-black');
    $('#next3 .btnself').addClass('btn-danger');
    $('#next3 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedBooking = vid;

    let x = this.bookingSelectable.filter(function(val){
      return val.b_no == vid;     
    });

    this.model.booking = x[0];
    this.shipmenttype = x[0].shipmentype;
    this.reservedqty = x[0].qty;

    this.CreateContainerList();

    if(x[0].shipmentype == 'RORO')
    {
      this.getRoroVehicles();
    }
    else if(x[0].shipmentype == 'CONTAINER')
    {
      this.LoadPlans();
    } 
  }

  filterBooking(event)
  {
    let tmpports = this.bookingSelectable;

    let x = tmpports.filter(function(val){
      let y = val.bookingno.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.Bookings = x;
  }

  getBookings()
  {
    this.myService.getBookingbyYard(this.selectedYard).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;
     
      this.Bookings = myd;
      this.bookingSelectable = this.Bookings;
      
    },err => {      
      console.error(err);    
    });
  }


  CreateContainerList()
  {
    let i = 0;
    let temp = '';
    for(i = 1; i <= this.reservedqty; i++)
    {
      temp += '<div class="form-group col-xs-12">      <label class="col-sm-4 control-label" style="margin-top:10px;"><input id="radiocont' + i + '" type="radio" ';
      temp += 'name="contain" style="margin-top:5px;" /> Container ' + i + '</label>      <div class="col-sm-8">        <input name="cont' + i + '" type="text" class="form-control" placeholder="Container ' + i + ' Code">      </div>    </div>';    
    }

    document.getElementById("contlist").innerHTML = temp;

    for(i = 1; i <= this.reservedqty; i++)
    {
      let l = document.getElementById("radiocont" + i);    
      l.addEventListener('change', (event) => this.SelectContainer(event));
    }

    this.SelectedContainer = 1;

    let rad1 = <HTMLFormElement>document.getElementById("radiocont1");
    rad1.checked = true;
    
  }


  SelectContainer(event)
  {
    this.SelectedContainer = event.target.id.substr(9);
  }








  filterdYard(event)
  {
    let tmp = this.drayageSelectable;

    let x = tmp.filter(function(val){
      let y = val.yardname.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.drayageyard = x;
  }

  filterPacking(event)
  {
    let tmp = this.packingSelectable;

    let x = tmp.filter(function(val){
      let y = val.yardname.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.packingyard = x;
  }

  LoadYardServices()
  {
    this.selectedDrayage = undefined;
    this.myService.getyardswithservices().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      var self = this;

      let z = myd.filter(function(val){
        return val.serviceid == 3;     
      });

      this.drayageyard = z;
      this.drayageSelectable = z;
      
      let y = myd.filter(function(val){
        return val.serviceid == 1;     
      });

      this.packingyard = y;
      this.packingSelectable = y;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectDrayageYard(event, vid)
  {
    $('#next5 .btnself').removeClass('btn-black');
    $('#next5 .btnself').addClass('btn-danger');
    $('#next5 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedDrayage = vid;

    let x = this.drayageSelectable.filter(function(val){
      return val.y_id == vid;     
    });

    this.model.drayageyard = x[0].yardname;
  }

  SelectPacking(event, vid)
  {
    $('#next4 .btnself').removeClass('btn-black');
    $('#next4 .btnself').addClass('btn-danger');
    $('#next4 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedPacking = vid;

    let x = this.packingSelectable.filter(function(val){
      return val.y_id == vid;     
    });

    this.model.packingyard = x[0].yardname;
  }



  filterPlans(event)
  {
    let tmp = this.planSelectable;

    let x = tmp.filter(function(val){
      let y = val.plancode.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.loadingplan = x;
  }

  LoadPlans()
  {
    this.myService.getloadingplan(this.selectedYard).subscribe((data)=>{          
      this.loadingplan = JSON.parse(data).Status;  

      this.planSelectable = this.loadingplan;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectPlan(event, vid)
  {
    this.SelectedP = 'Loading Plan';
    $('#next6 .btnself').removeClass('btn-black');
    $('#next6 .btnself').addClass('btn-danger');
    $('#next6 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedPlan = vid;
    this.vehicles = undefined;
    this.vehicleSelectable = undefined;
    this.getContainerVehicles();
  }



  getContainerVehicles()
  {
    this.myService.getplanvehicles(this.selectedPlan).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;    
      this.iVL = myd;

      this.vehicles = myd; 
      this.vehicleSelectable = myd;       
    },err => {      
      console.error(err);    
    });
  }

  getRoroVehicles()
  {
    this.myService.getvehiclesbyyard(this.selectedYard).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      //this.iVL = myd;  
     
      this.vehicles = myd; 
      this.vehicleSelectable = myd;      
    },err => {      
      console.error(err);    
    });
  }

  filterVehicles(event)
  {
    let tmp = this.vehicleSelectable;

    let x = tmp.filter(function(val){
      let y = val.prefix.toLowerCase();
      return y.indexOf(event.target.value) > -1;     
    });  
    
    this.vehicles = x;
  }

  public newveh = new Array();

  SelectVehicles(event, val)
  {
    console.log(this.vehicles);
    console.log(this.iVL);
    let temparr = new Array();
    temparr[0] = this.SelectedContainer;
    temparr[1] = val;

    this.selectedVehicle.push(temparr);

    let x = this.vehicles;

    let arr = x;      
    let i = 0, j = 0;

    for(i = 0; i < this.selectedVehicle.length; i++)
    {
      for(j = 0; j < x.length; j++)
      {
        if(x[j].p_id == this.selectedVehicle[i][1])
        {
          this.newveh.push(x[j]);
          arr.splice(j, 1);
        }
      }
    }

   
    this.vehicles = arr;
    this.vehicleSelectable = arr;

    this.ShowVehiclesList();
  }

  ShowVehiclesList()
  {
    let i = 0;
    let temp = '';
    
   for(i = 1; i <= this.reservedqty; i++)
    {
      let x = this.selectedVehicle.filter(function(val){
        return val[0] == i;     
      });
      
      temp += '<div class="col-xs-12"><p style="margin-bottom:0px;">Container '+ i +'</p> <hr style="margin-top:2px;margin-bottom:2px;"/> <table class="table table-bordered"><thead><tr><th>Chassis</th><th>Model</th><th>Dimensions</th></tr></thead><tbody>';
      let j = 0;

      for(j = 0; j < x.length; j++)
      {
        
        let y = this.newveh.filter(function(val){
          return val.p_id == x[j][1];     
        });
       
        temp += '<tr><td>';
        temp += y[0].prefix;
        temp += '</td><td>';
        //temp += '<span id="btv'+ j +'"><i class="fa fa-trash pull-center"></i></span>';
        temp += y[0].make + " - " + y[0].model;
        temp += '</td><td>';
        temp += 'L x W x H';
        temp += '</td></tr>';
      }

      temp += '</tbody></table></div>';

    }

    document.getElementById("contdivs").innerHTML = temp;
    
  
  }


  ClearVehicles()
  {
    this.vehicles = this.newveh;
    this.vehicleSelectable = this.vehicles;
    this.newveh = new Array();
    this.selectedVehicle = new Array();
    document.getElementById("contdivs").innerHTML = "";
  }












  GeneralPlan()
  {
    this.selectedPlan = undefined;
    this.loadingplan = undefined;
    this.loadingplan = this.planSelectable;
    this.vehicles = undefined;
    this.vehicleSelectable = undefined;

    $('#next6 .btnself').removeClass('btn-black');
    $('#next6 .btnself').addClass('btn-danger');
    $('#next6 .btnself').text('Select');
    
    this.SelectedP = 'General Plan';

    this.getRoroVehicles();
    this.NextForm();
  }




  BackForm()
  {
    if(this.divId > 1)
    {
      this.divId--;

      if(this.shipmenttype == 'RORO')
      {
         this.divId -= 3;
      }

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

    if(this.selectedPort != undefined)
    {
     
          if(this.divId < this.maxdivId)
          {
            if(this.divId == 3 && this.selectedBooking == undefined)
            {
              alert("Booking must be selected to Proceed!");
            }  
            else
            {
              this.divId++;               
              
              if(this.shipmenttype == 'RORO')
              {
                this.divId += 3;
              }

              let cl = document.getElementsByClassName("nextgroup");

              for(var i = 0; i < cl.length; i++)
              {
                document.getElementById(cl[i].id).style.display = "none";
              }

              document.getElementById("next"+this.divId).style.display = "block";  
            }
                                 
          }
    }
    else
    {
      alert("Destination must be selected first!");
    }
  }


  //** Sent to DB */
 /* SaveForm()
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


this.selectedYard = undefined;

this.LoadYards();
  
    let cl = document.getElementsByClassName("nextgroup");

      for(var i = 0; i < cl.length; i++)
      {
        document.getElementById(cl[i].id).style.display = "none";
      }

      document.getElementById("next"+this.divId).style.display = "block";
    
  }*/

  //** Sent to Others */

  senttoyard()
  {
    this.router.navigate(['add_yard']);
    window.localStorage.setItem('returnUrl','add_shipmentplan');
  }

  senttoport()
  {
    this.router.navigate(['add_ports']);
    window.localStorage.setItem('returnUrl','add_shipmentplan');
  }

  senttobooking()
  {
    this.router.navigate(['add_booking']);
    window.localStorage.setItem('returnUrl','add_shipmentplan');
  }

  senttoplan()
  {
    this.router.navigate(['add_loadingplan']);
    window.localStorage.setItem('returnUrl','add_shipmentplan');
  }
}

