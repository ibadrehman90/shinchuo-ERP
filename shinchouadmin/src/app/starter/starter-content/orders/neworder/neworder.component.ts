import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {

  model: any = {};
  public tcompany;
  public ordcount = 0;
  private shipmentsTable: any;
  private shipmentsTable1: any;
  public purchased;
  public userrole;
  public userauc = ' AND status = 0';
  public ordlists = new Array();
  public orderlists;
  public yards;
  public tmpyards;
  public tmptransport;
  public VehicleList;

  constructor(public myService : DatafromServicesService, private router: Router) { 
    this.userrole = window.localStorage.getItem("adm_role");
  }

  ngOnInit() {    
    this.gettcompany();
    this.getordercount();
    this.getYards();
   

    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date());
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
    this.myService.getCountsData("orderno","orders","").subscribe((data)=>{          
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

  AddOrder(btnselect)
  {

    if(btnselect == 0)
    {
      document.getElementById("ordlist1").style.display = "none";
    }
    else if(btnselect == 0)
    {
      document.getElementById("ordlist").style.display = "none";
    }

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

      this.myService.addorder(this.model.orderno,str,(<HTMLInputElement>document.getElementById("datepicker")).value,(<HTMLInputElement>document.getElementById("datepicker1")).value, btnselect).subscribe((data)=>{          
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
    this.myService.getYardVehicles3().subscribe((data)=>{          
     this.VehicleList = JSON.parse(data).Status;   
      console.log(this.VehicleList);
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable1 = $("#example3");
        this.shipmentsTable1.DataTable();
        document.getElementById("example3").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  LoadPurchased()
  {
    this.myService.getPurchased(this.userrole, this.userauc).subscribe((data)=>{          
        this.purchased = JSON.parse(data).Status;   
     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
        document.getElementById("example1").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  SearchPurchased()
  { 
    let x = document.getElementById("orderstatus");
    let y = (<HTMLInputElement>x).value;

    if(y == '0')
    this.userauc = " AND status = 0";
    else
    this.userauc = " AND status = 1";
    
    this.myService.searchPurchased(this.userrole, this.userauc, "", this.model.client, this.model.dst, this.model.auction, this.model.adate, this.model.pos, this.model.dai, this.model.lot, this.model.prefix, "", this.model.make, this.model.model, "", "", "", "", this.model.noplate, "", this.model.shaken, this.model.fudosha, "", "", "", "", "", "", "", "", "", "").subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.purchased = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  getOrderlist()
  {
    this.myService.getorderlist(this.model.orderno).subscribe((data)=>{          
      this.orderlists = JSON.parse(data).Status;  
      
      if(this.orderlists.length > 0)
      {
      document.getElementById("orderLists").style.display = "block";
      document.getElementById("yardtranscontainer").style.display = "block";
      }
      else
      {
      document.getElementById("orderLists").style.display = "none";
      document.getElementById("yardtranscontainer").style.display = "none";
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
    this.model.client = undefined;
    this.model.dst = undefined;
    this.model.auction = undefined;
    this.model.adate = undefined;
    this.model.pos = undefined;
    this.model.dai = undefined;
    this.model.lot = undefined;
    this.model.prefix = undefined;    
    this.model.make = undefined;
    this.model.model = undefined;    
    this.model.noplate = undefined;
    this.model.shaken = undefined;
    this.model.fudosha = undefined;
    let x = document.getElementById("orderstatus");
    (<HTMLInputElement>x).value = "0";

    this.SearchPurchased();
  }

  FilterDropoff(event)
  {

    if(event.target.value.length > 0)
    {
      let x = this.tmpyards.filter(function(val){
        return val.name.toLowerCase().indexOf(event.target.value) > -1;     
      });
      
      this.yards = x;
    }
    else
    this.yards = this.tmpyards;
  }

  FilterTransport(event)
  {

    if(event.target.value.length > 0)
    {
      let x = this.tmptransport.filter(function(val){
        return val.sname.toLowerCase().indexOf(event.target.value) > -1;     
      });
      
      this.tcompany = x;
    }
    else
    this.tcompany = this.tmptransport;
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

  SelectYard(yid, ind)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
     
      this.myService.updateOrder("y_id",yid,this.model.orderno).subscribe((data)=>{          
       let myd = JSON.parse(data);
       
       if(myd.Status == "Done")
       {                   
         document.getElementById("dan_msg").style.display = "none";      
         document.getElementById("suc_msg").style.display = "block";
         document.getElementById("msgsuccess").innerHTML = "Saved!";       
         
         var y = document.getElementsByClassName("yardsel");
        var i;
        for (i = 0; i < y.length; i++) {
          y[i].innerHTML = "Select";
          y[i].className = "btn btn-danger yardsel"
        }

         document.getElementById("yardselect" + ind).innerHTML = "Selected";
         document.getElementById("yardselect" + ind).className = "btn btn-black yardsel";
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

  SelectTransport(tcompany, ind)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
     
      this.myService.updateOrder("tcompany",tcompany,this.model.orderno).subscribe((data)=>{          
       let myd = JSON.parse(data);
       
       if(myd.Status == "Done")
       {                   
         document.getElementById("dan_msg").style.display = "none";      
         document.getElementById("suc_msg").style.display = "block";
         document.getElementById("msgsuccess").innerHTML = "Saved!";   

         var y = document.getElementsByClassName("tcsel");
        var i;
        for (i = 0; i < y.length; i++) {
          y[i].innerHTML = "Select";
          y[i].className = "btn btn-danger tcsel"
        }

         document.getElementById("tcselect" + ind).innerHTML = "Selected";
         document.getElementById("tcselect" + ind).className = "btn btn-black tcsel";
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

  DeleteList(oid, sid)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
    
    this.myService.deleteorder(oid, sid).subscribe((data)=>{          
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

  NewOrder()
  {
    document.getElementById("orderLists").style.display = "none";
    (<HTMLInputElement>document.getElementById("tcomp")).value = "";
    this.model.cperson = undefined;
    this.model.tel = undefined;
    this.model.mob = undefined;
    this.model.fax = undefined;
    this.model.email = undefined;
    this.model.address = undefined;

    this.getordercount();
  }

  newtransport()
  {
    this.router.navigate(["add_transportcompany"]);
  }

  newdropoff()
  {
    this.router.navigate(["add_yard"]);
  }
}
