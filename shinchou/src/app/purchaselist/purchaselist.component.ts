import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit {

  public myData;

  constructor(public myService : DatafromApiService) { }

  ngOnInit() {
    this.fetchpuchaselist();
  }

fetchpuchaselist(){
  let username = localStorage.getItem("username");
    console.log("my usernameos "+username);
    this.myService.fetchPurchase(username).subscribe((data)=>{
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

setDefaultPic() {
  let pic = "/assets/Nilimage2.jpg";
}

}
