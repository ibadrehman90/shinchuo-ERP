import { Component, Input } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { DatafromApiService } from './datafrom-api.service';
import { HomeComponent } from './home/home.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public loginCheck;
  public Vehicles;
  public static returned: Subject<any> = new Subject();
  public userrole;
  public userid;
  constructor(public myService : DatafromApiService, private router: Router){

    AppComponent.returned.subscribe(res => {
      if(window.localStorage.getItem("username") != null || window.localStorage.getItem("username") != undefined)
      {
        this.loginCheck = true;
        this.userid = window.localStorage.getItem("username");
        this.userrole = window.localStorage.getItem("userrole");
      }      
    });

    if(window.localStorage.getItem("username") != null || window.localStorage.getItem("username") != undefined)
    {
      this.loginCheck = true;
      this.userid = window.localStorage.getItem("username");
      this.userrole = window.localStorage.getItem("userrole");
    }

    this.getVehicle();
  }  

  getVehicle(){  
    this.myService.getVehicles().subscribe((data)=>{          
      this.Vehicles = JSON.parse(data);
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  SelectVehicle(vid)
  {
    window.localStorage.setItem("Vehic",vid);
    HomeComponent.Vehic.next(false);
    this.router.navigate([""]);
  }

  logout()
  {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("ReturnUrl");
    window.localStorage.removeItem("userrole");
    //window.localStorage.removeItem("idarray");
    window.location.reload();
  }

}
