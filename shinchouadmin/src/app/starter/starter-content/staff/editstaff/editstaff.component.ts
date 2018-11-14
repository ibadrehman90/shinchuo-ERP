import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.css']
})
export class EditstaffComponent implements OnInit {


  model: any = {};
  productID: string;
  roles:string;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    this.LoadData();
   }

  ngOnInit() {
    
  }

  LoadData()
  {
    this.myService.getSingleBSUser(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      
      this.model.bname = myd.bname;
      this.model.email = myd.email;     
      this.model.mob = myd.mob;
      this.roles = myd.role;      
 
     },err => {      
       console.error(err);    
     });     
  }

  SaveForm()
  {
   
    if(this.model.bname != undefined && this.model.mob != undefined && this.model.email != undefined)
    {
      this.myService.updateBSUser(this.productID, this.model.bname, this.model.mob, this.model.email, this.roles).subscribe((data)=>{          
      
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
          document.getElementById("msgalert").innerHTML = "User with Same Email already exist!";
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
    this.router.navigate(["staff_list"]);
  }

}
