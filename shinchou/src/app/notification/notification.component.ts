import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public myData;

  constructor(public myService : DatafromApiService) { }

  ngOnInit() {
    this.fetchLCC();
  }

  fetchLCC(){
    let username = localStorage.getItem("username");
    console.log("my usernameos "+username);
    this.myService.fetchLCC(username).subscribe((data)=>{
      console.log(data);
      if(data.Status != null){
        this.myData = data.Status;
        console.log("i found data as "+this.myData);
      }
      else{
        document.getElementById("errormsga").style.display = "block"; 
      }
     
     /*  this.keys = Object.keys(this.myData); */
     
    },err => {
      console.error(err);
    });
  }

}
