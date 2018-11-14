import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../datafrom-services.service';

@Component({
  selector: 'app-adminstocklist',
  templateUrl: './adminstocklist.component.html',
  styleUrls: ['./adminstocklist.component.css']
})
export class AdminstocklistComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public purchased;
  public userrole;
  public selectedSoldid;
  public Users;
  constructor(public myService : DatafromServicesService) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
    
    this.LoadBSUsers();  
    this.LoadSalesStocks();
  }

  LoadBSUsers()
  {
    this.myService.getBSUsers("salesuser").subscribe((data)=>{          
     this.Users = JSON.parse(data).Status;   

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

  LoadSalesStocks()
  {
    this.myService.loadSalesStocks("All").subscribe((data)=>{          
      this.purchased = JSON.parse(data).Status;  
      console.log(this.purchased);
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

  SelectSalesUser(event)
  {
    if(event.target.value != "")
    {
      this.myService.loadSalesStocks(event.target.value).subscribe((data)=>{          
        this.purchased = JSON.parse(data).Status;  
        console.log(this.purchased);
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
    else
    {
      this.LoadSalesStocks();
    }
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