import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {

  model: any = {};
  productID: string;
  name:string;
  address:string;
  email:string;
  mob:string;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    console.log(this.productID);
    this.LoadData();
   }

  ngOnInit() {
    
  }

  LoadData()
  {
    this.myService.getSingleClient(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   
      
      this.name = myd[0].name;
      this.address = myd[0].address;     
      this.email = myd[0].email;     
      this.mob = myd[0].mob; 
 
     },err => {      
       console.error(err);    
     });     
  }

  EditClient()
  {
    this.router.navigate(["edit_client/" + this.productID]);
  }

  ReturnBack()
  {
    this.router.navigate(["client_list"]);
  }

}