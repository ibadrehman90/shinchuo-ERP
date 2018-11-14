import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {
  model: any = {};
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {    

  }

  SaveForm()
  {
    let dte = new Date();

    if(this.model.make != undefined && this.model.mod != undefined && this.model.prefix != undefined && this.model.year != undefined)
    {
      this.myService.addVehicle(this.model.make, this.model.mod, this.model.prefix, this.model.year, this.model.length, this.model.width, this.model.height, this.model.m3, this.model.kgs).subscribe((data)=>{          
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.ResetForm();
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
  }

}
