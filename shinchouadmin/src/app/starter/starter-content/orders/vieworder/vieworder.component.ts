import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
declare var jsPDF: any;

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Orders;
  public exportlist;
  public transporters;
  public auctions;
  public yards;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.UpdatePickup_CurrentLoc();
    this.LoadOrders();  
    this.LoadTransport();
    this.LoadAuction();
    this.LoadYard();  
    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date()); 
    
  }

  UpdatePickup_CurrentLoc()
  {
    this.myService.UpdateCurrLoc_Pickup().subscribe((data)=>{          
     let myd = JSON.parse(data).Status;   
     
    },err => {      
      console.error(err);    
    }); 
  }

  LoadOrders()
  {
    this.myService.getOrderTransport().subscribe((data)=>{          
     this.Orders = JSON.parse(data).Status;   

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

  UpdateOrders(ind)
  {
    this.router.navigate(["edit_order/" + ind]);
  }

  LoadTransport()
  {
    this.myService.getTransportCompany().subscribe((data)=>{          
      this.transporters = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     });
  }

  LoadAuction()
  {
    this.myService.getAuctions().subscribe((data)=>{          
      this.auctions = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     });
  }

  LoadYard()
  {
    this.myService.getYards().subscribe((data)=>{          
      this.yards = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     });
  }

  SearchOrder()
  {
    let ofrom = (<HTMLInputElement>document.getElementById("datepicker")).value;
    let oto = (<HTMLInputElement>document.getElementById("datepicker1")).value;
    let trans = (<HTMLInputElement>document.getElementById("trans")).value;
    let pick = (<HTMLInputElement>document.getElementById("pick")).value;
    let drop = (<HTMLInputElement>document.getElementById("drop")).value;

    this.myService.searchmainOrder(this.model.orderno,ofrom, oto, trans, pick, drop).subscribe((data)=>{          
      this.Orders = JSON.parse(data).Status; 


    },err => {      
      console.error(err);    
    });  
  }

  ResetForm()
  {
    this.model.orderno = "";
    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date()); 
    (<HTMLInputElement>document.getElementById("trans")).value = "";
    (<HTMLInputElement>document.getElementById("pick")).value = "";
    (<HTMLInputElement>document.getElementById("drop")).value = "";

    this.LoadOrders();
  }

  neworder()
  {
    this.router.navigate(["neworder"]);
  }

  pastorder()
  {
    this.router.navigate(["pastorders_list"]);
  }

  editable(event)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "none";
    c[1].style.display = "block";
    c[1].focus();
  }

  editselectremove(event, cat, sid)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "block";
    c[1].style.display = "none";
    
    if(c[1].value == 1)
    c[0].innerText = "Completed";
    else
    c[0].innerText = "Pending";

    this.myService.updateMainorder(cat,c[1].value, sid).subscribe((data)=>{          
      let myd = JSON.parse(data); 

      this.updatecurrloc(sid);

      console.log(myd);
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

  updatecurrloc(sid)
  {
    this.myService.updatecurrentlocation(sid).subscribe((data)=>{          
      let myd = JSON.parse(data).Status; 
      
    },err => {      
      console.error(err);    
    });
  }

  /*-----*/

  PDFOut(ordno)
  {
 
  /*// Only pt supported (not mm or in)
  var doc = new jsPDF('landscape', 'pt');
  doc.save('transportorder.pdf');*/
  }

  Export(args) {  
    var data, filename, link;
    
    this.exportlist = [{
            SNo: '',
            pos: '',
            dai: '',
            lot: '',
            adate: '',
            auction: '',
            chassis: '',
            carname: '',
            fudosha: '',
            noplate: '',
            client: '', 
            dst: '',          
            yard: '',
            yardtelephone: '',
            nocut: '',
            remark: ''
    }];


    var csv = this.convertArrayOfObjectsToCSV({
        data: this.exportlist
    });
    if (csv == null) return;

    filename = args.filename || 'transportorder.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }

  convertArrayOfObjectsToCSV(args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
  }

}
