import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';


@Component({
  selector: 'app-viewconsignee',
  templateUrl: './viewconsignee.component.html',
  styleUrls: ['./viewconsignee.component.css']
})
export class ViewconsigneeComponent implements OnInit {

  private shipmentsTable: any;
  public shipsch;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadConsignee();     
    
  }

  LoadConsignee()
  {
    this.myService.getShipmentConsignee().subscribe((data)=>{          
     this.shipsch = JSON.parse(data).Status;  
     
     //console.log(this.shipsch);

     //this.FrameSchedule();

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

 

  UpdateSchedule(ind)
  {
    this.router.navigate(["edit_shipmentconsignee/" + ind]);
  }

}

