import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewyard',
  templateUrl: './viewyard.component.html',
  styleUrls: ['./viewyard.component.css']
})
export class ViewyardComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Yards;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadYards();     
    
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


    this.myService.updateStatusYard(ind, stat).subscribe((data)=>{          
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

  LoadYards()
  {
    this.myService.getYards().subscribe((data)=>{          
     this.Yards = JSON.parse(data).Status;   

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

  UpdateYards(ind)
  {
    this.router.navigate(["edit_yard/" + ind]);
  }

  DetailYard(ind)
  {
    this.router.navigate(["detail_yard/" + ind]);
  }

  SaveForm()
  { 
    let x = document.getElementById("statselect"); 
    
    let statans = '';
    if((<HTMLInputElement>x).value == "All")   
    statans = '';
    else if ((<HTMLInputElement>x).value == "Active")
    statans = '1';
    else if((<HTMLInputElement>x).value == "Inactive")
    statans = '0';


    
    this.myService.searchYard(this.model.name, this.model.email, this.model.city, this.model.country, this.model.pos, statans).subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.Yards = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.name = undefined;
    this.model.city = undefined;
    this.model.country = undefined;
    this.model.pos = undefined;
    this.model.email = undefined;

    let x = document.getElementById("statselect");
    (<HTMLInputElement>x).value = "All";

    this.SaveForm();
  }

}
