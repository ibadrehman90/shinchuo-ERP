import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addbookingagent',
  templateUrl: './addbookingagent.component.html',
  styleUrls: ['./addbookingagent.component.css']
})
export class AddbookingagentComponent implements OnInit {
  model: any = {};
  public divId = 1;
  public maxdivId = 4;
  public repnum = 1;
  public selectedBagencyService = new Array();
  public bagencyserviceSelectable;
  public bagencyservice;
  public representSelectable;
  public returnurl = '';
  
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 

    this.getBAgencyServices();

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
      this.selectedBagencyService.push(portid);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.selectedBagencyService.indexOf(portid);
      this.selectedBagencyService.splice(ind, 1);
    }

    let temp = '';

    for(var i = 0; i < this.selectedBagencyService.length; i++)
    {
      let mylist = this.selectedBagencyService[i];
      let x = this.bagencyserviceSelectable.filter(function(val){
        return val.ys_id == mylist;     
      });

      temp += '<p>' + x[0].servicename + '</p>';

    }

    document.getElementById("yardservicesum").innerHTML = temp;

  }

  filterBAgencyService(event)
  {
    let tmpports = this.bagencyserviceSelectable;

    let x = tmpports.filter(function(val){
      let y = val.servicename.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.bagencyservice = x;
  }

  getBAgencyServices()
  {
    this.myService.getallbookingservices().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;

      this.bagencyservice = myd.filter(function(val){
        return val.approval == 1;     
      });

      this.bagencyserviceSelectable = this.bagencyservice;
      
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

    if(this.model.bagencyname != undefined && this.model.branch != undefined && this.model.address != undefined)
    {
      this.myService.addBAgency(this.model.bagencyname, this.model.branch, this.model.address, this.model.tel, this.model.fax, this.model.email, temp2, JSON.stringify(this.selectedBagencyService), dte.toString()).subscribe((data)=>{          
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
    }
  }

  ResetForm()
  {
    this.model.bagencyname = undefined;
    this.model.branch = undefined;
    this.model.address = undefined;
    this.model.tel = undefined;
    this.model.fax = undefined;    
    this.model.email = undefined;

    document.getElementById("represent").innerHTML = '';
    document.getElementById("yardservicesum").innerHTML = '';
    
    this.selectedBagencyService =  new Array();

    this.getBAgencyServices();

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

  senttobagencyservices()
  {
    this.router.navigate(['add_bookingservice']);
    window.localStorage.setItem('returnUrl','add_bookingagent');
  }
}
