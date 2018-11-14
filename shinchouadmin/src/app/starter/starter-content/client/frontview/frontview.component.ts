import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-frontview',
  templateUrl: './frontview.component.html',
  styleUrls: ['./frontview.component.css']
})
export class FrontviewComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Clients;
  public passuser = '';
  public userrole;
  constructor(public myService : DatafromServicesService) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
      
    this.LoadClients();      
  }

  UpdateStatus(event, client, cat)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
  
    let stat = '0';
    if(event.target.checked == true)
    stat = '1';
    else
    stat = '0';


    this.myService.updateUserView(client, cat, stat).subscribe((data)=>{          
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

      console.log(myd);
    },err => {      
      console.error(err);    
    });  
  }

  LoadClients()
  {
    this.myService.getUserView(this.userrole,window.localStorage.getItem("adm_user")).subscribe((data)=>{          
     this.Clients = JSON.parse(data).Status;   

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

}
