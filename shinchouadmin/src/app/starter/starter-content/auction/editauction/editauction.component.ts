import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editauction',
  templateUrl: './editauction.component.html',
  styleUrls: ['./editauction.component.css']
})
export class EditauctionComponent implements OnInit {
  model: any = {};
  productID: string;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    this.LoadData();
   }

  ngOnInit() {
    
  }

  LoadData()
  {
    this.myService.getSingleAuction(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      
      this.model.aname = myd.aname;
      this.model.pos = myd.pos;
      this.model.tel = myd.tel;
      this.model.cname = myd.cname;
      this.model.fax = myd.fax;
      this.model.email = myd.email;
 
     },err => {      
       console.error(err);    
     });     
  }

  SaveForm()
  {
    let dte = new Date();

    if(this.model.aname != undefined && this.model.pos != undefined && this.model.cname != undefined && this.model.email != undefined)
    {
      this.myService.updateAuction(this.productID, this.model.aname, this.model.pos, this.model.tel, this.model.fax, this.model.cname, this.model.email, dte.toString()).subscribe((data)=>{          
      
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

      },err => {      
        console.error(err);    
      }); 
 
    }
    else
    {      
      document.getElementById("dan_msg").style.display = "block";
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
    }
  }

  ReturnBack()
  {
    //window.location.href = "auction_list";
    this.router.navigate(["auction_list"]);
  }

}
