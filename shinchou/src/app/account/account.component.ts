import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromApiService } from './../datafrom-api.service';
import {NgForm} from '@angular/forms';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  model: any = {};
  public Countries;
  public errormsg;
  public loginCheck;
  public returnurl = "";
  public Ports;

  constructor(public myService : DatafromApiService, private router: Router) {

    if(window.localStorage.getItem("username") != undefined)
    {
      document.getElementById("Loader").style.display = "block";
      this.router.navigate([""]);
    }

    if(window.localStorage.getItem("username") != null || window.localStorage.getItem("username") != undefined)
    {
      this.loginCheck = true;
    }

   }

  ngOnInit() {
    //document.getElementById("Loader").style.display = "none";
    
    if(window.localStorage.getItem("ReturnUrl") != null || window.localStorage.getItem("ReturnUrl") != undefined)
    {
      this.returnurl = window.localStorage.getItem("ReturnUrl");
      this.errormsg = "Please Login/Register to Continue!";
      document.getElementById("mesg").style.display = "block";
    }
    else
    {
      this.returnurl = "";
      window.localStorage.removeItem("ReturnUrl");
    }

     this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });    

    document.getElementById("Loader").style.display = "none";
    
  }  

  signup() {
    document.getElementById("Loader").style.display = "block";
    document.getElementById("mesg").style.display = "none";
    var checker = 0;

    if(this.model.email != undefined && this.model.password != undefined && this.model.username != undefined && this.model.name != undefined && this.model.city != undefined && this.model.country != undefined && this.model.phone != undefined && this.model.company != undefined && this.model.address != undefined && this.model.port != undefined)
    {    
      checker = 1;
    }
    else
    {
      checker = 0;      
    }

    if(checker == 1)
    {
      this.myService.signup(this.model.email,this.model.password,this.model.username, this.model.name, this.model.company, this.model.country, this.model.city, this.model.phone, this.model.address, this.model.port).subscribe((data)=>{          
        let myd = JSON.parse(data);        
        
        if(myd.Status == "Done")
        {
         /* window.localStorage.setItem("username",myd.userid);
          window.localStorage.setItem("userrole",myd.userrole);
          document.getElementById("mesg").style.display = "none";
             if(this.returnurl == "")
             {
              this.router.navigate([""]);
              AppComponent.returned.next(false);
             }
              else
              {
                this.router.navigate(["prodetail",this.returnurl]);
                AppComponent.returned.next(false);
              }*/
          this.errormsg = "You are Successfully Registered! Login to Continue";
          document.getElementById("mesg").style.display = "block";
        }
        else if(myd.Status == "UserExist")
        {
          this.errormsg = "Username already exists!";
          document.getElementById("mesg").style.display = "block";
        }  
        else if(myd.Status == "Exist")
        {
          this.errormsg = "Email already exists!";
          document.getElementById("mesg").style.display = "block";
        }  
        else
        {
          this.errormsg = "Some Error Occured! Please Try again Later!";
          document.getElementById("mesg").style.display = "block";
        }

        document.getElementById("Loader").style.display = "none";
        
      },err => {      
        console.error(err);    
      });
    }
    else
    {
      document.getElementById("Loader").style.display = "none";
      this.errormsg = "Fields cant be left Empty!";
      document.getElementById("mesg").style.display = "block";
    }
  }
  
  signin()
  {
    document.getElementById("mesg").style.display = "none";
    if(this.model.lemail != undefined && this.model.lpassword != undefined)
    {
        document.getElementById("Loader").style.display = "block";
    
        this.myService.signin(this.model.lemail, this.model.lpassword).subscribe((data)=>{          
          let myd = JSON.parse(data);

          if(myd.Status == "Auth")
          {
              window.localStorage.setItem("username",myd.userid);
              window.localStorage.setItem("userrole",myd.userrole);
              document.getElementById("mesg").style.display = "none";
              if(this.returnurl == "")
               {
                this.router.navigate([""]);
                AppComponent.returned.next(false);
               }
              else
              {
                this.router.navigate(["./prodetail",this.returnurl]);
                AppComponent.returned.next(false);
              }      
          }          
          else
          {
            this.errormsg = "Invalid Username/Password!";
            document.getElementById("mesg").style.display = "block";
          }

        },err => {      
          console.error(err);    
        }); 

        document.getElementById("Loader").style.display = "none";
    }
    else
    {
      this.errormsg = "Fields cant be left Empty!";
      document.getElementById("mesg").style.display = "block";
    }
  }

  SelectCountry(event)
  {
    this.Ports = undefined;

    this.myService.getPorts(event.target.value).subscribe((data)=>{          
      this.Ports = JSON.parse(data).Status;
    },err => {      
      console.error(err);    
    });  
  }
 

}
