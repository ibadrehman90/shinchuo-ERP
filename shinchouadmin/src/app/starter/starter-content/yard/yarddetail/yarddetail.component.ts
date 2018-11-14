import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-yarddetail',
  templateUrl: './yarddetail.component.html',
  styleUrls: ['./yarddetail.component.css']
})
export class YarddetailComponent implements OnInit {

  model: any = {};
  productID: string;
  public yardservice;
  public yardserviceSelectable;
  public ports;
  public portsSelectable;
  public reps;

  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
   
   }

  ngOnInit() {
    this.getPorts();
    this.getYardservices();
    this.getRepresentatives();
    this.LoadData();
  }

  LoadData()
  {
    this.myService.getSingleYard(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status[0];   
      console.log(myd);
      this.model.name = myd.name;
      this.model.address = myd.address;
      this.model.billingaddress = myd.billingaddress;
      this.model.branch = myd.branch;
      this.model.city = myd.city
      this.model.country = myd.country;
      this.model.pos = myd.pos;
      this.model.tel = myd.tel;
      this.model.fax = myd.fax;
      this.model.prefacture = myd.prefacture;
      this.model.email = myd.email;
      this.model.status = myd.status;
 
     },err => {      
       console.error(err);    
     });     
  }

  getRepresentatives()
  {
    this.myService.getreps(this.productID).subscribe((data)=>{          
      this.reps = JSON.parse(data).Status;      
      console.log(this.reps);
    },err => {      
      console.error(err);    
    });
  }

  getYardservices()
  {
    this.myService.getyardyardservices(this.productID).subscribe((data)=>{          
      this.yardservice = JSON.parse(data).Status;     
      console.log(this.yardservice); 
    },err => {      
      console.error(err);    
    });
  }

  getPorts()
  {
    this.myService.getyardports(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;       
      this.ports = myd; 
      console.log(this.ports);     
    },err => {      
      console.error(err);    
    });
  }

  EditYard()
  {
    this.router.navigate(["edit_yard/" + this.productID]);
  }

  ReturnBack()
  {
    this.router.navigate(["yard_list"]);
  }

}
