import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../../datafrom-services.service';

@Component({
  selector: 'app-plandetail',
  templateUrl: './plandetail.component.html',
  styleUrls: ['./plandetail.component.css']
})
export class PlandetailComponent implements OnInit {

  model: any = {};
  productID: string;  
  public vehicles; 
  public vehicleSelectable;

  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
   
   }

  ngOnInit() {
    this.getVehicles();
    this.LoadData();
  }

  LoadData()
  {
    this.myService.getsingleloadingplan(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status[0];   
      
      this.model.plancode = myd.plancode;
      this.model.contype = myd.contype;
      this.model.yard = myd.yard;
      this.model.generatedby = myd.generatedby;
 
     },err => {      
       console.error(err);    
     });     
  }

  getVehicles()
  {
    this.myService.getplanvehicles(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;       
      this.vehicles = myd; 

      this.vehicleSelectable = myd;
          
    },err => {      
      console.error(err);    
    });
  }

  filterVehicles(event)
  {
    let tmp = this.vehicleSelectable;

    let x = tmp.filter(function(val){
      let y = val.prefix.toLowerCase();
      return y.indexOf(event.target.value) > -1;     
    });  
    
    this.vehicles = x;
  }

  ReturnBack()
  {
    this.router.navigate(["view_loadingplan"]);
  }

}
