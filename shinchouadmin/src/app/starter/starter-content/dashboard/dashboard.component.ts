import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../datafrom-services.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public bids = 0;
  public salesusers = 0;
  public buyers = 0;
  public client = 0;
  public userrole = "";
  public buyerAuc = new Array();
  public salesClient = new Array();
  public userauc = "";

  constructor(public myService : DatafromServicesService) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() {

    if(this.userrole == 'admin')
    {
    this.getCountsData('b_id','bids','');
    this.getCountsData1('username','userauth',"where role = 'client'");
    this.getCountsData2('username','userauth',"where role = 'salesuser'");
    this.getCountsData3('username','userauth',"where role = 'buyer'");
    }
    else if(this.userrole == 'buyer')
    {
      this.LoadBuyerAuctions();
    }
    else if(this.userrole == 'salesuser')
    {
      this.LoadSalesClients();
    }

  }

  LoadBuyerAuctions()
  {
    this.myService.getBuyerAuction(window.localStorage.getItem("adm_user")).subscribe((data)=>{          
      this.buyerAuc = JSON.parse(data).Status; 

      let i = 0;
      let str = "";
      if(this.buyerAuc.length > 0)
      {
        str += "auction = '" + this.buyerAuc[i].auction + "'";
        for(i = 1; i < this.buyerAuc.length; i++)
        {
          str += " OR auction = '" + this.buyerAuc[i].auction + "'";
        }

        this.userauc = " AND (" + str + ")";

        this.getCountsData('b_id','bids','where 1 ' + this.userauc);
      }
       
     },err => {      
       console.error(err);    
     }); 
  }

  LoadSalesClients()
  {
    this.myService.getSalesClient(window.localStorage.getItem("adm_user")).subscribe((data)=>{          
      this.salesClient = JSON.parse(data).Status; 

      let i = 0;
      let str = "";
      if(this.salesClient.length > 0)
      {
        str = "user_id = '" + this.salesClient[i].user + "'";
        for(i = 1; i < this.salesClient.length; i++)
        {
          str += " OR user_id = '" + this.salesClient[i].user + "'";
        }

        let fauc = " AND (" + str + ")";
        i = 0;
        str = "username = '" + this.salesClient[i].user + "'";
        for(i = 1; i < this.salesClient.length; i++)
        {
          str += " OR username = '" + this.salesClient[i].user + "'";
        }

        let fuser = " AND (" + str + ")";

        this.getCountsData('b_id','bids','where 1 ' + fauc);
        this.getCountsData1('username','userauth',"where role = 'client'" + fuser );
      }  
      
     },err => {      
       console.error(err);    
     }); 
  }

  getCountsData(field, tble, cond)
  {
    this.myService.getCountsData(field,tble,cond).subscribe((data)=>{         
      this.bids = (JSON.parse(data).Status)[0];
      
     },err => {      
       console.error(err);    
     });
  }

  getCountsData1(field, tble, cond)
  {
    this.myService.getCountsData(field,tble,cond).subscribe((data)=>{         
  
      this.client = (JSON.parse(data).Status)[0];
      
     },err => {      
       console.error(err);    
     });
  }

  getCountsData2(field, tble, cond)
  {
    this.myService.getCountsData(field,tble,cond).subscribe((data)=>{         
      this.salesusers = (JSON.parse(data).Status)[0];
      
      
     },err => {      
       console.error(err);    
     });
  }

  getCountsData3(field, tble, cond)
  {
    this.myService.getCountsData(field,tble,cond).subscribe((data)=>{         
      this.buyers = (JSON.parse(data).Status)[0];
      
     
     },err => {      
       console.error(err);    
     });
  }

}
