import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';
import {ActivatedRoute} from '@angular/router';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
@Component({
  selector: 'app-client-bids',
  templateUrl: './client-bids.component.html',
  styleUrls: ['./client-bids.component.css']
})
export class ClientBidsComponent implements OnInit {

model: any = {};
public myData;
public pic;
public myDatab;
public lot;
keys: String[];

  constructor(public myService : DatafromApiService,private route: ActivatedRoute) {
    
    
    
   }

  ngOnInit() {
    this.fetchCurrentBids();
  }




  fetchCurrentBids(){

    let username = localStorage.getItem("username");
    console.log("my usernameos "+username);
    this.myService.loadBids(username).subscribe((data)=>{
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

  fetchExpiredBids(){

    let username = localStorage.getItem("username");
    console.log("my usernameos "+username);
    this.myService.loadExpiredBids(username).subscribe((data)=>{
      console.log(data);
      if(data.Status != null){
        this.myDatab = data.Status;
        console.log("i found data as "+this.myDatab);
      }
      else{
        document.getElementById("errormsgb").style.display = "block"; 
      }
     
    },err => {
      console.error(err);
    });
  }

  setDefaultPic() {
   this.pic = "./assets/Nilimage2.jpg";
  }

}
