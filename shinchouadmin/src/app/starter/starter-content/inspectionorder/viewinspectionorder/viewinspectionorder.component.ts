import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewinspectionorder',
  templateUrl: './viewinspectionorder.component.html',
  styleUrls: ['./viewinspectionorder.component.css']
})
export class ViewinspectionorderComponent implements OnInit {

  model:any = {};
  private shipmentsTable: any;
  public inspectionorders;
  public selectedID;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadOrders();     
    
  }

  LoadOrders()
  {
    this.myService.getinpectionorder().subscribe((data)=>{          
     this.inspectionorders = JSON.parse(data).Status;  

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

  neworder()
  {
    this.router.navigate(["add_inspectionorder"]);
  }

  DetailOrder(ind)
  {
    //let ind = event.target.id.substr(3);
    this.router.navigate(["edit_inspectionorder/" + ind]);
  }

  SelectInspectID(ind)
  {
    this.selectedID = ind;

    let x = this.inspectionorders.filter(function(val){      
      return val.inso_id == ind;     
    }); 

    this.model.make = x[0].make;
    this.model.chassis = x[0].prefix;
    this.model.year = x[0].year;
    this.model.reqon = x[0].reqon;
    this.model.model = x[0].model;
    this.model.inspection = x[0].inspection;
    this.model.servicename = x[0].servicename;
    this.model.yardname = x[0].yardname;
  }


  RemindOrder()
  {
    $('.smallLoader').show();
    this.myService.remindinspectionorder(this.model.chassis, this.model.make, this.model.model, this.model.year, this.model.yardname, this.model.servicename, this.model.reqon, this.model.emails, this.model.remarks, this.model.inspection,this.selectedID).subscribe((data)=>{          
      let myd = JSON.parse(data);  

      if(myd.Status == "Done")
      { 
        $('.smallLoader').hide();
        document.getElementById("dan_msg").style.display = "none";      
        document.getElementById("suc_msg").style.display = "block";
        document.getElementById("msgsuccess").innerHTML = "Email Sent Successfully!";
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

