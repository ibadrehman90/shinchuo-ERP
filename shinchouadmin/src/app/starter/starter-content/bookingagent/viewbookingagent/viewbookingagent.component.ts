import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewbookingagent',
  templateUrl: './viewbookingagent.component.html',
  styleUrls: ['./viewbookingagent.component.css']
})
export class ViewbookingagentComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public BAgency;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadBAgency();     
    
  }

  UpdateStatus(event, ind)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
  
    let stat = '0';
    if(event.target.checked == true)
    stat = '1';
    else
    stat = '0';


    this.myService.updateStatusBAgency(ind, stat).subscribe((data)=>{          
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

      console.log(myd);
    },err => {      
      console.error(err);    
    });  
  }

  LoadBAgency()
  {
    this.myService.getBagency().subscribe((data)=>{          
      this.BAgency = JSON.parse(data).Status;   

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

  UpdateBAgency(ind)
  {
    this.router.navigate(["edit_bookingagent/" + ind]);
  }

  SearchForm()
  { 
    this.myService.searchBAgency(this.model.name, this.model.email, this.model.branch).subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.BAgency = myd;
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.name = undefined;
    this.model.branch = undefined;
    this.model.email = undefined;

    this.SearchForm();
  }

}
