import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.css']
})
export class ViewclientComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Clients;
  public Calculator;
  public SalesUser;
  public passuser = '';
  public userrole = '';
  constructor(public myService : DatafromServicesService, private router: Router) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
      
    this.LoadClients(); 
    
    if(this.userrole == 'admin')
    {
    this.LoadCalculators(); 
    this.LoadSalesUsers();  
    }
    
  }

  UpdateStatus(event, ind)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
  
    let stat = '0';
    if(event.target.checked == true)
    stat = '1';
    else
    stat = '0';


    this.myService.updateLCCClient(ind, stat).subscribe((data)=>{          
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

      console.log(myd);
    },err => {      
      console.error(err);    
    });  
  }

  UpdateActiveStatus(event, ind)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
  
    let stat = '0';
    if(event.target.checked == true)
    stat = '1';
    else
    stat = '0';


    this.myService.updateStatusClient(ind, stat).subscribe((data)=>{          
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

      console.log(myd);
    },err => {      
      console.error(err);    
    });  
  }

  LoadClients()
  {
    this.myService.getClients(this.userrole, window.localStorage.getItem("adm_user")).subscribe((data)=>{          
     this.Clients = JSON.parse(data).Status;   

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

  LoadCalculators()
  {
    this.myService.getCalc().subscribe((data)=>{          
      this.Calculator = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     }); 
  }

  LoadSalesUsers()
  {
    this.myService.getBSUsers("salesuser").subscribe((data)=>{          
      this.SalesUser = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     }); 
  }

  UpdateSelect(event, email, cat)
  {
    this.myService.updateSelect(email, cat, event.target.value).subscribe((data)=>{          
      let myd = JSON.parse(data); 
     
      if(myd.Status == "Done")
      {                     
      document.getElementById("dan_msg").style.display = "none";      
      document.getElementById("suc_msg").style.display = "block";
      document.getElementById("msgsuccess").innerHTML = "Saved!";
      }

      setTimeout(function() {
        document.getElementById("dan_msg").style.display = "none";
        document.getElementById("suc_msg").style.display = "none";        
      }, 2000);
    },err => {      
      console.error(err);    
    }); 
  }

  SelectUser(ind)
  {
    this.passuser = ind;
  }

  UpdateClients(ind)
  {
    this.router.navigate(["edit_client/" + ind]);
  }

  Detail(ind)
  {
    this.router.navigate(["client_detail/" + ind]);
  }

  ChangePassword()
  {
    if(this.model.pass != undefined && this.model.cpass != undefined)
    {
      if(this.model.pass == this.model.cpass)
      {
        this.myService.changePassword(this.passuser, this.model.pass).subscribe((data)=>{          
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
        document.getElementById("msgalert").innerHTML = "Passwords Don't Match!";
      }

      this.model.pass = undefined;
      this.model.cpass = undefined;
    }
    else
    {
     document.getElementById("dan_msg").style.display = "block";
     document.getElementById("suc_msg").style.display = "none";
     document.getElementById("msgalert").innerHTML = "Fields Can't be Left Empty!";
    }
    
  }

  /*SaveForm()
  { 
    let x = document.getElementById("statselect"); 
    
    let statans = '';
    if((<HTMLInputElement>x).value == "All")   
    statans = '';
    else if ((<HTMLInputElement>x).value == "Active")
    statans = '1';
    else if((<HTMLInputElement>x).value == "Inactive")
    statans = '0';


    
    this.myService.searchShipper(this.model.sname, this.model.cperson, this.model.tel, this.model.mob, this.model.fax, this.model.email, statans).subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.Shippers = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.sname = undefined;
    this.model.cperson = undefined;
    this.model.tel = undefined;
    this.model.mob = undefined;
    this.model.fax = undefined;
    this.model.email = undefined;

    let x = document.getElementById("statselect");
    (<HTMLInputElement>x).value = "All";

    this.SaveForm();
  }*/

}
