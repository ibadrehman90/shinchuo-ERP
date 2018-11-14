import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../datafrom-services.service';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css']
})
export class StarterLeftSideComponent implements OnInit {

  public userrole = "";
  public showlcc;
  constructor(public myService : DatafromServicesService) {
    
  }

  ngOnInit() {

    this.userrole = window.localStorage.getItem("adm_role");
    this.LoadBSUsers();
  }

  LoadBSUsers()
  {
    this.myService.getSingleBSUser(window.localStorage.getItem("adm_user")).subscribe((data)=>{          
     let myd = JSON.parse(data).Status;   
     this.showlcc = myd.showlcc;  
     window.localStorage.setItem("su_showlcc",this.showlcc);
    },err => {      
      console.error(err);    
    }); 
  }

}
