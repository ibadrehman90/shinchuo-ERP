import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {

  model: any = {};
  productID: string;
  roles:string;
  public Countries;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    this.LoadData();
   }

  ngOnInit() {

    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });  
    
  }

  LoadData()
  {
    this.myService.getSingleClient(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      
      this.model.bname = myd[0].name;
      this.model.email = myd[0].email;     
      this.model.mob = myd[0].mob;
      this.model.address = myd[0].address;
      (<HTMLSelectElement>document.getElementById("cntry")).value = myd[0].country;
      this.model.city = myd[0].city;
      this.model.port = myd[0].port;
      this.model.company = myd[0].company;
 
     },err => {      
       console.error(err);    
     });     
  }

  SaveForm()
  {
    let cntry = (<HTMLSelectElement>document.getElementById("cntry")).value;

      this.myService.updateClient(this.productID, this.model.bname, this.model.city, cntry, this.model.mob, this.model.port, this.model.company, this.model.address).subscribe((data)=>{          
      
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

  ReturnBack()
  {
    this.router.navigate(["client_list"]);
  }

}
