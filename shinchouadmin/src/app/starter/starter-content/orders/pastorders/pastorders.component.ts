import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
declare var jsPDF: any;

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.css']
})
export class PastordersComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Orders;
  public exportlist;
  public transporters;
  public auctions;
  public yards;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadOrders();  
    this.LoadTransport();
    this.LoadAuction();
    this.LoadYard();  
    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date()); 
    
  }

  LoadOrders()
  {
    this.myService.getPastOrderTransport().subscribe((data)=>{          
     this.Orders = JSON.parse(data).Status;   

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

  UpdateOrders(ind)
  {
    this.router.navigate(["edit_order/" + ind]);
  }

  LoadTransport()
  {
    this.myService.getTransportCompany().subscribe((data)=>{          
      this.transporters = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     });
  }

  LoadAuction()
  {
    this.myService.getAuctions().subscribe((data)=>{          
      this.auctions = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     });
  }

  LoadYard()
  {
    this.myService.getYards().subscribe((data)=>{          
      this.yards = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     });
  }

  SearchOrder()
  {
    let ofrom = (<HTMLInputElement>document.getElementById("datepicker")).value;
    let oto = (<HTMLInputElement>document.getElementById("datepicker1")).value;
    let trans = (<HTMLInputElement>document.getElementById("trans")).value;
    let pick = (<HTMLInputElement>document.getElementById("pick")).value;
    let drop = (<HTMLInputElement>document.getElementById("drop")).value;

    this.myService.searchmainpastOrder(this.model.orderno,ofrom, oto, trans, pick, drop).subscribe((data)=>{          
      this.Orders = JSON.parse(data).Status; 


    },err => {      
      console.error(err);    
    });  
  }

  ResetForm()
  {
    this.model.orderno = "";
    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date()); 
    (<HTMLInputElement>document.getElementById("trans")).value = "";
    (<HTMLInputElement>document.getElementById("pick")).value = "";
    (<HTMLInputElement>document.getElementById("drop")).value = "";

    this.LoadOrders();
  }

  editable(event)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "none";
    c[1].style.display = "block";
    c[1].focus();
  }

  editremove(event, cat, sid)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "block";
    c[1].style.display = "none";
    c[0].innerText = c[1].value;

    this.myService.updateMainorder(cat,c[1].value, sid).subscribe((data)=>{          
      let myd = JSON.parse(data); 

      console.log(myd);
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

  editselectremove(event, cat, sid)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "block";
    c[1].style.display = "none";
    
    if(c[1].value == 1)
    c[0].innerText = "Completed";
    else
    c[0].innerText = "Pending";

    this.myService.updateMainorder(cat,c[1].value, sid).subscribe((data)=>{          
      let myd = JSON.parse(data); 

      console.log(myd);
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

  neworder()
  {
    this.router.navigate(["neworder"]);
  }

  activeorder()
  {
    this.router.navigate(["orders_list"]);
  }

}

