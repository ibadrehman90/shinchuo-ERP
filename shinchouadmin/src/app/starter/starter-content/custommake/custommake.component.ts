import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../../datafrom-services.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-custommake',
  templateUrl: './custommake.component.html',
  styleUrls: ['./custommake.component.css']
})
export class CustommakeComponent implements OnInit {


  normalList1 = [];

  normalList2 = [];

  normalOptions: SortablejsOptions = {
    group: 'normal-group'
  };

  public Countries;
  public Makes;
  public selectedCountry = "";

  constructor(public myService : DatafromServicesService) { }

  ngOnInit() {
    this.myService.getCountries().subscribe((data)=>{          
      this.Countries = JSON.parse(data);
    },err => {      
      console.error(err);    
    });  
    
    
    this.myService.getMakes().subscribe((data)=>{          
      this.Makes = JSON.parse(data);
    },err => {      
      console.error(err);    
    });  
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
      alert("First Remove from Other Makes List!");
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
      alert("First Remove from Popular Makes List!");
    }
  }

  SendMake()
  {
    let x = <HTMLSelectElement>document.getElementById("cntry");

    if(x.value != "" && this.normalList2.length > 0)
    {    
      this.myService.addcustmake(x.value, JSON.stringify(this.normalList2), JSON.stringify(this.normalList1)).subscribe((data)=>{          
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
    this.normalList2 = [];
    this.normalList1 = [];

    if(event.target.value != "")
    {
      this.myService.getcustmake(event.target.value).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;

          this.normalList2 = JSON.parse(myd[0].makelist);     
          this.normalList1 = JSON.parse(myd[0].otherlist);     
        

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
