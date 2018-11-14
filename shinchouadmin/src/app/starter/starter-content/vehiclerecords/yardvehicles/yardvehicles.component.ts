import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-yardvehicles',
  templateUrl: './yardvehicles.component.html',
  styleUrls: ['./yardvehicles.component.css']
})
export class YardvehiclesComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public VehicleList;
  public yards;
  public Countries;

  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
  this.LoadVehicles();
  this.LoadYard();

  this.myService.getCountries().subscribe((data)=>{          
    this.Countries = JSON.parse(data);
  },err => {      
    console.error(err);    
  });  
    
  }

  LoadVehicles()
  {
    this.myService.getYardVehicles().subscribe((data)=>{          
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
    let country = (<HTMLInputElement>document.getElementById("country")).value;
    let yard = (<HTMLInputElement>document.getElementById("drop")).value;

    this.myService.searchYardVehicles(this.model.lot, this.model.client, this.model.port, country, yard,"","").subscribe((data)=>{          
      console.log(data);
      this.VehicleList = JSON.parse(data).Status; 

    },err => {      
      console.error(err);    
    });  
  }

  ResetForm()
  {
    this.model.lot = "";
    this.model.client = "";
    this.model.port = "";
    (<HTMLInputElement>document.getElementById("country")).value = "";
    (<HTMLInputElement>document.getElementById("drop")).value = "";

    this.LoadVehicles();
  }

}
