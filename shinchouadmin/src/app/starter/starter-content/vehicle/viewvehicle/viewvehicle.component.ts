import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.css']
})
export class ViewvehicleComponent implements OnInit {
  model: any = {};
  private shipmentsTable: any;
  public Vehicles;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadVehicles();     
    
  }  

  LoadVehicles()
  {
    this.myService.getVehicles().subscribe((data)=>{          
     this.Vehicles = JSON.parse(data).Status;   

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

  UpdateVehicles(ind)
  {
    this.router.navigate(["edit_vehicle/" + ind]);
  }

  SaveForm()
  {    
    this.myService.searchVehicle(this.model.make, this.model.mod, this.model.prefix).subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.Vehicles = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.make = undefined;
    this.model.mod = undefined;
    this.model.prefix = undefined;
    this.model.year = undefined;
    this.model.length = undefined;
    this.model.width = undefined;
    this.model.height = undefined;
    this.model.m3 = undefined;
    this.model.kgs = undefined;

    this.SaveForm();
  }

}
