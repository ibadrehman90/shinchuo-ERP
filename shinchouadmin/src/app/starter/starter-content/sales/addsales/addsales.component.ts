import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addsales',
  templateUrl: './addsales.component.html',
  styleUrls: ['./addsales.component.css']
})
export class AddsalesComponent implements OnInit {

  model: any = {};
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {    

  }

  SaveForm()
  {

    if(this.model.bname != undefined && this.model.email != undefined && this.model.mob != undefined && this.model.pass != undefined && this.model.cpass != undefined && this.model.country != undefined && this.model.username != undefined)
    {
      if(this.model.pass == this.model.cpass)
      {
        this.myService.addBSUser(this.model.username, this.model.pass, this.model.email, this.model.bname, this.model.city, this.model.country, this.model.mob, "1", "1", "salesuser").subscribe((data)=>{          
          let myd = JSON.parse(data);
          
          if(myd.Status == "Done")
          { 
                    
            document.getElementById("dan_msg").style.display = "none";      
            document.getElementById("suc_msg").style.display = "block";
            document.getElementById("msgsuccess").innerHTML = "Saved!";

            this.ResetForm();
          }
          else if(myd.Status == "Exist")
          {
            document.getElementById("dan_msg").style.display = "block";
            document.getElementById("suc_msg").style.display = "none";
            document.getElementById("msgalert").innerHTML = "User with Same Email already exist!";
          }
          else if(myd.Status == "UserExist")
          {
            document.getElementById("dan_msg").style.display = "block";
            document.getElementById("suc_msg").style.display = "none";
            document.getElementById("msgalert").innerHTML = "User with Same Username already exist!";
          }
          else
          {
            document.getElementById("dan_msg").style.display = "block";
            document.getElementById("suc_msg").style.display = "none";
            document.getElementById("msgalert").innerHTML = myd.Status;
          }

        },err => {      
          console.error(err);    
        }); 
      }
      else
      {      
        document.getElementById("dan_msg").style.display = "block";
        document.getElementById("suc_msg").style.display = "none";
        document.getElementById("msgalert").innerHTML = "Passwords Don't Match!";
      }
 
    }
    else
    {      
      document.getElementById("dan_msg").style.display = "block";
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
    }
  }

  ResetForm()
  {
    this.model.bname = undefined;
    this.model.username = undefined;
    this.model.email = undefined;
    this.model.mob = undefined;
    this.model.city = undefined;
    this.model.pass = undefined;
    this.model.cpass = undefined;
    this.model.country = undefined;
  }

}
