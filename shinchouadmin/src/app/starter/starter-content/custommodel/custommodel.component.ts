import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../datafrom-services.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-custommodel',
  templateUrl: './custommodel.component.html',
  styleUrls: ['./custommodel.component.css']
})
export class CustommodelComponent implements OnInit {

  normalList1 = [];

  normalList2 = [];

  normalOptions: SortablejsOptions = {
    group: 'normal-group'
  };

  public Countries;
  public Makes;
  public Models;
  public selectedCountry = "";
  public selectedMake = "";
  
  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {
    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });  
    
   /* this.myService.getMakes().subscribe((data)=>{          
      this.Makes = JSON.parse(data);
    },err => {      
      console.error(err);    
    });*/
   
  }

  Addmake()
  {
    let x = <HTMLSelectElement>document.getElementById("apimakes");

    let x1 = this.normalList2.indexOf(x.value);
    let y1 = this.normalList1.indexOf(x.value);

    if(x1 == -1 && y1 == -1)
    {    
      this.normalList2.push(x.value);
    }
    else if(x1 != -1 && y1 == -1)
    {
      alert("Already added!");
    }
    else if(x1 == -1 && y1 != -1)
    {
      alert("First Remove from Other Models List!");
    }
  }

  Addother()
  {
    let x = <HTMLSelectElement>document.getElementById("apimakes");

    let y1 = this.normalList2.indexOf(x.value);
    let x1 = this.normalList1.indexOf(x.value);

    if(x1 == -1 && y1 == -1)
    {    
      this.normalList1.push(x.value);
    }
    else if(x1 != -1 && y1 == -1)
    {
      alert("Already added!");
    }
    else if(x1 == -1 && y1 != -1)
    {
      alert("First Remove from Popular Models List!");
    }
  }

  SendMake()
  {

    if(this.normalList2.length > 0)
    {    
      this.myService.addcustmodel(this.selectedCountry, this.selectedMake, JSON.stringify(this.normalList2), JSON.stringify(this.normalList1)).subscribe((data)=>{          
        let myd = JSON.parse(data);

        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!"
        }       
        else
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = myd.Status;
        }

        setTimeout(() => {
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "none";
        },3000);
      },err => {      
        console.error(err);    
      }); 
    }
    else
    {
      document.getElementById("dan_msg").style.display = "block";
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "Nothing is selected to Update!";

      setTimeout(() => {
        document.getElementById("dan_msg").style.display = "none";      
        document.getElementById("suc_msg").style.display = "none";
      },3000);
    }
  }

  SelectCountry(event)
  {
    this.selectedCountry = event.target.value;
    this.selectedMake = "";
    (<HTMLSelectElement>document.getElementById("mkes")).value = "";

    if(event.target.value != "")
    {
      this.myService.getcustmake(event.target.value).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;
        console.log(myd);
        if(myd.length > 0)
        this.Makes =  JSON.parse(myd[0].makelist).concat(JSON.parse(myd[0].otherlist));
        else
        {
        this.Makes = new Array();
        this.selectedMake = "";
        }
      },err => {      
        console.error(err);    
      });  
    }
  }

  SelectMake(event)
  {
    this.selectedMake = event.target.value;
    this.Models = new Array();

    if(event.target.value != "")
    {
      this.myService.getModels(event.target.value).subscribe((data)=>{          
        let myd = JSON.parse(data);
        this.Models = myd;
        
      },err => {      
        console.error(err);    
      });
      
      this.myService.getcustmodel(this.selectedCountry,event.target.value).subscribe((data)=>{          
        let myd1 = JSON.parse(data).Status;
        if(myd1.length > 0)
        {
        this.normalList2 = JSON.parse(myd1[0].modellist);
        this.normalList1 = JSON.parse(myd1[0].otherlist);
        }
        else
        {          
          this.normalList1 = [];
          this.normalList2 = [];
        }
        
      },err => {      
        console.error(err);   
      });
    }
  }

  RemoveList(ind)
  {
    this.normalList2.splice(ind,1);
  }

  RemoveList1(ind)
  {
    this.normalList1.splice(ind,1);
  }

}
