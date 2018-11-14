import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {
  public myStock;
  public saleuser = "";
  public statArray = new Array();
  constructor(public myService : DatafromApiService) { }

  ngOnInit() {

    this.getSalesuser();
    this.getStats();

  }

  getSalesuser()
  {
    this.myService.getSaleuser(window.localStorage.getItem("username")).subscribe((data)=>{          
      this.saleuser = JSON.parse(data).salesuser;
      if(this.saleuser != "")
      {
        this.LoadStocks(this.saleuser);
      }
    },err => {      
      console.error(err);    
    });
  }

  LoadStocks(userid)
  {
    this.myService.getStocks(userid).subscribe((data)=>{          
      this.myStock = JSON.parse(data).Status;
      console.log(this.myStock);
    },err => {      
      console.error(err);    
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

  FormatCurr(amount)
  {
    if(amount != 'N/A' && amount != null)
    {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
    }
    return amount;
  }

  getStats()
  {
    this.myService.getStats(window.localStorage.getItem("username")).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      this.statArray = myd[0];
      console.log(this.statArray);
    },err => {      
      console.error(err);    
    }); 
  }

}
