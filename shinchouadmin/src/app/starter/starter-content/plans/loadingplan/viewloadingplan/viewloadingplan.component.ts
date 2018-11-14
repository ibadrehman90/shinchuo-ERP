import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../../../datafrom-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewloadingplan',
  templateUrl: './viewloadingplan.component.html',
  styleUrls: ['./viewloadingplan.component.css']
})
export class ViewloadingplanComponent implements OnInit {

  public yards;
  public selectedYard = '';
  public SelectedYard;
  
  
  public planSelectable;

  public shipmentsTable;

  public loadingplan;

  constructor(public myService : DatafromServicesService, private router : Router) { }

  ngOnInit() {

    this.LoadYards();
    this.LoadPlans();
  }

  LoadYards()
  {
    this.myService.getYards().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      let x = myd.filter(function(val){
        return val.status == 1;     
      });

      this.yards = x;

    },err => {      
      console.error(err);    
    }); 
  }

  SelectYard(event)
  {
    this.selectedYard = event.target.value;

    if(this.selectedYard != "")
    {
      let x = this.yards.filter(function(val){
        return val.y_id == event.target.value;     
      });

      this.SelectedYard = x[0].name;
    }

    this.LoadPlans();
    
  }

  filterPlans(event)
  {
    let tmp = this.planSelectable;

    let x = tmp.filter(function(val){
      let y = val.plancode.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.loadingplan = x;
  }

  LoadPlans()
  {
    this.myService.getloadingplan(this.selectedYard).subscribe((data)=>{          
      this.loadingplan = JSON.parse(data).Status;  

      this.planSelectable = this.loadingplan;
      
      document.getElementById("forCountry").style.display = "block";

    },err => {      
      console.error(err);    
    }); 
  }

  viewplan(plancode)
  {
    this.router.navigate(["view_plan/" + plancode]);
  }

}
