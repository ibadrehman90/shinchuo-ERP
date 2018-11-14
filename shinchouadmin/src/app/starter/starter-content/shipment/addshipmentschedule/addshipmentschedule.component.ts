import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addshipmentschedule',
  templateUrl: './addshipmentschedule.component.html',
  styleUrls: ['./addshipmentschedule.component.css']
})
export class AddshipmentscheduleComponent implements OnInit {

  model: any = {};
  public divId = 1;
  public maxdivId = 3;
  public repnum = 1;

  public ports;
  public portsSelectable;
  public selectedPorts = new Array();

  public destports;
  public destportsSelectable;
  public selectedDestPorts = new Array();

  public vessel;
  public vesselSelectable;
  public selectedVessels = new Array();
  public selectedV;

  public voyage;
  public voyageSelectable;
  public selectedVoyage = new Array();
  public selectedVoy;
  
  public returnurl = '';
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 

    this.getVessel();
    this.getPorts();

    var self = this;

    $("#etd1").change(function()
    {
      self.ChangeSelect();
    });

    $("#eta1").change(function()
    {
      self.ChangeSelect();
    });

    $('#etd1').datepicker('setDate', new Date());
    $('#eta1').datepicker('setDate', new Date());
  
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
      this.destports = x;
      this.destportsSelectable = this.ports;
      
    },err => {      
      console.error(err);    
    });
  }

  filterDestPort(event)
  {
    let tmpports = this.destportsSelectable;

    let x = tmpports.filter(function(val){
      let y = val.port.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.destports = x;
  }

  filterVessel(event)
  {
    let tmpvessel = this.vesselSelectable;

    let x = tmpvessel.filter(function(val){
      let y = val.vesselname.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.vessel = x;
  }

  getVessel()
  {
    this.myService.getvessel().subscribe((data)=>{          
      let myd = JSON.parse(data).Status; 
      
      this.vessel = myd;
      this.vesselSelectable = this.vessel;
      
    },err => {      
      console.error(err);    
    });
  }

  filterVoyage(event)
  {
    let tmpvoyage = this.voyageSelectable;

    let x = tmpvoyage.filter(function(val){
      let y = val.voyage.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.voyage = x;
  }

  getVoyage()
  {
    this.myService.getvoyages(this.selectedV).subscribe((data)=>{          
      let myd = JSON.parse(data).Status; 
      
      this.voyage = myd;
      this.voyageSelectable = this.voyage;
      
    },err => {      
      console.error(err);    
    });
  }



  /** Add Details */

  Addvessel(event, vid)
  {
    $('#next1 .btnself').removeClass('btn-black');
    $('#next1 .btnself').addClass('btn-danger');
    $('#next1 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedV = vid;
    this.getVoyage();

    let x = this.vesselSelectable.filter(function(val){
      return val.ys_id == vid;     
    });
    
    this.model.selectedVessel = x[0].vesselname;

    this.selectedVoy = undefined;
    this.model.selectedVoyage = undefined;
  }

  Addvoyage(event, vid)
  {
    $('#next2 .btnself').removeClass('btn-black');
    $('#next2 .btnself').addClass('btn-danger');
    $('#next2 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedVoy = vid;

    let x = this.voyageSelectable.filter(function(val){
      return val.v_id == vid;     
    });
    
    this.model.selectedVoyage = x[0].voyage;
  }

  Addroute()
  {
    this.repnum++;
    let temp = '<div class="col-xs-12"><h3>Route # '+ this.repnum +'</h3><hr/></div><div class="form-group col-xs-12"><label class="col-sm-4 control-label">Origin Port</label><div class="col-sm-8">    <select class="form-control" id="origin'+ this.repnum +'">       <option value="">Select Port</option>';
    
    for(let i = 0; i < this.ports.length; i++)
    temp += '<option value="'+ this.ports[i].port_id +'">'+ this.ports[i].port +'</option>';
    
    temp += '</select>    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">ETD</label>    <div class="col-sm-8">      <div class="input-group date">          <div class="input-group-addon">                <i class="fa fa-calendar"></i>          </div>          <input id="etd'+ this.repnum +'" name="bto" type="text" class="form-control pull-right" placeholder="ETD">      </div>    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Destination Port</label>    <div class="col-sm-8">      <select class="form-control" id="dest'+ this.repnum +'">        <option value="">Select Port</option>        ';
    
    for(let i = 0; i < this.ports.length; i++)
    temp += '<option value="'+ this.ports[i].port_id +'">'+ this.ports[i].port +'</option>';
    
    temp += '</select>    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">ETA</label>    <div class="col-sm-8">      <div class="input-group date">          <div class="input-group-addon">                <i class="fa fa-calendar"></i>          </div>          <input id="eta'+ this.repnum +'" name="bto" type="text" class="form-control pull-right" placeholder="ETA">      </div>    </div>  </div>';
    
    let div = document.createElement('div');
    div.innerHTML = temp;

    document.getElementById('next3').appendChild(div);    

    var self = this;

    $('#etd' + this.repnum).change(function()
    {
      self.ChangeSelect();
    });

    $('#eta' + this.repnum).change(function()
    {
      self.ChangeSelect();
    });

    $('#origin' + this.repnum).change(function()
    {
      self.ChangeSelect();
    });

    $('#dest' + this.repnum).change(function()
    {
      self.ChangeSelect();
    });

    $('#etd' + this.repnum).datepicker('setDate', new Date());
    $('#eta' + this.repnum).datepicker('setDate', new Date());
  }

  ChangeSelect()
  {
    if(this.divId == 3)
    {
        let temp2 = '<table class="table table-bordered"><thead><th>Origin</th><th>Destination</th></thead><tbody>';

        for(var i = 1; i <= this.repnum; i++)
        {

          let origin = (<HTMLSelectElement>document.getElementById('origin' + i));
          let dest = (<HTMLSelectElement>document.getElementById('dest' + i));

          temp2 += '<tr><td>';
          temp2 += origin.options[origin.selectedIndex].text + '</br>';
          temp2 += (<HTMLInputElement>document.getElementById('etd' + i)).value;
          temp2 += '</td>';
          temp2 += '<td>';
          temp2 += dest.options[dest.selectedIndex].text + '</br>';
          temp2 += (<HTMLInputElement>document.getElementById('eta' + i)).value;
          temp2 += '</td></tr>';
        }

        temp2 += '</tbody></table>';

        document.getElementById("represent").innerHTML = temp2;
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


  SaveForm()
  {
    $('.smallLoader').show();
    
      let temp2 = '';
      for(var i = 1; i <= this.repnum; i++)
      {
        if(i > 1)
        temp2 += ',';

        temp2 += '{"origin":"';
        temp2 += (<HTMLInputElement>document.getElementById('origin' + i)).value;
        temp2 += '", "etd":"';
        temp2 += (<HTMLInputElement>document.getElementById('etd' + i)).value + '", "dest":"';
        temp2 += (<HTMLInputElement>document.getElementById('dest' + i)).value;
        temp2 += '", "eta":"';
        temp2 += (<HTMLInputElement>document.getElementById('eta' + i)).value
        temp2 += '"}';
      }

      this.myService.addschedule(this.selectedV, this.selectedVoy, temp2, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        let myd = JSON.parse(data);

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

  ResetForm()
  {
    this.getVessel();
    this.getPorts();

    this.selectedV = undefined;
    this.selectedVoy = undefined;
    this.model.selectedVessel = undefined;
    this.model.selectedVoyage = undefined;
    this.voyage = undefined;
    this.voyageSelectable = undefined;

    document.getElementById("represent").innerHTML = '';
    
    this.selectedPorts = new Array();
    this.selectedDestPorts = new Array();
    this.selectedVessels = new Array();
    this.selectedVoyage = new Array();

   
    

    this.divId = 1;
    this.repnum = 0;

    document.getElementById('next3').innerHTML = '';
    this.Addroute();

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

  senttovessel()
  {
    this.router.navigate(['add_vessel']);
    window.localStorage.setItem('returnUrl','add_shipmentschedule');
  }

  senttovoyage()
  {
    this.router.navigate(['add_voyage']);
    window.localStorage.setItem('returnUrl','add_shipmentschedule');
  }
}
