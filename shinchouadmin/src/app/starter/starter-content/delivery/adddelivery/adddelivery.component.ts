import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-adddelivery',
  templateUrl: './adddelivery.component.html',
  styleUrls: ['./adddelivery.component.css']
})
export class AdddeliveryComponent implements OnInit {


  model: any = {};
  public tcompany;
  public ordcount = 0;
  private shipmentsTable: any;
  public purchased;
  public userrole;
  public userauc = ' AND status = 0';
  public ordlists = new Array();
  public orderlists;
  public yards;
  public tmpyards;
  public tmptransport;
  public VehicleList;
  public Auctions;
  constructor(public myService : DatafromServicesService) { 
    this.userrole = window.localStorage.getItem("adm_role");
  }

  ngOnInit() {    
    this.gettcompany();
    this.getAuctions();
    this.getordercount();
    this.getYards();
   

    $('#datepicker').datepicker('setDate', new Date());
  }

  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) 
    result += chars[Math.floor(Math.random() * chars.length)];

    return result;
  }

  gettcompany()
  {
    this.myService.getTransportCompany().subscribe((data)=>{          
      this.tcompany = JSON.parse(data).Status;   
      this.tmptransport = this.tcompany;
 
     },err => {      
       console.error(err);    
     }); 
  }

  getordercount()
  {
    this.myService.getCountsData("deliveryno","delivery","").subscribe((data)=>{          
      let myd = (JSON.parse(data).Status)[0]; 
      
      this.model.orderno = (parseInt(myd.cnt) + 10).toString(16).toUpperCase() + "-" + this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
 
     },err => {      
       console.error(err);    
     }); 
  }

  SelectList(event, pid)
  {
    if(event.target.checked)
    {
      this.ordlists.push(pid);
    }
    else
    {
      let index = this.ordlists.indexOf(pid);
      if (index > -1) {
        this.ordlists.splice(index, 1);
      }
    }
  }

  AddOrder()
  {
    if(this.ordlists.length > 0)
    {
      document.getElementById("dan_msg").style.display = "none";      
      document.getElementById("suc_msg").style.display = "none";

      let i = 0;
      let str = "";
      for(i = 0; i < this.ordlists.length; i++)
      {
        str += this.ordlists[i] + "|";
      }

      let auc = (<HTMLInputElement>document.getElementById("aucentry")).value;
      let tcomp = (<HTMLInputElement>document.getElementById("tcompentry")).value;

      this.myService.adddelivery(this.model.orderno,str,(<HTMLInputElement>document.getElementById("datepicker")).value,this.model.trackingno, this.model.timeslot, this.model.remarks, window.localStorage.getItem("adm_user"), auc, tcomp).subscribe((data)=>{          
        let myd = JSON.parse(data);   
        
        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!"; 
                         
        }      
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }
        
      },err => {      
        console.error(err);    
      }, () => {
        setTimeout(() => {
          this.getOrderlist();
        });
      }); 
    }
    else
    {
      document.getElementById("dan_msg").style.display = "block";      
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "No Orders Selected!";
    }

    this.ordlists = new Array();
  }

  LoadVehicles()
  {
   // if(this.model.trackingno != undefined && this.model.trackingno.trim() != "" && (<HTMLInputElement>document.getElementById("aucentry")).value != "" && (<HTMLInputElement>document.getElementById("tcompentry")).value != "")
   // {
      this.myService.getYardVehicles2().subscribe((data)=>{          
        this.VehicleList = JSON.parse(data).Status;   
  
      },err => {      
        console.error(err);    
      }, () => {
        setTimeout(() => {
          this.shipmentsTable = $("#example1");
          this.shipmentsTable.DataTable();
          document.getElementById("example1").parentElement.style.overflow = "scroll";
        });
      });
    //} 
    //else
   // {
     // alert("Fields have to be filled first!");
   // }
  }

  SearchPurchased()
  { 
    let auction = (<HTMLInputElement>document.getElementById("auctioncombo")).value;
    let yard = (<HTMLInputElement>document.getElementById("yardcombo")).value;

    this.myService.searchYardVehicles2("","","","", yard, auction, this.model.serial).subscribe((data)=>{          
      
      this.VehicleList = JSON.parse(data).Status; 

    },err => {      
      console.error(err);    
    });  
 
  }

  getOrderlist()
  {
    this.myService.getdeliverylist(this.model.orderno).subscribe((data)=>{          
      this.orderlists = JSON.parse(data).Status;  
      
      if(this.orderlists.length > 0)
      {
      document.getElementById("orderLists").style.display = "block";
      }
      else
      {
      document.getElementById("orderLists").style.display = "none";
      }
      
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example2");
        this.shipmentsTable.DataTable();
        document.getElementById("example2").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  ResetForm()
  {
    (<HTMLInputElement>document.getElementById("auctioncombo")).value = "";
    (<HTMLInputElement>document.getElementById("yardcombo")).value = "";
    this.model.serial = undefined;

    this.LoadVehicles();
  }

  getYards()
  {
    this.myService.getYards().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.status == 1;     
      });  
      
      this.yards = x;
      this.tmpyards = this.yards;
     },err => {      
       console.error(err);    
     }); 
  }

  getAuctions()
  {
    this.myService.getAuctions().subscribe((data)=>{          
      this.Auctions = JSON.parse(data).Status;   
      console.log(this.Auctions);
     },err => {      
       console.error(err);    
     }); 
  }

  DeleteList(oid, sid)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
    
    this.myService.deletedelivery(oid, sid).subscribe((data)=>{          
      let myd = JSON.parse(data);
      
      if(myd.Status == "Done")
      {                   
        document.getElementById("dan_msg").style.display = "none";      
        document.getElementById("suc_msg").style.display = "block";
        document.getElementById("msgsuccess").innerHTML = "Saved!";
        this.getOrderlist();
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

  ConfirmChecked(val)
  {
    if(val.checked)
    return 1;
    else
    return 0;
  }

  UpdateList(event, did)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
    
    let c1 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("noplatecheck" + did)));
    let c2 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("bookcheck" + did)));
    let c3 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("navicdcheck" + did)));
    let c4 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("naviremotecheck" + did)));
    let c5 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("nutlockcheck" + did)));
    let c6 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("knobcheck" + did)));
    let c7 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("othercheck" + did)));
    let c8 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("tohoncheck" + did)));
    let c9 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("keyscheck" + did)));
    let c10 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("carremotekeycheck" + did)));
    let c11 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("sdcheck" + did)));
    let c12 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("mnotecheck" + did)));
    let c13 = this.ConfirmChecked((<HTMLInputElement>document.getElementById("monitorcheck" + did)));

    this.myService.updatedeliverydetail(did, c1,c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13).subscribe((data)=>{          
      let myd = JSON.parse(data);
      
      if(myd.Status == "Done")
      {                   
        event.target.innerHTML = "Updated";
        event.target.className = "btn btn-black";
      }      
      else
      {
        event.target.innerHTML = "Update";
        event.target.className = "btn btn-danger";
      }
       
     },err => {      
       console.error(err);    
     });
  }

  ResetUpdate(did)
  {
    document.getElementById("updatebtn"+did).innerHTML = "Update";
    document.getElementById("updatebtn"+did).className = "btn btn-danger";
  }

}
