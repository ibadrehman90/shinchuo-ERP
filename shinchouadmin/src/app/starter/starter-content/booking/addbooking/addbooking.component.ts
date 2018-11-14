import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent implements OnInit {

  model: any = {};
  public divId = 1;
  public maxdivId = 10;
  public repnum = 1;

  public shipschedule;
  public scheduleSelectable;
  public selectedSchedule;

  public bagency;
  public bagencySelectable;
  public selectedAgency;

  public yards;
  public yardSelectable;
  public selectedYard;
  public yvar;

  public drainageyards;
  public drainageyardsSelectable;
  public selectedDrainageyards;

  public ShipType;
  public SelectedCondition = new Array();
  public SelectedCargo = new Array();
  public SelectedContainerType;
  
  public connum = 1;
  public roronum = 1;

  public containercharges;
  public rorocharges;

  public inspections;
  public selectedInspection = '1';

  public selectedPFA = 'N/A';
  public RecieptUrl = '';

  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {  
    
    document.getElementById("next"+this.divId).style.display = "block"; 

    this.LoadBAgency();
    this.LoadSchedules();
    this.LoadYards();
    this.getContainerCharges();
    this.getRoroCharges();
    this.getInspection();

    $('#bco').datepicker('setDate', new Date());

    var self = this;

    $("#bco").change(function()
    {
      self.SelectBCO();
    });

    
    $('#dco').datepicker('setDate', new Date());
    $('#co').datepicker('setDate', new Date());
    $('#yopen').datepicker('setDate', new Date());

    $("#dco").change(function()
    {
      self.SelectDCO();
    });

    $("#co").change(function()
    {
      self.SelectCO();
    });

    $("#yopen").change(function()
    {
      self.SelectYOPEN();
    });

  }

  SelectBCO()
  {
    this.model.bco = (<HTMLInputElement>document.getElementById('bco')).value;
  }

  SelectDCO()
  {
    this.model.dco = (<HTMLInputElement>document.getElementById('dco')).value;
  }

  SelectCO()
  {
    this.model.co = (<HTMLInputElement>document.getElementById('co')).value;
  }

  SelectYOPEN()
  {
    this.model.yopen = (<HTMLInputElement>document.getElementById('yopen')).value;
  }

  /** Get Details */

  filterBookingAgency(event)
  {
    let tmp = this.bagencySelectable;

    let x = tmp.filter(function(val){
      let y = val.name.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.bagency = x;
  }

  LoadBAgency()
  {
    this.myService.getBagency().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      this.bagency = myd.filter(function(val){
        return val.status == 1;     
      });

      this.bagencySelectable = this.bagency;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectBookingAgency(event, vid)
  {
    $('#next3 .btnself').removeClass('btn-black');
    $('#next3 .btnself').addClass('btn-danger');
    $('#next3 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedAgency = vid;

    let x = this.bagencySelectable.filter(function(val){
      return val.s_id == vid;     
    });

    this.model.bagency = x[0].name;
  }

  filterschedules(event)
  {
    let tmp = this.scheduleSelectable;

    let x = tmp.filter(function(val){
      let y = val.vessel.toLowerCase();
      let y1 = val.voyage.toLowerCase();
      let y2 = val.originport.toLowerCase();
      let y3 = val.destport.toLowerCase();
      return y.indexOf(event.target.value) > -1 || y1.indexOf(event.target.value) > -1 || y2.indexOf(event.target.value) > -1 || y3.indexOf(event.target.value) > -1;     
    });  
    
    this.shipschedule = x;
  }

  LoadSchedules()
  {
    this.myService.getschedules().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      this.shipschedule = myd;
      this.scheduleSelectable = this.shipschedule;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectRoute(event, vid)
  {
    $('#next4 .btnself').removeClass('btn-black');
    $('#next4 .btnself').addClass('btn-danger');
    $('#next4 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedSchedule = vid;

    let x = this.shipschedule.filter(function(val){
      return val.r_id == vid;     
    });

    this.model.route = x;
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

    this.LoadYardServices();
  }

  filterdYard(event)
  {
    let tmp = this.drainageyardsSelectable;

    let x = tmp.filter(function(val){
      let y = val.yardname.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.drainageyards = x;
  }

  LoadYardServices()
  {
    this.selectedDrainageyards = undefined;
    this.myService.getyardswithservices().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      var self = this;

      let z = myd.filter(function(val){
        return val.serviceid == 3;     
      });

      this.drainageyards = z;
      this.drainageyardsSelectable = z;

      let x = myd.filter(function(val){
        return val.y_id == self.selectedYard;     
      });

      let y = x.filter(function(val){
        return val.serviceid == 3;     
      });

      if(y.length > 0)
      {
        this.yvar = 1;
      }
      else
      {
        this.yvar = 0;
      }

    },err => {      
      console.error(err);    
    }); 
  }

  SelectDrainageYard(event, vid)
  {
    $('#next2 .btnself').removeClass('btn-black');
    $('#next2 .btnself').addClass('btn-danger');
    $('#next2 .btnself').text('Select');

    event.target.className = "btnself btn-black";
    event.target.innerText = "Selected";

    this.selectedDrainageyards = vid;

    let x = this.yardSelectable.filter(function(val){
      return val.y_id == vid;     
    });

    this.model.drainageyard = x[0].name;
  }

  ChangeShipType(event)
  {
    this.ShipType = event.target.value;

    if(event.target.value == 'RORO')
    {
      $('#cyodiv').hide();
    }
    else
    {
      $('#cyodiv').show();
    }
  }

  SelectCondition(event, val)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.SelectedCondition.push(val);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.SelectedCondition.indexOf(val);
      this.SelectedCondition.splice(ind, 1);
    }
  }

  SelectCargo(event, val)
  {
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";
      this.SelectedCargo.push(val);
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";
      let ind = this.SelectedCargo.indexOf(val);
      this.SelectedCargo.splice(ind, 1);
    }
  }

  SelectContainerType(event)
  {
    this.SelectedContainerType = event.target.value;
  }

  AddConFreight()
  {
    this.connum++;
    let temp = ' <div class="col-sm-12">    <div class="col-xs-4">      <input name="freight' + this.connum + '" id="freight' + this.connum + '" type="text" class="form-control" placeholder="Freight">    </div>    <div class="col-xs-4">      <input name="txt' + this.connum + '" id="txt' + this.connum + '" type="text" placeholder="Unit" class="form-control">    </div>    <div class="col-xs-4">      <input name="curr' + this.connum + '" id="curr' + this.connum + '" type="text" placeholder="Currency" class="form-control">    </div>  <br/><br/></div>';

    let div = document.createElement('div');
    div.innerHTML = temp;

    document.getElementById('confrieghtdiv').appendChild(div);
  }

  AddRoroFreight()
  {
    this.roronum++;

    let temp = '<div class="col-sm-12">    <div class="col-xs-2">      <input name="freight' + this.roronum + '" id="freight' + this.roronum + '" type="text" class="form-control" placeholder="Freight">    </div>    <div class="col-xs-2">      <select class="form-control" id="txt' + this.roronum + '">        <option value="m3">m3</option>        <option value="unit">unit</option>      </select>    </div>    <div class="col-xs-2">      <select class="form-control" id="curr' + this.roronum + '">        <option value="JPY">JPY</option>        <option value="NZD">NZD</option>        <option value="USD">USD</option>      </select>    </div>    <div class="col-xs-1">      <span></span>    </div>    <div class="col-xs-2">      <input name="rangeu' + this.roronum + '" id="rangeu' + this.roronum + '" type="text" class="form-control" placeholder="m3 Range - From">    </div>    <div class="col-xs-1 text-center">      <p>TO</p>    </div>    <div class="col-xs-2">      <input name="ranged' + this.roronum + '" id="ranged' + this.roronum + '" type="text" class="form-control" placeholder="m3 Range - To">    </div>  </div>';  

    let div = document.createElement('div');
    div.innerHTML = temp;
    $(div).find('div').css('padding', '1px');
    $(div).find('div').css('margin', '0px');

    document.getElementById('rorofrieghtdiv').appendChild(div);
  }

  getContainerCharges()
  {
    this.myService.getcontainercharges().subscribe((data)=>{          
      this.containercharges = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  getRoroCharges()
  {
    this.myService.getrorocharges().subscribe((data)=>{          
      this.rorocharges = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  getInspection()
  {
    this.myService.getinspections().subscribe((data)=>{          
      this.inspections = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  ChangeInspection(event)
  {
    this.selectedInspection = event.target.value;

    let x = this.inspections.filter(function(val){
      return val.ins_id == event.target.value;     
    });

    this.model.ins = x[0].iname;
  }

  ChangePFA(event)
  {
    this.selectedPFA = event.target.value;
  }

  AddFreightContainer()
  {
    if(this.ShipType == 'CONTAINER')
    {
    let tempcon = '<table class="table"><thead><tr><th>Freight Rate</th><th>Currency</th></tr></thead><tbody>';

    for(let i = 1; i <= this.connum; i++)
    {
      tempcon += '<tr><td>';
      tempcon += (<HTMLInputElement>document.getElementById('freight' + i)).value;
      tempcon += '';
      tempcon += (<HTMLInputElement>document.getElementById('txt' + i)).value;
      tempcon += '</td><td>';
      tempcon += (<HTMLInputElement>document.getElementById('curr' + i)).value;
      tempcon += '</td></tr>';
    }

      tempcon += '</tbody></table>';

      document.getElementById('freightcontainer').innerHTML = tempcon;
    }
    else if(this.ShipType == 'RORO')
    {
      let temproro = '<table class="table"><thead><tr><th>Freight Rate</th><th>Currency</th><th>Validity</th></tr></thead><tbody>';

      for(let i = 1; i <= this.roronum; i++)
    {
      temproro += '<tr><td>';
      temproro += (<HTMLInputElement>document.getElementById('freight' + i)).value;
      temproro += ' ';
      temproro += (<HTMLSelectElement>document.getElementById('txt' + i)).value;
      temproro += '</td><td>';
      temproro += (<HTMLSelectElement>document.getElementById('curr' + i)).value;
      temproro += '</td><td>';
      temproro += (<HTMLInputElement>document.getElementById('rangeu' + i)).value;
      temproro += ' ~ ';
      temproro += (<HTMLInputElement>document.getElementById('ranged' + i)).value;
      temproro += '</td></tr>';
    }

      temproro += '</tbody></table>';

      document.getElementById('freightcontainer').innerHTML = temproro;
    }

    
  }

  AddPaymentContainer()
  {
    if(this.ShipType == 'CONTAINER')
    {
      let temp = '<table class="table"><tbody>';
      for(let i = 0; i < this.containercharges.length; i++)
      {
          temp += '<tr><td>';
          temp += this.containercharges[i].charge;
          temp += '</td><td>';
          temp += (<HTMLSelectElement>document.getElementById("concharge" + this.containercharges[i].c_id)).value;
          temp += '</td></tr>';
      }

      temp += '</tbody></table>';

      document.getElementById('paymentcontainer').innerHTML = temp;
    }
    else if(this.ShipType == 'RORO')
    {
      let temp = '<table class="table"><tbody>';
      for(let i = 0; i < this.rorocharges.length; i++)
      {
          temp += '<tr><td>';
          temp += this.rorocharges[i].charge;
          temp += '</td><td>';
          temp += (<HTMLSelectElement>document.getElementById("rorocharge" + this.rorocharges[i].c_id)).value;
          temp += '</td></tr>';
      }

      temp += '</tbody></table>';

      document.getElementById('paymentcontainer').innerHTML = temp;
    }
  }

  UploadFile(event)
  {
    let fileList: FileList = event.target.files;
    
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('fileToUpload', file, file.name);
        formData.append('userid', window.localStorage.getItem("adm_user"));
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });

        

        this.myService.uploadReciept(options, formData).subscribe((data)=>{          
          let myd = JSON.parse(data);

          if(myd == "Done")
          {
            this.RecieptUrl = "http://shinchuo-test2.com/shinchouadmin/webservices/booking/reciepts/" + file.name;
          }
          else
          {
            alert(myd);
          }
        },err => {      
          console.error(err);    
        });
        
    }
  }



  BackForm()
  {
    if(this.divId > 1)
    {
      this.divId--;

      if(this.yvar == 1 && this.divId == 2)
      {
        this.divId--;
      }

      if(this.ShipType == 'RORO' && this.divId == 6)
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
    if(this.divId == 8)
    {
      this.AddFreightContainer();
    }
    else if(this.divId == 9)
    {
      this.AddPaymentContainer();
    }

    if(this.selectedYard != undefined)
    {
     
          if(this.divId < this.maxdivId)
          {
            this.divId++;

            if(this.yvar == 1 && this.divId == 2)
            {
              this.divId++;
            }      

            if(this.ShipType == 'RORO' && this.divId == 6)
            {
              this.divId++;
            }

            if(this.ShipType == undefined && this.divId == 6 || this.ShipType == '' && this.divId == 6)
            {
              alert("Shipment Type must be selected first!");
              this.divId--;
            }
            else
            {
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
      alert("Yard must be selected first!");
    }
  }


  //** Sent to DB */
   SaveForm()
  {
    $('.smallLoader').show();

    let freightcont = '';
    let paymentcont = '';

    if(this.ShipType == 'CONTAINER')
    {
        let tempcon = '';

        for(let i = 1; i <= this.connum; i++)
        {
          if(i > 1)
          tempcon += ',';

          tempcon += '{"freight":"';
          tempcon += (<HTMLInputElement>document.getElementById('freight' + i)).value;
          tempcon += '", "unit":"';
          tempcon += (<HTMLInputElement>document.getElementById('txt' + i)).value;
          tempcon += '", "currency":"';
          tempcon += (<HTMLInputElement>document.getElementById('curr' + i)).value;
          tempcon += '", "range":"';
          tempcon += '"}';
        }

        freightcont = tempcon;
    }
    else if(this.ShipType == 'RORO')
    {
        let tempcon = '';

        for(let i = 1; i <= this.roronum; i++)
        {
          if(i > 1)
          tempcon += ',';

          tempcon += '{"freight":"';
          tempcon += (<HTMLInputElement>document.getElementById('freight' + i)).value;
          tempcon += '", "unit":"';
          tempcon += (<HTMLInputElement>document.getElementById('txt' + i)).value;
          tempcon += '", "currency":"';
          tempcon += (<HTMLInputElement>document.getElementById('curr' + i)).value;
          tempcon += '", "range":"';
          tempcon += (<HTMLInputElement>document.getElementById('rangeu' + i)).value;
          tempcon += ' ~ ';
          tempcon += (<HTMLInputElement>document.getElementById('ranged' + i)).value;
          tempcon += '"}';
        }

        freightcont = tempcon;
    }  
    
    if(this.ShipType == 'CONTAINER')
    {
      let temp = '';
      
      for(let i = 0; i < this.containercharges.length; i++)
      {
        if(i > 0)
          temp += ',';

          temp += '{"charge":"';
          temp += this.containercharges[i].c_id;
          temp += '", "selectopt":"';
          temp += (<HTMLSelectElement>document.getElementById("concharge" + this.containercharges[i].c_id)).value;
          temp += '"}';
      }

      paymentcont = temp;
    }
    else if(this.ShipType == 'RORO')
    {
      let temp = '';
      for(let i = 0; i < this.rorocharges.length; i++)
      {
        if(i > 0)
          temp += ',';

          temp += '{"charge":"';
          temp += this.rorocharges[i].c_id;
          temp += '", "selectopt":"';
          temp += (<HTMLSelectElement>document.getElementById("rorocharge" + this.rorocharges[i].c_id)).value;
          temp += '"}';
      }

      paymentcont = temp;
    }

      this.myService.addbooking(this.selectedYard, this.selectedDrainageyards, this.selectedAgency, this.selectedSchedule,this.model.bookingno, this.model.bco, this.ShipType, this.SelectedContainerType, this.SelectedCargo.join(), this.SelectedCondition.join(), this.model.qty, this.model.yopen, this.model.address, this.model.dco, this.model.co, this.model.dft, this.model.dmft, this.selectedInspection, this.selectedPFA, this.RecieptUrl, freightcont, paymentcont).subscribe((data)=>{          
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
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Booking No already exist!";
        }
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        $('.smallLoader').hide();

      },err => {      
        console.error(err);    
      }); 
  }

  ResetForm()
  {

  
this.model = {};
this.divId = 1;
this.maxdivId = 10;
this.repnum = 1;

this.selectedSchedule = undefined;
this.selectedAgency = undefined;
this.selectedYard = undefined;
this.yvar = undefined;
this.selectedDrainageyards = undefined;
this.SelectedCondition = new Array();
this.SelectedCargo = new Array();
this.SelectedContainerType = undefined;
this.ShipType = undefined;

this.connum = 1;
this.roronum = 1;

this.selectedInspection = '1';

this.selectedPFA = 'N/A';

document.getElementById('freightcontainer').innerHTML = '';
document.getElementById('paymentcontainer').innerHTML = '';

    
    this.LoadBAgency();
    this.LoadSchedules();
    this.LoadYards();
    this.getContainerCharges();
    this.getRoroCharges();
    this.getInspection();


  
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

  senttobookingagency()
  {
    this.router.navigate(['add_bookingagent']);
    window.localStorage.setItem('returnUrl','add_booking');
  }

  senttoshipment()
  {
    this.router.navigate(['add_shipmentschedule']);
    window.localStorage.setItem('returnUrl','add_booking');
  }

  senttoconcharge()
  {
    this.router.navigate(['add_containercharge']);
    window.localStorage.setItem('returnUrl','add_booking');
  }

  senttororocharge()
  {
    this.router.navigate(['add_rorocharge']);
    window.localStorage.setItem('returnUrl','add_booking');
  }
}
