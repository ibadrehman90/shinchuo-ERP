import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  private shipmentsTable: any;
  model: any = {};
  public Bookings;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadBookings();     
    
  }

  LoadBookings()
  {
    this.myService.getbookings().subscribe((data)=>{          
      this.Bookings = JSON.parse(data).Status;   

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

  UpdateBooking(ind)
  {
   this.router.navigate(["edit_booking/" + ind]);
  }

  SearchForm()
  { 
    this.myService.searchbooking(this.model.bookingno, this.model.yardname, this.model.vesselname).subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.Bookings = myd;
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.bookingno = undefined;
    this.model.yardname = undefined;
    this.model.vesselname = undefined;

    this.LoadBookings();
  }

}
