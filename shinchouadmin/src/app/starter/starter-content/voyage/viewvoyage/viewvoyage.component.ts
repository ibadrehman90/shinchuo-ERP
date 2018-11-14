import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewvoyage',
  templateUrl: './viewvoyage.component.html',
  styleUrls: ['./viewvoyage.component.css']
})
export class ViewvoyageComponent implements OnInit {

  public userrole = '';
  public pendingports;
  public shipmentsTable;

  constructor(public myService : DatafromServicesService, private router: Router) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
      
     this.getAllVoyages();
   
    
  }

  getAllVoyages()
  {
    this.myService.getallvoyages().subscribe((data)=>{          
      this.pendingports = JSON.parse(data).Status;
      
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

