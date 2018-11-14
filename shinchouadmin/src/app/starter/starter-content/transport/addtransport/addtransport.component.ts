import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-addtransport',
  templateUrl: './addtransport.component.html',
  styleUrls: ['./addtransport.component.css']
})
export class AddtransportComponent implements OnInit {
  model: any = {};
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {    

  }

  SaveForm()
  {
    let dte = new Date();

    if(this.model.sname != undefined && this.model.cperson != undefined && this.model.tel != undefined && this.model.mob != undefined && this.model.email != undefined && this.model.address != undefined)
    {
      this.myService.addTransportCompany(this.model.sname, this.model.cperson, this.model.tel, this.model.mob, this.model.fax, this.model.email, dte.toString(), this.model.address).subscribe((data)=>{          
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
          document.getElementById("msgalert").innerHTML = "Transport Company with Same Email already exist!";
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
    this.model.sname = undefined;
    this.model.cperson = undefined;
    this.model.tel = undefined;
    this.model.mob = undefined;
    this.model.fax = undefined;
    this.model.email = undefined;
    this.model.address = undefined;
  }

}
