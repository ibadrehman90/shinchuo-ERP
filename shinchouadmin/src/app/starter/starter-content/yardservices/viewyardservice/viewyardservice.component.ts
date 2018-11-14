import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewyardservice',
  templateUrl: './viewyardservice.component.html',
  styleUrls: ['./viewyardservice.component.css']
})
export class ViewyardserviceComponent implements OnInit {

  public userrole = '';
  public pendingservices;
  public shipmentsTable;

  constructor(public myService : DatafromServicesService, private router: Router) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
      
     this.getPendingServices();
   
    
  }

  getPendingServices()
  {
    this.myService.getallyardservices().subscribe((data)=>{          
      this.pendingservices = JSON.parse(data).Status;
      
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

  UpdateStatus(event, ind)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
  
    let stat = '0';
    if(event.target.checked == true)
    stat = '1';
    else
    stat = '0';


    this.myService.updateServiceApproval(ind, stat).subscribe((data)=>{          
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

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);

    },err => {      
      console.error(err);    
    });  
  }




}
