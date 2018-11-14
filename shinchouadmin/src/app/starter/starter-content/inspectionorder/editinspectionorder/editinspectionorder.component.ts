import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-editinspectionorder',
  templateUrl: './editinspectionorder.component.html',
  styleUrls: ['./editinspectionorder.component.css']
})
export class EditinspectionorderComponent implements OnInit {

  model: any = {};
  productID: string;
  public ValSelect;

  public emaillogs;
  public orders;

  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    
   }

  ngOnInit() {

    document.getElementById("yardup").style.display = "none";
    
    this.LoadData();  
    this.LoadEmailLogs();
  }

  EditItem(val)
  {
    document.getElementById("yardup").style.display = "block";
    $('.nextgroup').hide();
    this.ValSelect = val;

    if(val == 1)
    {
      $('#yardup .box-title').text("Edit Status");
      $('#next1').show();
    }   

    window.scrollTo(0,0);
  }

  LoadData()
  {
    this.myService.getsingleinspectionorder(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status[0];   
      
      this.model.yardname = myd.yardname;
      this.model.make = myd.make;
      this.model.model = myd.model;
      this.model.year = myd.year; 
      this.model.chassis = myd.prefix; 
      this.model.servicename = myd.servicename; 
      this.model.inspection = myd.inspection;
      this.model.reqon = myd.reqon;   
      this.model.status = myd.status;      
 
     },err => {      
       console.error(err);    
     });     
  }

  LoadEmailLogs()
  {
    this.myService.getemailloginspection(this.productID).subscribe((data)=>{          
      this.emaillogs = JSON.parse(data).Status;     
 
     },err => {      
       console.error(err);    
     });     
  }

  Save()
  {
    $('.smallLoader').show();

    if(this.ValSelect == 1)
    {
      let item = (<HTMLSelectElement>document.getElementById("stat")).value;

      this.myService.updateinspectiondata('status', item, this.productID).subscribe((data)=>{          
       let myd = JSON.parse(data).Status;     

        if(myd == "Done")
        { 
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.LoadData();
        }
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        $('.smallLoader').hide();

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);
   
       },err => {      
         console.error(err);    
       });
      
    }   
  }

  FormatEmail(emailstr)
  {
    let arr = emailstr.split(',');

    return arr.join(' ');
  }
}

