import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editbookingagent',
  templateUrl: './editbookingagent.component.html',
  styleUrls: ['./editbookingagent.component.css']
})
export class EditbookingagentComponent implements OnInit {

  model: any = {};
  productID: string;
  public reps;
  public yardservice;
  public ports;
  public yardports;
  public portsSelectable;
  public allPort;
  public yardserviceSelectable;
  public bagencyservice;
  public Countries;
  public ValSelect = 0;
  public repnum = 0;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    
   }

  ngOnInit() {

    document.getElementById("yardup").style.display = "none";
    
    this.LoadData();
    this.getRepresentatives();
    this.getYardservices();

  }

  EditItem(val)
  {
    document.getElementById("yardup").style.display = "block";
    $('.nextgroup').hide();
    this.ValSelect = val;

    if(val == 1)
    {
      $('#yardup .box-title').text("Edit Address");
      $('#next1').show();
    }
    else if(val == 2)
    {
      $('#yardup .box-title').text("Edit Contact");
      $('#next2').show();
    }
    else if(val == 3)
    {
      $('#yardup .box-title').text("Edit Representatives");
      $('#next3').show();
    }
    else if(val == 4)
    {
      $('#yardup .box-title').text("Edit Booking Agency Services");
      $('#next4').show();
    }
  }

  LoadData()
  {
    this.myService.getSingleBAgency(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status[0];   
      console.log(myd);
      this.model.bagencyname = myd.name;
      this.model.address = myd.address;
      this.model.branch = myd.branch;
      this.model.tel = myd.tel;
      this.model.fax = myd.fax;
      this.model.email = myd.email;
      this.model.status = myd.status;
 
     },err => {      
       console.error(err);    
     });     
  }


  Addrep()
  {
    this.repnum++;
    let temp = '<div class="form-group col-xs-12">   <label class="col-sm-4 control-label">Representative # ' + this.repnum + '</label>    <div class="col-sm-8">      <input id="rep' + this.repnum + '" name="rep' + this.repnum + '" type="text" class="form-control" placeholder="Enter Representative">    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Mobile</label>    <div class="col-sm-8">      <input id="mob' + this.repnum + '" name="mob' + this.repnum + '" type="text" class="form-control" placeholder="Enter Mobile">    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Email</label>    <div class="col-sm-8">      <input id="remail' + this.repnum + '" name="remail' + this.repnum + '" type="text" class="form-control" placeholder="Enter Email">    </div>  </div> <div class="col-xs-12"><hr/></div>';

    let div = document.createElement('div');
    div.innerHTML = temp;

    document.getElementById('next3').appendChild(div);    
  }

  getRepresentatives()
  {
    this.myService.getbagencyreps(this.productID).subscribe((data)=>{          
      this.reps = JSON.parse(data).Status;
      
      let i = 0;
      for(i = 0; i < this.reps.length; i++)
      {
        this.repnum++;
        let temp = '<div class="form-group col-xs-12">  <label class="col-sm-4 control-label">Representative # ' + this.repnum + '</label>    <div class="col-sm-8">      <input id="rep' + this.repnum + '" name="rep' + this.repnum + '" value="' + this.reps[i].repname  + '" type="text" class="form-control" placeholder="Enter Representative">    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Mobile</label>    <div class="col-sm-8">      <input id="mob' + this.repnum + '" name="mob' + this.repnum + '"  value="' + this.reps[i].mob  + '" type="text" class="form-control" placeholder="Enter Mobile">    </div>  </div>  <div class="form-group col-xs-12">    <label class="col-sm-4 control-label">Email</label>    <div class="col-sm-8">      <input id="remail' + this.repnum + '" name="remail' + this.repnum + '"  value="' + this.reps[i].email  + '" type="text" class="form-control" placeholder="Enter Email">    </div>  </div> <div class="col-xs-12"><hr/></div>';

        let div = document.createElement('div');
        div.innerHTML = temp;

        document.getElementById('next3').appendChild(div);
      }
    
    },err => {      
      console.error(err);    
    });
  }

  getYardservices()
  {
    this.myService.getbagencyservices(this.productID).subscribe((data)=>{          
      this.bagencyservice = JSON.parse(data).Status;     
      this.getAllYardservices();
    },err => {      
      console.error(err);    
    });
  }

  filterYardService(event)
  {
    let tmpports = this.yardserviceSelectable;

    let x = tmpports.filter(function(val){
      let y = val.servicename.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.yardservice = x;
  }

  getAllYardservices()
  {
    this.myService.getallbookingservices().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.approval == 1;     
      });        
      console.log(myd);
      let arr = new Array();      
      let i = 0, j = 0;
      arr = x;

      for(i = 0; i < this.bagencyservice.length; i++)
      {
        for(j = 0; j < x.length; j++)
        {
          if(x[j].servicename == this.bagencyservice[i].servicename)
          {
            arr.splice(j, 1);
          }
          else
          {

          }
        }
      }

      this.yardservice = arr;
      this.yardserviceSelectable = this.yardservice;

      $('.smallLoader').hide();
      
    },err => {      
      console.error(err);    
    });
  }

  Addservice(event, portid)
  {
    $('.smallLoader').show();
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";  
      
      this.myService.addbagencyservices(this.productID, "bagencyservices", "serviceid", portid).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;  
        
        if(myd == "Done")
        {
          this.getYardservices();
        }
       
      },err => {      
        console.error(err);    
      });
    }
    else
    {
      event.target.className = "btnself btn-danger";
      event.target.innerText = "Select";      
    }    
  }

  deleteyardservice(ysid)
  {
    $('.smallLoader').show();
    this.myService.deletebagencyservices("bagencyservices", "bs_id", ysid).subscribe((data)=>{          
      console.log(data);
      let myd = JSON.parse(data).Status;  
      
      if(myd == "Done")
      {
        this.getYardservices();
      }
     
    },err => {      
      console.error(err);    
    });
  }


  Save()
  {
    $('.smallLoader').show();

    if(this.ValSelect == 1)
    {
      this.SaveAdress();
    }
    else if(this.ValSelect == 2)
    {
      this.SaveContact();
    } 
    else if(this.ValSelect == 3)
    {
      this.SaveReps();
    } 
  }

  SaveAdress()
  {
    let dte = new Date();

      this.myService.updateBAgency_Address(this.productID,this.model.address, dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();
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

  SaveContact()
  {
    let dte = new Date();

      this.myService.updateBAgency_Contact(this.productID,this.model.tel, this.model.fax, this.model.email, dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();    
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

  SaveReps()
  {
    let temp2 = '';
      for(var i = 1; i <= this.repnum; i++)
      {
        if(i > 1)
        temp2 += ',';

        temp2 += '{"rep":"';
        temp2 += (<HTMLInputElement>document.getElementById('rep' + i)).value;
        temp2 += '", "mob":"';
        temp2 += (<HTMLInputElement>document.getElementById('mob' + i)).value + '", "remail":"';
        temp2 += (<HTMLInputElement>document.getElementById('remail' + i)).value;
        temp2 += '"}';
      }

       this.myService.updateBAgency_Reps(this.productID, temp2).subscribe((data)=>{          
        let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        { 
          $('.smallLoader').hide();    
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";   
          this.getRepresentatives();       
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
    this.router.navigate(["bookingagent_list"]);
  }

  senttoyardservice()
  {
    this.router.navigate(['add_bookingservice']);
  }

}
