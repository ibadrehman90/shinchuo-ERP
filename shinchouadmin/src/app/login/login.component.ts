import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../datafrom-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  public errormsg;
  constructor(public myService : DatafromServicesService, private router : Router) { }

  ngOnInit() {
    document.getElementById("Loader").style.display = "none";
  }

  Login()
  {

    if(this.model.lemail != undefined && this.model.lpassword != undefined)
    {
        document.getElementById("Loader").style.display = "block";
        this.myService.signin(this.model.lemail, this.model.lpassword).subscribe((data)=>{          
          let myd = JSON.parse(data);
          
          if(myd.Status == "Auth")
          {
            document.getElementById("msger").innerHTML = "You are successfully logged in!";
            window.localStorage.setItem("adm_user",myd.userid);
            window.localStorage.setItem("adm_role",myd.userrole);
            document.getElementById("msgerr").style.display = "block";

            setTimeout(function() {
              document.getElementById("msgerr").style.display = "none";        
            }, 2000);

            //this.router.navigate(["/"]);
            window.location.href = "/";
          }
          else
          {
            document.getElementById("msger").innerHTML = "Invalid Username/Password!";
            document.getElementById("msgerr").style.display = "block";

            setTimeout(function() {
              document.getElementById("msgerr").style.display = "none";        
            }, 5000);
          }

          document.getElementById("Loader").style.display = "none";

        },err => {      
          console.error(err);    
        }); 

       
    }
    else
    {
      document.getElementById("msger").innerHTML = "Fields cant be left Empty!";
      document.getElementById("msgerr").style.display = "block";

      setTimeout(function() {
        document.getElementById("msgerr").style.display = "none";        
      }, 5000);
    }
  }
}
