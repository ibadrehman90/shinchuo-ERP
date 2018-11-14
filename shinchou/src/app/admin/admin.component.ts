import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { 
    if(window.localStorage.getItem("username") != null || window.localStorage.getItem("username") != undefined)
    {
      document.getElementById("Loader").style.display = "none";
    }
    else
    {
      window.location.href = "/account";
    }    
  }

  ngOnInit() {
  }

}
