import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../datafrom-services.service';

@Component({
  selector: 'app-clientgroup',
  templateUrl: './clientgroup.component.html',
  styleUrls: ['./clientgroup.component.css']
})
export class ClientgroupComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Requests;
  public Clients;
  constructor(public myService : DatafromServicesService) {
    
   }

  ngOnInit() { 
   
    this.LoadRequests();
    this.LoadClients();

    $('.select2').select2();

    
  }

  LoadClients()
  {
    this.myService.getSalesClient(window.localStorage.getItem("adm_user")).subscribe((data)=>{          

      this.Clients = JSON.parse(data).Status;   

    },err => {      
      console.error(err);    
    }); 
  }

  AddGroup()
  {
    let x = document.getElementById("groupclient");
    let ans = this.getSelectValues(x);

    if((this.model.gname != "" || this.model.gname != undefined) && ans.length > 0)
    {
      this.myService.addgroup(this.model.gname,JSON.stringify(ans), window.localStorage.getItem("adm_user")).subscribe((data)=>{          

        let myd = JSON.parse(data);   

        if(myd.Status == "Done")
        { 
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.LoadRequests();
        }
        else if(myd.Status == "Exist")
        {
          document.getElementById("dan_msg").style.display = "block";
          document.getElementById("suc_msg").style.display = "none";
          document.getElementById("msgalert").innerHTML = "Group with same name already Exist!";
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

  getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

  FormatEmails(emails)
  {
    let x = JSON.parse(emails);
    let  i = 0;
    let str = "";
    for(i = 0; i < x.length; i++)
    {
      str += x[i] + "; ";
    }

    return str;
  }

  LoadRequests()
  {
    this.myService.getgroups(window.localStorage.getItem("adm_user")).subscribe((data)=>{          

      this.Requests = JSON.parse(data).Status;   

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

 
  UpdateStatus(event, gid)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
  
    let stat = '0';
    if(event.target.checked == true)
    stat = '1';
    else
    stat = '0';


    this.myService.updategroup(gid, stat).subscribe((data)=>{          
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

  FormatCurr(amount)
  {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
  }

  ResetForm()
  {
    this.model.gname = undefined;
    let x = document.getElementById("groupclient");
    (<HTMLSelectElement>x).value = "";

    $('.select2').select2();
  }
}
