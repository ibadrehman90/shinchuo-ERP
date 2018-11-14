import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../datafrom-services.service';

@Component({
  selector: 'app-stocksoldlist',
  templateUrl: './stocksoldlist.component.html',
  styleUrls: ['./stocksoldlist.component.css']
})
export class StocksoldlistComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public purchased;
  public userrole;
  public selectedSoldid;
  constructor(public myService : DatafromServicesService) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
    
    this.LoadPurchased();  
    
  }

  LoadPurchased()
  {
    this.myService.getStocksold(window.localStorage.getItem("adm_user"), window.localStorage.getItem("adm_role")).subscribe((data)=>{          
      this.purchased = JSON.parse(data).Status;   
     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
        document.getElementById("example1").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  getImagelink(imglinks,ind)
  {    
    if(imglinks != null)
    {
    var imgx = imglinks.substr(0,imglinks.length - 1);
    var imgy = imgx.split("#");
    if(ind == -1)
    {
      return imgy;
    }
    else
    return imgy[ind];     
    }
    else
    return "";
  }

  getlabel(ind)
  {
    return "image-" + ind;
  }

  CancelSold(soldid, sid)
  {
    this.myService.CancelStocksold(soldid, sid).subscribe((data)=>{          
      let myd = JSON.parse(data);  
      
      if(myd.Status == "Done")
      {                   
        document.getElementById("dan_msg").style.display = "none";      
        document.getElementById("suc_msg").style.display = "block";
        document.getElementById("msgsuccess").innerHTML = "Stock Sold Successfully!";    
        this.LoadPurchased();     
      }      
      else
      {
        document.getElementById("dan_msg").style.display = "block";
        document.getElementById("suc_msg").style.display = "none";
        document.getElementById("msgalert").innerHTML = myd.Status;
      }
     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
        document.getElementById("example1").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  FormatCurr(amount)
  {
    if(amount != 'N/A')
    {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
    }
    return amount;
  }

  FormatAmount(event)
  {
    let x = event.target.value;
    event.target.value = Number(x.replace(/,/gi,'')).toLocaleString();
  }
}