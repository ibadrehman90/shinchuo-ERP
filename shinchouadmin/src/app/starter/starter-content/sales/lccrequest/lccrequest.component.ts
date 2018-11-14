import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-lccrequest',
  templateUrl: './lccrequest.component.html',
  styleUrls: ['./lccrequest.component.css']
})
export class LccrequestComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Requests;
  constructor(public myService : DatafromServicesService) {
    
   }

  ngOnInit() { 
   
    this.LoadRequests();
  }

  LoadRequests()
  {
    this.myService.getRequests().subscribe((data)=>{          

      this.Requests = JSON.parse(data).Status;   

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

 
  ApproveRequest(sno, stat)
  {
    this.myService.approverequest(sno,stat).subscribe((data)=>{ 
      let myd = JSON.parse(data); 
      
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.LoadRequests();
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

  FormatCurr(amount)
  {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
  }
}
