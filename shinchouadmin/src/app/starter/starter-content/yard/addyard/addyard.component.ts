import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addyard',
  templateUrl: './addyard.component.html',
  styleUrls: ['./addyard.component.css']
})
export class AddyardComponent implements OnInit {
  model: any = {};
  public divId = 1;
  public maxdivId = 5;
  public repnum = 1;
  public Countries;
  public ports;
  public portsSelectable;
  public selectedPorts = new Array();
  public selectedYardService = new Array();
  public yardservice;
  public yardserviceSelectable;
  public representSelectable;
  public returnurl = '';
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 

    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });

    this.getPorts();
    this.getYardservices();

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

  Addservice(event, portid)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.selectedYardService.push(portid);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedYardService.indexOf(portid);
      this.selectedYardService.splice(ind, 1);
    }

    let temp = '';

    for(var i = 0; i < this.selectedYardService.length; i++)
    {
      let mylist = this.selectedYardService[i];
      let x = this.yardserviceSelectable.filter(function(val){
        return val.ys_id == mylist;     
      });

      temp += '<p>' + x[0].servicename + '</p>';

    }

    document.getElementById("yardservicesum").innerHTML = temp;

  }

  Addport(event, portid)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.selectedPorts.push(portid);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedPorts.indexOf(portid);
      this.selectedPorts.splice(ind, 1);
    }    
    let temp = '';

    for(var i = 0; i < this.selectedPorts.length; i++)
    {
      let mylist = this.selectedPorts[i];
      let x = this.portsSelectable.filter(function(val){
        return val.port_id == mylist;     
      });

      temp += '<p>' + x[0].port + ', ' + x[0].country + '</p>';

    }

    document.getElementById("portsum").innerHTML = temp;
  }

  filterYard(event)
  {
    let tmpports = this.portsSelectable;

    let x = tmpports.filter(function(val){
      let y = val.port.toLowerCase();
      return y.indexOf(event.target.value) > -1;     
    });  
    
    this.ports = x;
  }

  filterYardService(event)
  {
    let tmpports = this.yardserviceSelectable;

    let x = tmpports.filter(function(val){
      let y = val.servicename.toLowerCase();
      return y.indexOf(event.target.value) > -1;     
    });  
    
    this.yardservice = x;
  }

  getYardservices()
  {
    this.myService.getyardservice().subscribe((data)=>{          
      this.yardservice = JSON.parse(data).Status;
      this.yardserviceSelectable = this.yardservice;
      
    },err => {      
      console.error(err);    
    });
  }

  getPorts()
  {
    this.myService.getallpendingports().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;
      console.log(myd);
      let x = myd.filter(function(val){
        return val.approval == 1;     
      });  
      
      this.ports = x;
      this.portsSelectable = this.ports;
      
    },err => {      
      console.error(err);    
    });
  }

  Addrep()
  {
    this.repnum++;
    let temp = '<div class="col-xs-12"><h3>Representative # ' + this.repnum + '</h3><hr/></div><div class="form-group col-xs-12">   <label class="col-sm-4 control-label">Representative</label>    <div class="col-sm-8">      <input id="rep' + this.repnum + '" name="rep' + this.repnum + '" [(ngModel)] = "model.rep' + this.repnum + '" type="text" class="form-control" placeholder="Enter Representative">    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Mobile</label>    <div class="col-sm-8">      <input id="mob' + this.repnum + '" name="mob' + this.repnum + '" [(ngModel)] = "model.mob' + this.repnum + '" type="text" class="form-control" placeholder="Enter Mobile">    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Email</label>    <div class="col-sm-8">      <input id="remail' + this.repnum + '" name="remail' + this.repnum + '" [(ngModel)] = "model.remail' + this.repnum + '" type="text" class="form-control" placeholder="Enter Email">    </div>  </div>';

    let div = document.createElement('div');
    div.innerHTML = temp;

    document.getElementById('next3').appendChild(div);    
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

    if(this.divId == 4)
    {
      let temp2 = '<table class="table table-bordered"><thead><th>Name</th><th>Contact</th></thead><tbody>';

      for(var i = 1; i <= this.repnum; i++)
      {
        temp2 += '<tr><td>';
        temp2 += (<HTMLInputElement>document.getElementById('rep' + i)).value;
        temp2 += '</td>';
        temp2 += '<td>';
        temp2 += (<HTMLInputElement>document.getElementById('mob' + i)).value + '</br>';
        temp2 += (<HTMLInputElement>document.getElementById('remail' + i)).value;
        temp2 += '</td></tr>';
      }

      temp2 += '</tbody></table>';

      document.getElementById("represent").innerHTML = temp2;
    }
  }


  SaveForm()
  {
    $('.smallLoader').show();
    let dte = new Date();
    let temp2 = '';
      for(var i = 1; i <= this.repnum; i++)
      {
        if(i > 1)
        temp2 += ',';

        temp2 += '{"rep":"';
        temp2 += (<HTMLInputElement>document.getElementById('rep' + i)).value;
        temp2 += '", "mob":"';
        temp2 += (<HTMLInputElement>document.getElementById('mob' + i)).value + '", "remail":"';
        temp2 += (<HTMLInputElement>document.getElementById('remail' + i)).value;
        temp2 += '"}';
      }

    if(this.model.yardname != undefined && this.model.branch != undefined && this.model.streetaddress != undefined && this.model.billingaddress != undefined && this.model.city != undefined && this.model.country != undefined && this.model.postalcode != undefined)
    {
      this.myService.addYard(this.model.yardname, this.model.branch, this.model.streetaddress, this.model.billingaddress, this.model.city, this.model.prefacture, this.model.postalcode, this.model.country, this.model.tel, this.model.fax, this.model.email, temp2, JSON.stringify(this.selectedPorts), JSON.stringify(this.selectedYardService), dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data);
        console.log(myd);
        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.ResetForm();
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
    else
    {      
      document.getElementById("dan_msg").style.display = "block";
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
      $('.smallLoader').hide();
    }
  }

  ResetForm()
  {
    this.model.yardname = undefined;
    this.model.branch = undefined;
    this.model.streetaddress = undefined;
    this.model.billingaddress = undefined;
    this.model.city = undefined;
    this.model.prefacture = undefined;
    this.model.country = undefined;
    this.model.postalcode = undefined;
    this.model.tel = undefined;
    this.model.fax = undefined;    
    this.model.email = undefined;

    document.getElementById("represent").innerHTML = '';
    document.getElementById("portsum").innerHTML = '';
    document.getElementById("yardservicesum").innerHTML = '';
    
    this.selectedPorts = new Array();
    this.selectedYardService =  new Array();

    this.getPorts();
    this.getYardservices();

    this.divId = 1;
    this.repnum = 0;

    document.getElementById('next3').innerHTML = '';
    this.Addrep();

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
    window.localStorage.setItem('returnUrl', 'add_yard');
  }

  senttoyardservice()
  {
    this.router.navigate(['add_yardservice']);
    window.localStorage.setItem('returnUrl', 'add_yard');
  }
}
