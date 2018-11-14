import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addyardservice',
  templateUrl: './addyardservice.component.html',
  styleUrls: ['./addyardservice.component.css']
})
export class AddyardserviceComponent implements OnInit {

  model: any = {};

  public yardservice;
  public pendingservices;
  public shipmentsTable;
  public returnurl = '';
  constructor(public myService : DatafromServicesService, private router : Router) { }

  ngOnInit() {  
   
    this.getServices();    
    this.getPendingServices();

    let rtl = window.localStorage.getItem('returnUrl');
    if(rtl != null)
    {
      this.returnurl = window.localStorage.getItem('returnUrl');
      document.getElementById("cancelbtn").style.display = "inline-block";
    }
  }

  cancelTransaction()
  {
    window.localStorage.removeItem('returnUrl');
    this.router.navigate([this.returnurl]);
  }

  getServices()
  {
    this.myService.getyardservice().subscribe((data)=>{          
      this.yardservice = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  getPendingServices()
  {
    this.myService.getpendingyardservice().subscribe((data)=>{          
      this.pendingservices = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  addservice()
  {
    if(this.model.servicename != undefined && this.model.servicename != "")
    {
      this.myService.addyardservice(this.model.servicename, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.getPendingServices();
        }    
        else if(myd.Status == "Exist")
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Service already exist!";
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
