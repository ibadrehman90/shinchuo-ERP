import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.component.html',
  styleUrls: ['./viewstaff.component.css']
})
export class ViewstaffComponent implements OnInit {


  model: any = {};
  private shipmentsTable: any;
  public BSUsers;
  public passuser = '';
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadBSUsers();     
    
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


    this.myService.updateStatusBSUser(ind, stat).subscribe((data)=>{          
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

  LoadBSUsers()
  {
    this.myService.getBSUsers("staff").subscribe((data)=>{          
     this.BSUsers = JSON.parse(data).Status;   

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

  UpdateBSUsers(ind)
  {
    this.router.navigate(["edit_staff/" + ind]);
  }

  SelectUser(ind)
  {
    this.passuser = ind;
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
