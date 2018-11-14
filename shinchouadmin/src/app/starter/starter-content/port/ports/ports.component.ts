import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit {
  model: any = {};
  public Countries;
  public ports;
  public pendingports;
  public SelectedCountry;
  public shipmentsTable;
  public returnurl = '';
  constructor(public myService : DatafromServicesService, private router : Router) { }

  ngOnInit() {

    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);

      console.log(this.Countries);
    },err => {      
      console.error(err);    
    });   
    
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

  SelectCountry(event)
  {
    this.SelectedCountry = event.target.value;
    
    if(event.target.value != "")
    {
      document.getElementById("forCountry").style.display = "block";
      this.getPorts();
      this.getPendingPorts();
    }
    else
    {
      document.getElementById("forCountry").style.display = "none";
    }
  }

  getPorts()
  {
    this.myService.getports(this.SelectedCountry).subscribe((data)=>{          
      this.ports = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  getPendingPorts()
  {
    this.myService.getpendingports(this.SelectedCountry).subscribe((data)=>{          
      this.pendingports = JSON.parse(data).Status;
      
    },err => {      
      console.error(err);    
    });
  }

  addport()
  {
    if(this.model.portname != undefined && this.model.portname != "")
    {
      this.myService.addport(this.model.portname, this.SelectedCountry, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
        
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.getPendingPorts();
        }    
        else if(myd.Status == "Exist")
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Port already exist!";
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
