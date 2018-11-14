import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editshipper',
  templateUrl: './editshipper.component.html',
  styleUrls: ['./editshipper.component.css']
})
export class EditshipperComponent implements OnInit {

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
    this.myService.getSingleShipper(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      
      this.model.sname = myd.sname;
      this.model.cperson = myd.cperson;
      this.model.tel = myd.tel;
      this.model.mob = myd.mob;
      this.model.fax = myd.fax;
      this.model.email = myd.email;
 
     },err => {      
       console.error(err);    
     });     
  }

  SaveForm()
  {
    let dte = new Date();

    if(this.model.sname != undefined && this.model.cperson != undefined && this.model.tel != undefined && this.model.mob != undefined && this.model.email != undefined)
    {
      this.myService.updateShipper(this.productID, this.model.sname, this.model.cperson, this.model.tel, this.model.mob, this.model.fax, this.model.email, dte.toString()).subscribe((data)=>{          
      
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
        }
        else if(myd.Status == "Exist")
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Shipper with Same Email already exist!";
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
    this.router.navigate(["shipper_list"]);
  }

}
