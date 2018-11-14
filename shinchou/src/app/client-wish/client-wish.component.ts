import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';

@Component({
  selector: 'app-client-wish',
  templateUrl: './client-wish.component.html',
  styleUrls: ['./client-wish.component.css']
})
export class ClientWishComponent implements OnInit {

  public myDataA;
  public myDataB;
  public myDataC;
  public myDataD;

  constructor(public myService : DatafromApiService) {

   }

  ngOnInit() {
    this.fetchWishA();
  }

fetchWishA(){
  let username = localStorage.getItem("username");
  console.log("my usernameos "+username);
    this.myService.loadWishA(username).subscribe((data)=>{
      
      if(data.Status != null){
        this.myDataA = data.Status;
      }
      else{
        document.getElementById("errormsga").style.display = "block"; 
      }
     
    },err => {
      console.error(err);
    });
}

fetchWishB(){
  let username = localStorage.getItem("username");
  console.log("my usernameos "+username);
    this.myService.loadWishB(username).subscribe((data)=>{
      if(data.Status != null){
        this.myDataB = data.Status;
      }
      else{
        document.getElementById("errormsgb").style.display = "block"; 
      }
     
    },err => {
      console.error(err);
    });
}

fetchWishC(){
  let username = localStorage.getItem("username");
  console.log("my usernameos "+username);
    this.myService.loadWishC(username).subscribe((data)=>{
      if(data.Status != null){
        this.myDataC = data.Status;
      }
      else{
        document.getElementById("errormsgc").style.display = "block"; 
      }
     
     /*  this.keys = Object.keys(this.myData); */
     
    },err => {
      console.error(err);
    });
}

fetchWishD(){
  let username = localStorage.getItem("username");
  console.log("my usernameos "+username);
    this.myService.loadWishD(username).subscribe((data)=>{
      console.log(data);
      if(data.Status != null){
        this.myDataD = data.Status;
      }
      else{
        document.getElementById("errormsgd").style.display = "block"; 
      }
      
     /*  this.keys = Object.keys(this.myData); */
     
    },err => {
      console.error(err);
    });
}

moveToA(dat){
  let username = localStorage.getItem("username");
  let wishlist = "A";
  let pid = dat;

  this.myService.updateWishList(
    username,
    pid,
    wishlist
  ).subscribe((data)=>{
    console.log(data.Status);
    window.location.reload(true);
  },err=>{
    console.error(err);
  });
  

}

moveToB(dat){
  let username = localStorage.getItem("username");
  let wishlist = "B";
  let pid = dat;

  this.myService.updateWishList(
    username,
    pid,
    wishlist
  ).subscribe((data)=>{
    console.log(data.Status);
    window.location.reload(true);

  },err=>{
    console.error(err);
  });
  
}

moveToC(dat){
  let username = localStorage.getItem("username");
  let wishlist = "C";
  let pid = dat;

  this.myService.updateWishList(
    username,
    pid,
    wishlist
  ).subscribe((data)=>{
    console.log(data.Status);
    window.location.reload(true);

  },err=>{
    console.error(err);
  });
  
}

moveToD(dat){
  let username = localStorage.getItem("username");
  let wishlist = "D";
  let pid = dat;

  this.myService.updateWishList(
    username,
    pid,
    wishlist
  ).subscribe((data)=>{
    console.log(data.Status);
    window.location.reload(true);

  },err=>{
    console.error(err);
  });
  
}

}
