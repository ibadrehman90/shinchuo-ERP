import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-editshipmentconsignee',
  templateUrl: './editshipmentconsignee.component.html',
  styleUrls: ['./editshipmentconsignee.component.css']
})
export class EditshipmentconsigneeComponent implements OnInit {

  model: any = {};
  productID: string;
  
  public ports;
  public portsSelectable;
  public allPort;  
  public ValSelect = 0;


  public Client;
  public clientSelectable;
  public allClient; 

  public Vehicle;
  public vehicleSelectable;
  public allVehicles; 

  public Vehicles;
  public Clients;
  public Destinations;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id']; 
    
   }

  ngOnInit() {

    document.getElementById("yardup").style.display = "none";
    
    this.LoadData();
   
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
      $('#yardup .box-title').text("Edit Clients");
      $('#next3').show();
    }
    else if(val == 4)
    {
      $('#yardup .box-title').text("Edit Destinations");
      $('#next4').show();
    }
    else if(val == 5)
    {
      $('#yardup .box-title').text("Edit Vehicles");
      $('#next5').show();
    }
  }

  LoadData()
  {
    this.myService.getSingleShipmentConsignee(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  

      this.model.shipmentusage = myd[0].cusage;
      this.model.cname = myd[0].cname;
      this.model.caddress = myd[0].caddress;
      this.model.tel = myd[0].tel;
      this.model.fax = myd[0].fax;
      this.model.email = myd[0].email;

      this.LoadClients();

      if(this.model.shipmentusage == 'Default')
      this.LoadDestinations();

      else if(this.model.shipmentusage == 'Single Use')
      this.LoadVehicles();
 
     },err => {      
       console.error(err);    
     });   
  } 

  LoadClients()
  {
    this.myService.getConsigneeClients(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      this.Clients = myd;
      
      if(this.model.shipmentusage == 'Single Use')
      {
        this.model.client = myd[0].clid;
      }

      this.LoadAllClients();
     },err => {      
       console.error(err);    
     });   
  } 

  LoadDestinations()
  {
    this.myService.getConsigneeDestinations(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      this.Destinations = myd; 

      this.getAllPorts();

     },err => {      
       console.error(err);    
     });   
  } 

  LoadVehicles()
  {
    this.myService.getConsigneeVehicles(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      this.Vehicles = myd; 

      this.LoadAllVehicles();
     },err => {      
       console.error(err);    
     });   
  } 

  /** */

  filterYard(event)
  {
    let tmpports = this.portsSelectable;

    let x = tmpports.filter(function(val){
      let y = val.port.toLowerCase();
      return y.indexOf(event.target.value) > -1;     
    });  
    
    this.ports = x;
  }

  Addport(event, portid)
  {
    $('.smallLoader').show();
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";  
      
      this.myService.addDestination(this.productID, "consigneedestination", "portid", portid).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;  
        
        if(myd == "Done")
        {
          this.LoadDestinations();
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

  deleteport(ypid)
  {
    $('.smallLoader').show();
    this.myService.deleteDestination("consigneedestination", "d_id", ypid).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      
      if(myd == "Done")
      {
        this.LoadDestinations();
      }
     
    },err => {      
      console.error(err);    
    });
  }

  getAllPorts()
  {
    this.myService.getallpendingports().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.approval == 1;     
      });        

      let arr = new Array();      
      let i = 0, j = 0;
      arr = x;

      for(i = 0; i < this.Destinations.length; i++)
      {
        for(j = 0; j < x.length; j++)
        {
          if(x[j].port == this.Destinations[i].port)
          {
            arr.splice(j, 1);
          }
          else
          {

          }
        }
      }

      this.ports = arr;
      this.portsSelectable = this.ports;

      $('.smallLoader').hide();
      
    },err => {      
      console.error(err);    
    });
  }


  LoadAllClients()
  {
    this.myService.getClients("admin", "admin").subscribe((data)=>{          
     
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.status == 1;     
      });       

      let arr = new Array();      
      let i = 0, j = 0;
      arr = x;

      for(i = 0; i < this.Clients.length; i++)
      {
        for(j = 0; j < x.length; j++)
        {
          if(x[j].username == this.Clients[i].clid)
          {
            arr.splice(j, 1);
          }
          else
          {

          }
        }
      }
      
      this.Client = arr;
      this.clientSelectable = this.Client;
       
      $('.smallLoader').hide();
    },err => {      
      console.error(err);    
    }); 
  }
  
  filterClient(event)
  {
    let tmpports = this.clientSelectable;

    let x = tmpports.filter(function(val){
      let y = val.username.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.Client = x;
  }

  AddClient(event, portid)
  {
    $('.smallLoader').show();
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";  
      
      this.myService.addDestination(this.productID, "consigneeclients", "clid", portid).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;  
        
        if(myd == "Done")
        {
          this.LoadClients();
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

  deleteclient(ypid)
  {
    $('.smallLoader').show();
    this.myService.deleteDestination("consigneeclients", "c_id", ypid).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      
      if(myd == "Done")
      {
        this.LoadClients();
      }
     
    },err => {      
      console.error(err);    
    });
  }



  LoadAllVehicles()
  {
    this.myService.getClientVehicles(this.model.client).subscribe((data)=>{          
     
      let x = JSON.parse(data).Status;

      let arr = new Array();      
      let i = 0, j = 0;
      arr = x;

      for(i = 0; i < this.Vehicles.length; i++)
      {
        for(j = 0; j < x.length; j++)
        {
          if(x[j].s_id == this.Vehicles[i].s_id)
          {
            arr.splice(j, 1);
          }
          else
          {

          }
        }
      }
      
      this.Vehicle = arr;
      this.vehicleSelectable = this.Vehicle;      

      $('.smallLoader').hide();

    },err => {      
      console.error(err);    
    }); 
  }

  filterVehicle(event)
  {
    let tmpports = this.vehicleSelectable;

    let x = tmpports.filter(function(val){
      let y = val.prefix.toLowerCase();
      return y.indexOf(event.target.value.toLowerCase()) > -1;     
    });  
    
    this.Vehicle = x;
  }

  Addvehicle(event, portid)
  {
    $('.smallLoader').show();
    if(event.target.className == "btnself btn-danger")
    {
      event.target.className = "btnself btn-black";
      event.target.innerText = "Unselect";  
      
      this.myService.addDestination(this.productID, "consigneevehicles", "pid", portid).subscribe((data)=>{          
        let myd = JSON.parse(data).Status;  
        
        if(myd == "Done")
        {
          this.LoadVehicles();
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

  deletevehicle(ypid)
  {
    $('.smallLoader').show();
    this.myService.deleteDestination("consigneevehicles", "v_id", ypid).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      
      if(myd == "Done")
      {
        this.LoadVehicles();
      }
     
    },err => {      
      console.error(err);    
    });
  }









  SaveAdress()
  {

      this.myService.updateConsigneeAddress(this.productID, this.model.caddress).subscribe((data)=>{          
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

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);

      },err => {      
        console.error(err);    
      }); 

  }

  SaveContact()
  {
    
      this.myService.updateConsigneeContact(this.productID,this.model.tel, this.model.fax, this.model.email).subscribe((data)=>{          
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

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 3000);

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
  }

  senttoport()
  {
    this.router.navigate(['add_ports']);
  }

  senttoclient()
  {
    this.router.navigate(['add_client']);
  }

}


