import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addinspection',
  templateUrl: './addinspection.component.html',
  styleUrls: ['./addinspection.component.css']
})
export class AddinspectionComponent implements OnInit {

  model: any = {};

  public inspect;
  public shipmentsTable;
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {  
   
    this.getInspection();

  }

  getInspection()
  {
    this.myService.getinspections().subscribe((data)=>{          
      this.inspect = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  addcharge()
  {
    if(this.model.chargename != undefined && this.model.chargename != "")
    {
      this.myService.addinspection(this.model.chargename, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
          this.getInspection();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
        }    
        else if(myd.Status == "Exist")
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Inspection already exist!";
        }    
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);
      },err => {      
        console.error(err);    
      });
    }
    else
    {
      alert("Field can't be left empty!");
    }
  }

}


