import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-vehicleshistory',
  templateUrl: './vehicleshistory.component.html',
  styleUrls: ['./vehicleshistory.component.css']
})
export class VehicleshistoryComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public VehicleList;
  public TempVehicle;

  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
  this.LoadVehicles();
    
  }

  LoadVehicles()
  {
    this.myService.getVehicleHistory().subscribe((data)=>{          
     let myd = JSON.parse(data).Status;
     this.VehicleLoadView(myd);
    },err => {      
      console.error(err);    
    });  
  }

  hist(vid)
  {   
    if(document.getElementById("vehhist" + (vid + 1)).style.display == "none")
    document.getElementById("vehhist" + (vid + 1)).style.display = "table-row";
    else 
    document.getElementById("vehhist" + (vid + 1)).style.display = "none";
  }

  getUniqueValues(value, index, self) { 
    return self.indexOf(value) === index;
  }

  getColumnfromArray(matrix, col)
  {
      var column = [];
      for(var i=0; i<matrix.length; i++){
         column.push(matrix[i][col]);
      }
      return column;
  }

  VehicleLoadView(myd)
  {
    let mm = new Array();
     let y = this.getColumnfromArray(myd, "p_id");
     let z = y.filter( this.getUniqueValues ).sort();

     let i = 0, j = 0, g = 0, maincnt = 0, subcnt = 0;
     let str = "";

     for(i = 0; i < z.length; i++)
     {
        let x = myd.filter(function(val){
          return val.p_id == z[i];     
        });

        str += "<tr id='vehhist" + (++g) + "'> <td>" + (++maincnt) + "</td> <td>"+ x[0].lot + "</td> <td>" + x[0].make + " - " + x[0].model + "<br/>" + x[0].year + "</td> <td>" + x[0].serial + "</td> <td>" + x[0].client + "</td><td>" + x[0].currentloc + "</td><td><button class='btn btn-danger histbtn'>History</button></td></tr>";

        if(x.length > 1)
        {
          str += "<tr id='vehhist" + (++g) + "' style='display:none'><td colspan='7'><table class='table table-bordered text-center'><thead></thead><tr><th>Sno</th><th>Lot</th><th>Order Detail</th><th>Pickup Location</th><th>Dropoff Location</th><th>Status</th></tr>";
          mm.push("vehhist" + g);
          for(j = 0; j < x.length; j++)
          {
            
            str += "<tr> <td>" + (++subcnt) + "</td> <td>"+ x[j].lot + "</td> <td>" + x[j].orderno + "<br/>" + x[j].orderdate + "</td> <td>" + x[j].pickuploc +"</td> <td>" + x[j].dropoff + "</td> <td>";
            if(x[j].ostatus == 1)
            str += "Completed";
            else
            str += "Pending";
            
            str += "</td></tr>";
            
          }
          str += "</table></td></tr>";
        }

        subcnt = 0;
        
     }

     document.getElementById("vehicleid").innerHTML = str;

     let d = 0;
     for(d = 0; d < mm.length; d++)
     {
      let s = parseInt(mm[d].substr(7)) - 1;
      let l = document.getElementById("vehhist" + s);    
      console.log(s);
      let appr = l.querySelector(".histbtn");
      appr.addEventListener('click', (event) => this.hist(s));      
     }
  }

  SearchOrder()
  {
    this.myService.searchVehicleHistory(this.model.lot, this.model.client, this.model.chassis).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;
      this.VehicleLoadView(myd);

    },err => {      
      console.error(err);    
    });    
  }

  ResetForm()
  {
    this.model.lot = undefined;
    this.model.client = undefined;
    this.model.chassis = undefined;

    this.LoadVehicles();
  }

}
