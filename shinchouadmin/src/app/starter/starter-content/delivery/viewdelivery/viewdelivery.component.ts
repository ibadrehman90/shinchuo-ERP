import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
declare var jsPDF: any;

@Component({
  selector: 'app-viewdelivery',
  templateUrl: './viewdelivery.component.html',
  styleUrls: ['./viewdelivery.component.css']
})
export class ViewdeliveryComponent implements OnInit {

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
      
    this.LoadDeliveries();  
    this.LoadTransport();
    this.LoadAuction(); 
    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date()); 
    
  }

  LoadDeliveries()
  {
    this.myService.getDeliveries().subscribe((data)=>{          
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
    this.router.navigate(["edit_delivery/" + ind]);
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

  SearchOrder()
  {
    let ofrom = (<HTMLInputElement>document.getElementById("datepicker")).value;
    let oto = (<HTMLInputElement>document.getElementById("datepicker1")).value;
    let trans = (<HTMLInputElement>document.getElementById("trans")).value;
    let pick = (<HTMLInputElement>document.getElementById("pick")).value;

    this.myService.searchDeliveries(this.model.orderno,ofrom, oto, trans, pick).subscribe((data)=>{          
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

    this.LoadDeliveries();
  }

}

