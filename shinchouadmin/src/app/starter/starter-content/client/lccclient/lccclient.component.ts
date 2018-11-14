import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-lccclient',
  templateUrl: './lccclient.component.html',
  styleUrls: ['./lccclient.component.css']
})
export class LccclientComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Clients;
  public Calculator;
  public passuser = '';
  public userrole = '';
  constructor(public myService : DatafromServicesService) {
    document.getElementById("Loader").style.display = "block";
    if(window.localStorage.getItem("su_showlcc") != '1')
    {
      window.location.href="/";
    }
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
    if(window.localStorage.getItem("su_showlcc") != '1')
    {
      window.location.href="/";
    }
    else
    this.LoadClients();
  }

  LoadClients()
  {
    this.myService.getClientsLCC(window.localStorage.getItem("adm_user")).subscribe((data)=>{          

      this.Clients = JSON.parse(data).Status;   
    
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        document.getElementById("Loader").style.display = "none";
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
        document.getElementById("example1").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  SelectUser(ind)
  {
    this.passuser = ind;
  }

  addRequest()
  {
    let dte = new Date();
    if(this.model.agent != undefined && this.model.exchange != undefined && this.model.freight != undefined)
    {
      
        this.myService.addRequest(this.passuser, this.model.agent, this.model.exchange, this.model.freight, dte.toString()).subscribe((data)=>{          
          let myd = JSON.parse(data); 
          
          if(myd.Status == "Done")
            {                   
              document.getElementById("dan_msg").style.display = "none";      
              document.getElementById("suc_msg").style.display = "block";
              document.getElementById("msgsuccess").innerHTML = "Saved!";
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

      this.model.agent = undefined;
      this.model.exchange = undefined;
      this.model.freight = undefined;
    }
    else
    {
     document.getElementById("dan_msg").style.display = "block";
     document.getElementById("suc_msg").style.display = "none";
     document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
    }
    
  }

  FormatCurr(amount)
  {
    if(amount != undefined)
    {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
    }
    else
    return "";
  }

  FormatAmount(event)
  {
    let x = event.target.value;
    event.target.value = Number(x.replace(/,/gi,'')).toLocaleString();
  }

}
