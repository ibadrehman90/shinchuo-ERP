import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editvehicle',
  templateUrl: './editvehicle.component.html',
  styleUrls: ['./editvehicle.component.css']
})
export class EditvehicleComponent implements OnInit {
  model: any = {};
  productID: string;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    this.LoadData();
   }

  ngOnInit() {
    
  }

  LoadData()
  {
    this.myService.getSingleVehicle(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      
      this.model.make = myd.make;
      this.model.mod = myd.mod;
      this.model.prefix =  myd.prefix;
      this.model.year =  myd.year;
      this.model.length =  myd.length;
      this.model.width =  myd.width;
      this.model.height =  myd.height;
      this.model.m3 =  myd.m3;
      this.model.kgs =  myd.kgs;
 
     },err => {      
       console.error(err);    
     });     
  }

  SaveForm()
  {
    let dte = new Date();

    if(this.model.make != undefined && this.model.mod != undefined && this.model.prefix != undefined && this.model.year != undefined)
    {
      this.myService.updateVehicle(this.productID, this.model.make, this.model.mod, this.model.prefix, this.model.year, this.model.length, this.model.width, this.model.height, this.model.m3, this.model.kgs).subscribe((data)=>{          
      
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
      }); 
 
    }
    else
    {      
      document.getElementById("dan_msg").style.display = "block";
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
    }
  }

  ReturnBack()
  {
    this.router.navigate(["vehicle_list"]);
  }

}