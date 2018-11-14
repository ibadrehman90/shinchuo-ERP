import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  public myData;
  public Countries;
  model: any = {};
  constructor(public myService : DatafromApiService) {
   
   }

  ngOnInit() {
    this.fetchProfile();
    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });    
  }

fetchProfile(){
  let username = localStorage.getItem("username");
  console.log("my usernameos "+username);
    this.myService.loadProfileData(username).subscribe((data)=>{
      this.myData = data.Status;
      console.log(this.myData);
    },err => {
      console.error(err);
    });
}

updateProfile(){
  let email = localStorage.getItem("username");
  var fname = ((<HTMLInputElement>document.getElementById("fname")).value);
  var country = ((<HTMLInputElement>document.getElementById("country")).value);
  var city = ((<HTMLInputElement>document.getElementById("city")).value);
  var phone = ((<HTMLInputElement>document.getElementById("phone")).value);
  var address = ((<HTMLInputElement>document.getElementById("address")).value);
  var port = ((<HTMLInputElement>document.getElementById("port")).value);
  console.log("fname is "+address+ "port is "+ port);
  this.myService.updateProfileData(
    email,
    fname, 
    country, 
    city, 
    phone,
    address,
    port).subscribe((data)=>{          
    console.log("my msg is "+data.Status);
    if(data.Status == "Done")
    {
      this.fetchProfile(); 
    }
     
},err => {
  console.error(err);
}, () => {
  setTimeout(() => {
    document.getElementById("alertmsg").style.display = "block";
  },5000);
}); 
}

}
