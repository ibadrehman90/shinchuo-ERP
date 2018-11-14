import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addconsignee',
  templateUrl: './addconsignee.component.html',
  styleUrls: ['./addconsignee.component.css']
})
export class AddconsigneeComponent implements OnInit {

  model: any = {};
  public divId = 1;
  public maxdivId = 4;
  public repnum = 1;

  public ports;
  public portsSelectable;
  public selectedPorts = new Array();

  public Clients;
  public clientSelectable;
  public selectedClients = new Array();
  public selectedclient;

  public Vehicle;
  public vehicleSelectable;
  public selectedVehicles = new Array();

  public selectedUsage;
  public selectedDestination = new Array();

  public returnurl = '';
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 

    this.getPorts();
    this.LoadClients();

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

  /** Get Details */

  filterPort(event)
  {
    let tmpports = this.portsSelectable;

    let x = tmpports.filter(function(val){
      let y = val.port.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
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


  LoadClients()
  {
    this.myService.getClients("admin", "admin").subscribe((data)=>{          
     
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.status == 1;     
      });  
      
      this.Clients = x;
      this.clientSelectable = this.Clients;
       

    },err => {      
      console.error(err);    
    }); 
  }
  
  filterClient(event)
  {
    let tmpports = this.clientSelectable;

    let x = tmpports.filter(function(val){
      let y = val.username.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.Clients = x;
  }

  /** Add Details */

  SelectUsage(event, valusage)
  {
    $('#next1 .btnself').removeClass('btn-black');
    $('#next1 .btnself').addClass('btn-danger');
    $('#next1 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedUsage = valusage;

    this.selectedClients = new Array();
    this.selectedDestination = new Array();

    if(this.selectedUsage == 'Single Use')
    {
      this.maxdivId = 5;
    }
    else
    {
      this.maxdivId = 4;
    }
  }

  SelectDestination(event, val)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.selectedDestination.push(val);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedDestination.indexOf(val);
      this.selectedDestination.splice(ind, 1);
    }

    let i = 0;
    var self = this;
    let selport = '';

    for(i = 0; i < this.selectedDestination.length; i++)
    {
      let x = this.portsSelectable.filter(function(val){
        return val.port_id == self.selectedDestination[i];     
      });

      selport += '<p>';
      selport += x[0].port + ", " + x[0].country + "</p>";
    }

    document.getElementById("selports").innerHTML = selport;

  }

  AddClient(event, val)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.selectedClients.push(val);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedClients.indexOf(val);
      this.selectedClients.splice(ind, 1);
    }

    document.getElementById("selclient").innerHTML = this.selectedClients.join();
  }

  SelectClient(event, vid)
  {
    $('#next4 .btnself').removeClass('btn-black');
    $('#next4 .btnself').addClass('btn-danger');
    $('#next4 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedclient = vid;

    this.Vehicle = undefined;
    this.vehicleSelectable = undefined;
    this.selectedVehicles = new Array();

    let selport = '';

      selport += '<p>';
      selport += this.selectedclient + "</p>";

    document.getElementById("selclient").innerHTML = selport;

    this.LoadVehicles();
  }

  LoadVehicles()
  {
    this.myService.getClientVehicles(this.selectedclient).subscribe((data)=>{          
     
      let myd = JSON.parse(data).Status;
      
      this.Vehicle = myd;
      this.vehicleSelectable = this.Vehicle;      

    },err => {      
      console.error(err);    
    }); 
  }

  filterVehicles(event)
  {
    let tmpports = this.vehicleSelectable;

    let x = tmpports.filter(function(val){
      let y = val.prefix.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.Vehicle = x;
  }

  AddVehicles(event, val)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.selectedVehicles.push(val);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedVehicles.indexOf(val);
      this.selectedVehicles.splice(ind, 1);
    }
  }

  BackForm()
  {
    if(this.divId > 1)
    {
      this.divId--;

      if(this.selectedUsage != 'Default' && this.divId == 3)
      {
        this.divId--;
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
    if(this.divId < this.maxdivId)
    {
      this.divId++;

      if(this.selectedUsage != 'Default' && this.divId == 3)
      {
        this.divId++;
      }

      let cl = document.getElementsByClassName("nextgroup");

      for(var i = 0; i < cl.length; i++)
      {
        document.getElementById(cl[i].id).style.display = "none";
      }

      document.getElementById("next"+this.divId).style.display = "block";
    }
  }


  SaveForm()
  {
      $('.smallLoader').show();
    
      let temp1 = '';
      let temp2 = '';
      let temp3 = '';

      if(this.selectedUsage == 'Default')
      {

        for(var i = 0; i < this.selectedDestination.length; i++)
        {
          if(i > 0)
          temp1 += ',';

          temp1 += '{"dest":"';
          temp1 += this.selectedDestination[i];
          temp1 += '"}';
        }

      }

      if(this.selectedUsage == 'Single Use')
      {
        temp2 = this.selectedclient;

        for(var i = 0; i < this.selectedVehicles.length; i++)
        {
          if(i > 0)
          temp3 += ',';
  
          temp3 += '{"vehicle":"';
          temp3 += this.selectedVehicles[i];
          temp3 += '"}';
        }
      }
      else
      {      
        for(var i = 0; i < this.selectedClients.length; i++)
        {
          if(i > 0)
          temp2 += ',';

          temp2 += '{"client":"';
          temp2 += this.selectedClients[i];
          temp2 += '"}';
        }
      }

     

      this.myService.addConsignee(this.selectedUsage, this.model.cname, this.model.caddress, this.model.tel, this.model.fax, this.model.email, temp1, temp2, temp3, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        let myd = JSON.parse(data);

        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.ResetForm();
        }
        else if(myd.Status == "Exist")
        {
          
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgalert").innerHTML = "Consignee Name Already Exist!";
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
    this.LoadClients();
    this.getPorts();

    this.model = {};

    if(this.selectedUsage == 'Default')
    document.getElementById("selports").innerHTML = '';


    document.getElementById("selclient").innerHTML = '';    

    $('#next1 .btnself').removeClass('btn-black');
    $('#next1 .btnself').addClass('btn-danger');
    $('#next1 .btnself').text('Select');

    this.divId = 1;
    this.maxdivId = 4;
    this.repnum = 0;

    this.selectedclient = undefined;
    this.selectedVehicles = new Array();
    this.selectedUsage = undefined;
    this.selectedDestination = new Array();    

    let cl = document.getElementsByClassName("nextgroup");

      for(var i = 0; i < cl.length; i++)
      {
        document.getElementById(cl[i].id).style.display = "none";
      }

      document.getElementById("next"+this.divId).style.display = "block";
    
  }

  senttoport()
  {
    this.router.navigate(['add_ports']);
  }

  senttoclient()
  {
    this.router.navigate(['add_client']);
  }
}
