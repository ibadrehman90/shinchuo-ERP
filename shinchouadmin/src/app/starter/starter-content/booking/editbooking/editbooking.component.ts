import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.css']
})
export class EditbookingComponent implements OnInit {

  model: any = {};
  productID: string;
  public ValSelect;
  public booking;
  public frieght;
  public payment;
  public drainageyards;
  public inspections;
  public RecieptUrl;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    
   }

  ngOnInit() {

    document.getElementById("yardup").style.display = "none";
    
    this.LoadData();  

  }

  EditItem(val)
  {
    document.getElementById("yardup").style.display = "block";
    $('.nextgroup').hide();
    this.ValSelect = val;

    if(val == 1)
    {
      $('#yardup .box-title').text("Edit Drainage Yard");
      $('#next1').show();
    }
    else if(val == 2)
    {
      $('#yardup .box-title').text("Edit Shipment Type");
      $('#next2').show();
    }
    else if(val == 3)
    {
      $('#yardup .box-title').text("Edit Cargo Type");
      $('#next3').show();
    }
    else if(val == 4)
    {
      $('#yardup .box-title').text("Edit Condition");
      $('#next4').show();
    }
    else if(val == 5)
    {
      $('#yardup .box-title').text("Edit Confirmed On");
      $('#next5').show();
    }
    else if(val == 6)
    {
      $('#yardup .box-title').text("Edit Reserved Qty");
      $('#next6').show();
    }
    else if(val == 7)
    {
      $('#yardup .box-title').text("Edit Yard Open");
      $('#next7').show();
    }
    else if(val == 8)
    {
      $('#yardup .box-title').text("Edit Address");
      $('#next8').show();
    }
    else if(val == 9)
    {
      $('#yardup .box-title').text("Edit Penalty Free Ammendment");
      $('#next9').show();
    }
    else if(val == 10)
    {
      $('#yardup .box-title').text("Edit Document Cut Off");
      $('#next10').show();
    }
    else if(val == 11)
    {
      $('#yardup .box-title').text("Edit Entry Cut Off");
      $('#next11').show();
    }
    else if(val == 12)
    {
      $('#yardup .box-title').text("Edit Detention Free time");
      $('#next12').show();
    }
    else if(val == 13)
    {
      $('#yardup .box-title').text("Edit Demurrage Free time");
      $('#next13').show();
    }
    else if(val == 14)
    {
      $('#yardup .box-title').text("Edit Freight Rates");
      $('#next14').show();
    }
    else if(val == 15)
    {
      $('#yardup .box-title').text("Edit Booking Payment Terms");
      $('#next15').show();
    }
    else if(val == 16)
    {
      $('#yardup .box-title').text("Edit Required Inspections");
      $('#next16').show();
    }
    else if(val == 17)
    {
      $('#yardup .box-title').text("Edit Booking Reciept");
      $('#next17').show();
    }

    window.scrollTo(0,0);
  }

  LoadData()
  {
    this.myService.getsinglebooking(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status[0];   
      console.log(myd);
      this.model.yardname = myd.yard;
      this.model.bookingno = myd.bookingno;
      this.model.drainageyard = myd.drainageyard;
      this.model.bagency = myd.bagency;
      this.model.vessel = myd.vessel;
      this.model.voyage = myd.voyage;
      this.model.origin = myd.origin;
      this.model.dest = myd.dest;
      this.model.etd = myd.etd;
      this.model.eta = myd.eta;
      this.model.shipmenttype = myd.shipmentype;
      this.model.confirmedon = myd.confirmedon;
      this.model.qty = myd.qty;
      this.model.dco = myd.dco;
      this.model.yco = myd.yco;
      this.model.dft = myd.dft;
      this.model.dmft = myd.dmft;
      this.model.address = myd.address;
      this.model.penaltyfree = myd.penaltyfree;
      this.model.inspection = myd.inspection;
      this.model.reciepturl = myd.reciepturl;
      this.model.cargotype = myd.cargotype;
      this.model.contype = myd.contype;
      this.model.conditiontype = myd.conditiontype;
      this.model.yardopen = myd.yardopen;

      this.model.cargotable = this.model.cargotype.split(',');
      this.model.conditiontable = this.model.conditiontype.split(',');

      $('#bco').datepicker('setDate', new Date(this.model.confirmedon));
      $('#dco').datepicker('setDate', new Date(this.model.dco));
      $('#co').datepicker('setDate', new Date(this.model.yco));
      $('#yopen').datepicker('setDate', new Date(this.model.yardopen));


      this.LoadFrieght();
      this.LoadPayment();
      this.LoadYardwitServices();
      this.LoadCargoTypes();
      this.LoadConditionTypes();
      this.getInspection();
 
     },err => {      
       console.error(err);    
     });     
  }

  LoadFrieght()
  {
    this.myService.getbookingfreight(this.productID).subscribe((data)=>{          
      this.frieght = JSON.parse(data).Status;     
 
     },err => {      
       console.error(err);    
     });     
  }

  LoadPayment()
  {
    this.myService.getbookingpayment(this.productID, this.model.shipmenttype).subscribe((data)=>{          
      this.payment = JSON.parse(data).Status;     
 
     },err => {      
       console.error(err);    
     });     
  }

  LoadYardwitServices()
  {
    this.myService.getyardswithservices().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      let z = myd.filter(function(val){
        return val.serviceid == 3;     
      });

      this.drainageyards = z;
    });
  }

  //** Condition Type */
  LoadConditionTypes()
  {
    let arr = new Array();      
    let i = 0, j = 0;
    arr.push('New');
    arr.push('Used');
    arr.push('Dismantle');
    arr.push('Mixed');

    let modelarr = this.model.conditiontable;

    for(i = 0; i < modelarr.length; i++)
    {
      for(j = 0; j < arr.length; j++)
      {
        if(modelarr[i] == arr[j])
        {
          arr.splice(j, 1);
        }
      }
    }

    this.model.conditionlist = arr;
  }

  AddConditionType(event, val)
  {
    this.model.conditiontable.push(val); 
    this.LoadConditionTypes();   
  }

  DeleteConditionType(val)
  { 
    this.model.conditiontable.splice(this.model.conditiontable.indexOf(val), 1);
    this.LoadConditionTypes();
  }

  /*********************/

    //** Cargo Type */
    LoadCargoTypes()
    {
      let arr = new Array();      
      let i = 0, j = 0;
      arr.push('Vehicle');
      arr.push('Machinery');
  
      let modelarr = this.model.cargotable;
  
      for(i = 0; i < modelarr.length; i++)
      {
        for(j = 0; j < arr.length; j++)
        {
          if(modelarr[i] == arr[j])
          {
            arr.splice(j, 1);
          }
        }
      }
  
      this.model.cargolist = arr;
    }
  
    AddCargoType(event, val)
    {
      this.model.cargotable.push(val); 
      this.LoadCargoTypes();   
    }
  
    DeleteCargoType(val)
    { 
      this.model.cargotable.splice(this.model.cargotable.indexOf(val), 1);
      this.LoadCargoTypes();
    }
  
    /*********************/

    getInspection()
    {
      this.myService.getinspections().subscribe((data)=>{          
        this.inspections = JSON.parse(data).Status;
        
      },err => {      
        console.error(err);    
      });
    }


  updatePayment()
  {
    let temp = '';
      for(let i = 0; i < this.payment.length; i++)
      {
        if(i > 0)
          temp += ',';

          temp += '{"ident":"';
          temp += this.payment[i].bp_id;
          temp += '", "selectopt":"';
          temp += (<HTMLSelectElement>document.getElementById("charge" + this.payment[i].bp_id)).value;
          temp += '"}';
      }

      this.myService.updatepaymentdata(temp, this.productID).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;

        if(myd == "Done")
        { 
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.LoadData();
        }
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd;
        }

        $('.smallLoader').hide();
        
      },err => {      
        console.error(err);    
      });    
  }

  DeleteFreight(bfid)
  {
    $('.smallLoader').show();
    this.myService.deletefreight(bfid).subscribe((data)=>{          
     let myd = JSON.parse(data).Status;

     if(myd == "Done")
     {
       this.LoadFrieght();
       $('.smallLoader').hide();
     }
      
    },err => {      
      console.error(err);    
    });
  }

  AddFreight()
  {

    let freight = (<HTMLInputElement>document.getElementById("freight1")).value;
    let unit = (<HTMLInputElement>document.getElementById("txt1")).value;
    let currency = (<HTMLInputElement>document.getElementById("curr1")).value;
    let ranged = '';
    let rangeu = '';
    if(this.model.shipmenttype == 'RORO')
    {
    ranged = (<HTMLInputElement>document.getElementById("ranged1")).value;
    rangeu = (<HTMLInputElement>document.getElementById("rangeu1")).value;
    }
  
    this.myService.addfreight(freight, unit, currency, rangeu + " ~ " + ranged, this.productID).subscribe((data)=>{          
     let myd = JSON.parse(data).Status;

     if(myd == "Done")
     {
       this.LoadFrieght();
       $('.smallLoader').hide();
       (<HTMLInputElement>document.getElementById("freight1")).value = '';
       (<HTMLInputElement>document.getElementById("txt1")).value = '';
       (<HTMLInputElement>document.getElementById("curr1")).value = '';
       if(this.model.shipmenttype == 'RORO')
       {
        (<HTMLInputElement>document.getElementById("ranged1")).value = '';
        (<HTMLInputElement>document.getElementById("rangeu1")).value = '';
       }
     }
      
    },err => {      
      console.error(err);    
    });
  }





  



  Save()
  {
    $('.smallLoader').show();

    if(this.ValSelect == 1)
    {
      let item = (<HTMLSelectElement>document.getElementById("drainage")).value;
      this.UpdateBooking('drainageyard', item);
    }
    else if(this.ValSelect == 2)
    {
      let item = (<HTMLSelectElement>document.getElementById("contype")).value;
      this.UpdateBooking('contype', item);
    } 
    else if(this.ValSelect == 3)
    {
      let item = this.model.cargotable.join();
      this.UpdateBooking('cargotype', item);
    }
    else if(this.ValSelect == 4)
    {
      let item = this.model.conditiontable.join();
      this.UpdateBooking('conditiontype', item);
    }
    else if(this.ValSelect == 5)
    {
      let item = (<HTMLInputElement>document.getElementById("bco")).value;
      this.UpdateBooking('confirmedon', item);
    }
    else if(this.ValSelect == 6)
    {
      let item = (<HTMLInputElement>document.getElementById("qty")).value;
      this.UpdateBooking('qty', item);
    }
    else if(this.ValSelect == 7)
    {
      let item = (<HTMLInputElement>document.getElementById("yopen")).value;
      this.UpdateBooking('yardopen', item);
    } 
    else if(this.ValSelect == 8)
    {
      let item = this.model.address;
      this.UpdateBooking('address', item);
    }
    else if(this.ValSelect == 9)
    {
      let item = (<HTMLSelectElement>document.getElementById("pfree")).value;
      this.UpdateBooking('penaltyfree', item);
    }
    else if(this.ValSelect == 10)
    {
      let item = (<HTMLInputElement>document.getElementById("dco")).value;
      this.UpdateBooking('dco', item);
    }
    else if(this.ValSelect == 11)
    {
      let item = (<HTMLInputElement>document.getElementById("co")).value;
      this.UpdateBooking('yco', item);
    }
    else if(this.ValSelect == 12)
    {
      let item = this.model.dft;
      this.UpdateBooking('dft', item);
    }
    else if(this.ValSelect == 13)
    {
      let item = this.model.dmft;
      this.UpdateBooking('dmft', item);
    }
    else if(this.ValSelect == 14)
    {
      this.AddFreight();
    }
    else if(this.ValSelect == 15)
    {
      this.updatePayment();
    }
    else if(this.ValSelect == 16)
    {
      let item = (<HTMLSelectElement>document.getElementById("inspections")).value;
      this.UpdateBooking('insid', item);
    }
    
  }


  UploadFile(event)
  {
    $('.smallLoader').show();
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
            this.UpdateBooking('reciepturl',this.RecieptUrl);
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

  UpdateBooking(cat, val)
  {
    this.myService.updatebookingdata(cat, val, this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      if(myd == "Done")
        { 
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

        $('.smallLoader').hide();
    });
  }

}

