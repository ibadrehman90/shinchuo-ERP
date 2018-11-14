import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-auctionvehicles',
  templateUrl: './auctionvehicles.component.html',
  styleUrls: ['./auctionvehicles.component.css']
})
export class AuctionvehiclesComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public VehicleList;
  public TempVehicle;

  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
  this.LoadVehicles();
    
  }

  LoadVehicles()
  {
    this.myService.getAuctionVehicles().subscribe((data)=>{          
     this.VehicleList = JSON.parse(data).Status;
     this.TempVehicle = this.VehicleList;   

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

  SearchOrder()
  {
    let auc = (<HTMLInputElement>document.getElementById("drop")).value;

    if(auc != '')
    {
      this.VehicleList = this.VehicleList.filter(function(val){
        return val.auction == auc;     
      });
    }
    else
    {
      this.VehicleList = this.TempVehicle;
    }
    
  }

  ResetForm()
  {
    (<HTMLInputElement>document.getElementById("drop")).value = "";

    this.VehicleList = this.TempVehicle;
  }

}
