import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-containercharge',
  templateUrl: './containercharge.component.html',
  styleUrls: ['./containercharge.component.css']
})
export class ContainerchargeComponent implements OnInit {

  model: any = {};

  public charges;
  public shipmentsTable;
  public returnurl = '';
  constructor(public myService : DatafromServicesService, private router : Router) { }

  ngOnInit() {  
   
    this.getCharges();

    let rtl = window.localStorage.getItem('returnUrl');
    if(rtl != null)
    {
      this.returnurl = window.localStorage.getItem('returnUrl');
      document.getElementById("cancelbtn").style.display = "inline-block";
    }
  }

  cancelTransaction()
  {
    window.localStorage.removeItem('returnUrl');
    this.router.navigate([this.returnurl]);
  }

  getCharges()
  {
    this.myService.getcontainercharges().subscribe((data)=>{          
      this.charges = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  addcharge()
  {
    if(this.model.chargename != undefined && this.model.chargename != "")
    {
      this.myService.addcontainercharges(this.model.chargename, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
          this.getCharges();
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
        }    
        else if(myd.Status == "Exist")
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Booking Charge already exist!";
        }    
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);
      },err => {      
        console.error(err);    
      });
    }
    else
    {
      alert("Field can't be left empty!");
    }
  }

}

