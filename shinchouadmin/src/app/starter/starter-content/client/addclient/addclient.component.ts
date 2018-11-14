import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  model: any = {};
  public Countries;
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {    

    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });  
   
  }

  SaveForm()
  {
    let rle = window.localStorage.getItem("adm_role");
    let user = '';
    if(rle == 'salesuser')
    user = window.localStorage.getItem("adm_user");
    let cntry = (<HTMLSelectElement>document.getElementById("cntry")).value;

    if(this.model.username != undefined && this.model.bname != undefined && this.model.email != undefined && this.model.mob != undefined && this.model.pass != undefined && this.model.cpass != undefined && this.model.city != undefined && cntry != "" && this.model.port != undefined && this.model.address != undefined)
    {
      if(this.model.pass == this.model.cpass)
      {
        this.myService.addClient(this.model.username,this.model.email, this.model.pass, this.model.bname, this.model.city, cntry, this.model.mob, this.model.port, this.model.company, this.model.address, user).subscribe((data)=>{          
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
    this.model.username = undefined;
    this.model.bname = undefined;
    this.model.email = undefined;
    this.model.mob = undefined;
    this.model.city = undefined;
    this.model.pass = undefined;
    this.model.cpass = undefined;
    this.model.country = undefined;
    this.model.company = undefined;
    this.model.port = undefined;
    this.model.address = undefined;
  }

}
