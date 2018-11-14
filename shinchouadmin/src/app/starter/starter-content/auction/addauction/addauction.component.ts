import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addauction',
  templateUrl: './addauction.component.html',
  styleUrls: ['./addauction.component.css']
})
export class AddauctionComponent implements OnInit {
  model: any = {};
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {    

  }

  SaveForm()
  {
    let dte = new Date();

    if(this.model.aname != undefined && this.model.pos != undefined && this.model.cname != undefined && this.model.email != undefined)
    {
      this.myService.addAuction(this.model.aname, this.model.pos, this.model.tel, this.model.fax, this.model.cname, this.model.email, dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.ResetForm();
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
      document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
    }
  }

  ResetForm()
  {
    this.model.aname = undefined;
    this.model.pos = undefined;
    this.model.tel = undefined;
    this.model.fax = undefined;
    this.model.cname = undefined;
    this.model.email = undefined;
  }

}
