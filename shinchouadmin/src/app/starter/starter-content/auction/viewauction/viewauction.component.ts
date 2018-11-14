import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewauction',
  templateUrl: './viewauction.component.html',
  styleUrls: ['./viewauction.component.css']
})
export class ViewauctionComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Auctions;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadAuctions();     
    
  }  

  LoadAuctions()
  {
    this.myService.getAuctions().subscribe((data)=>{          
     this.Auctions = JSON.parse(data).Status;   

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

  UpdateAuctions(ind)
  {
    this.router.navigate(["edit_auction/" + ind]);
  }

  SaveForm()
  {    
    this.myService.searchAuction(this.model.aname, this.model.pos, this.model.tel, this.model.fax, this.model.cname, this.model.email).subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.Auctions = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.aname = undefined;
    this.model.pos = undefined;
    this.model.tel = undefined;
    this.model.fax = undefined;
    this.model.cname = undefined;
    this.model.email = undefined;

    this.SaveForm();
  }

}
