import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import { identifierModuleUrl } from '../../../../../../node_modules/@angular/compiler';
declare var jsPDF: any;

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  model: any = {};
  public tcompany;
  public ordcount = 0;
  private shipmentsTable: any;
  private shipmentsTable1: any;
  public purchased;
  public userrole;
  public userauc = ' AND status = 0';
  public ordlists = new Array();
  public orderlists;
  public yards;
  public exportlist;
  public OrderDetail;
  public selectedTransporter = new Array();
  public selectedDropoff = new Array();
  public VehicleList;

  productID: string;
  public orders;
  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) { 
    this.userrole = window.localStorage.getItem("adm_role");
    this.productID = route.snapshot.params['id'];

    this.model.orderno = this.productID;
  }

  ngOnInit() {   
    this.productID = this.route.snapshot.params['id'];
    this.model.orderno = this.productID; 
    this.getYards();
    this.gettcompany();
       
    
    this.getOrderlist();

    $('#datepicker').datepicker('setDate', new Date());
    $('#datepicker1').datepicker('setDate', new Date());
    $('#datepicker2').datepicker('setDate', new Date());
  }

  SaveOrder()
  {
      let orderdate = (<HTMLInputElement>document.getElementById("datepicker")).value;
      let pickupdate = (<HTMLInputElement>document.getElementById("datepicker2")).value;
      let dropoffdate = (<HTMLInputElement>document.getElementById("datepicker1")).value;
      let tcompid = (<HTMLSelectElement>document.getElementById("tcomp")).value;   
      let ycompid = (<HTMLSelectElement>document.getElementById("ycomp")).value; 
      let ostatus = (<HTMLSelectElement>document.getElementById("ostatus")).value; 

      if(ostatus != '1')
      {      
        this.myService.updateOrderDetail(this.productID, orderdate, dropoffdate, tcompid, ycompid, ostatus, pickupdate).subscribe((data)=>{          
        
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
          let ch = $('.checksupdate:checkbox:checked');

          if(ch.length == 4)
          {
            this.myService.updateOrderDetail(this.productID, orderdate, dropoffdate, tcompid, ycompid, ostatus, pickupdate).subscribe((data)=>{          
        
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
            alert("All Checkboxes should be Checked first to Complete the Order!");
          }
      }

      
     
  }

  getOrders()
  {
    this.myService.getOrders(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status; 
      this.OrderDetail = myd;  
      (<HTMLInputElement>document.getElementById("datepicker")).value = myd[0].orderdate;
      (<HTMLInputElement>document.getElementById("datepicker1")).value = myd[0].dropoffdate;
      (<HTMLInputElement>document.getElementById("datepicker2")).value = myd[0].pickupdate;
      (<HTMLSelectElement>document.getElementById("tcomp")).value = myd[0].s_id;   
      (<HTMLSelectElement>document.getElementById("ycomp")).value = myd[0].y_id; 
      (<HTMLSelectElement>document.getElementById("ostatus")).value = myd[0].status;  

      if(myd[0].btnselect == 0)
      {
        document.getElementById("ordlist").style.display = "inline-block";
      }
      else if(myd[0].btnselect == 1)
      {
        document.getElementById("ordlist1").style.display = "inline-block";
      }
      
      if(myd[0].s_id != 0)
      {
        let x = this.tcompany.filter(function(val){
          return val.s_id == myd[0].s_id;     
        }); 
        
        this.selectedTransporter = x[0];
      }

      if(myd[0].y_id != 0)
      {
        let x = this.yards.filter(function(val){
          return val.y_id == myd[0].y_id;     
        }); 
        
        this.selectedDropoff = x[0];
      }

     },err => {      
       console.error(err);    
     }); 
  }

  SelectTransport(event)
  {
    let tc = (<HTMLSelectElement>document.getElementById(event.target.id)).value;
    if(tc != "0")
    {
      let x = this.tcompany.filter(function(val){
        return val.s_id == tc;     
      }); 
      
      this.selectedTransporter = x[0];
    }   
    else 
    this.selectedTransporter = new Array();
  }

  SelectYard(event)
  {
    
    let tc = (<HTMLSelectElement>document.getElementById(event.target.id)).value;
    if(tc != "0")
    {
      let x = this.yards.filter(function(val){
        return val.y_id == tc;     
      });  
      
      this.selectedDropoff = x[0];

     }else
     {
       this.selectedDropoff = new Array();
     }
  }

  gettcompany()
  {
    this.myService.getTransportCompany().subscribe((data)=>{          
      this.tcompany = JSON.parse(data).Status;   
 
     },err => {      
       console.error(err);    
     }, () => {
      setTimeout(() => {

        this.getYards();
        
      });
    });
  }

  getYards()
  {
    this.myService.getYards().subscribe((data)=>{          
      let myd = JSON.parse(data).Status;

      let x = myd.filter(function(val){
        return val.status == 1;     
      });  
      
      this.yards = x;
     
 
     },err => {      
       console.error(err);    
     }, () => {
      setTimeout(() => {

        this.getOrders();
        
      });
    }); 
  }

  SelectList(event, pid)
  {
    if(event.target.checked)
    {
      this.ordlists.push(pid);
    }
    else
    {
      let index = this.ordlists.indexOf(pid);
      if (index > -1) {
        this.ordlists.splice(index, 1);
      }
    }
  }

  AddOrder(btnselect)
  {
    if(this.ordlists.length > 0)
    {
      document.getElementById("dan_msg").style.display = "none";      
      document.getElementById("suc_msg").style.display = "none";

      let i = 0;
      let str = "";
      for(i = 0; i < this.ordlists.length; i++)
      {
        str += this.ordlists[i] + "|";
      }

      this.myService.addorder(this.model.orderno,str,(<HTMLInputElement>document.getElementById("datepicker")).value,(<HTMLInputElement>document.getElementById("datepicker2")).value,btnselect).subscribe((data)=>{          
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
      }, () => {
        setTimeout(() => {
          this.getOrderlist();
          this.shipmentsTable = $("#example2");
          this.shipmentsTable.DataTable();
          document.getElementById("example2").parentElement.style.overflow = "scroll";
        });
      }); 
    }
    else
    {
      document.getElementById("dan_msg").style.display = "block";      
      document.getElementById("suc_msg").style.display = "none";
      document.getElementById("msgalert").innerHTML = "No Orders Selected!";
    }

    this.ordlists = new Array();
  }

  LoadVehicles()
  {
    this.myService.getYardVehicles3().subscribe((data)=>{          
     this.VehicleList = JSON.parse(data).Status;   
      console.log(this.VehicleList);
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable1 = $("#example3");
        this.shipmentsTable1.DataTable();
        document.getElementById("example3").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  LoadPurchased()
  {
    this.myService.getPurchased(this.userrole, this.userauc).subscribe((data)=>{          
        this.purchased = JSON.parse(data).Status;   
     
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

  SearchPurchased()
  { 
    let x = document.getElementById("orderstatus");
    let y = (<HTMLInputElement>x).value;

    if(y == '0')
    this.userauc = " AND status = 0";
    else
    this.userauc = " AND status = 1";
    
    this.myService.searchPurchased(this.userrole, this.userauc, "", this.model.client, this.model.dst, this.model.auction, this.model.adate, this.model.pos, this.model.dai, this.model.lot, this.model.prefix, "", this.model.make, this.model.model, "", "", "", "", this.model.noplate, "", this.model.shaken, this.model.fudosha, "", "", "", "", "", "", "", "", "", "").subscribe((data)=>{          
        let myd = JSON.parse(data).Status; 

        this.purchased = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  SearchOrderList()
  {     
    this.myService.searchOrder(this.model.orderno,this.model.oclient, this.model.odst, this.model.oauction, this.model.oadate, this.model.opos, this.model.odai, this.model.olot, this.model.oprefix, this.model.omake, this.model.omodel, this.model.onoplate, this.model.ofudosha,'','').subscribe((data)=>{          
      console.log(data);  
      let myd = JSON.parse(data).Status; 

        this.orderlists = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  getOrderlist()
  {
    this.myService.getorderlist(this.model.orderno).subscribe((data)=>{          
      this.orderlists = JSON.parse(data).Status;  
      
      if(this.orderlists.length > 0)
      document.getElementById("orderLists").style.display = "block";
      else
      document.getElementById("orderLists").style.display = "none";
      
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example2");
        this.shipmentsTable.DataTable();
        document.getElementById("example2").parentElement.style.overflow = "scroll";
      });
    }); 
  }

  ResetForm()
  {
    this.model.client = undefined;
    this.model.dst = undefined;
    this.model.auction = undefined;
    this.model.adate = undefined;
    this.model.pos = undefined;
    this.model.dai = undefined;
    this.model.lot = undefined;
    this.model.prefix = undefined;    
    this.model.make = undefined;
    this.model.model = undefined;    
    this.model.noplate = undefined;
    this.model.shaken = undefined;
    this.model.fudosha = undefined;
    let x = document.getElementById("orderstatus");
    (<HTMLInputElement>x).value = "0";

    this.SearchPurchased();
  }

  ResetOrderForm()
  {
    this.model.oclient = undefined;
    this.model.odst = undefined;
    this.model.oauction = undefined;
    this.model.oadate = undefined;
    this.model.opos = undefined;
    this.model.odai = undefined;
    this.model.olot = undefined;
    this.model.oprefix = undefined;    
    this.model.omake = undefined;
    this.model.omodel = undefined;    
    this.model.onoplate = undefined;
    this.model.ofudosha = undefined;

    this.SearchOrderList();
  }

  DeleteList(oid, sid)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";
    
    this.myService.deleteorder(oid, sid).subscribe((data)=>{          
      let myd = JSON.parse(data);
      
      if(myd.Status == "Done")
      {                   
        document.getElementById("dan_msg").style.display = "none";      
        document.getElementById("suc_msg").style.display = "block";
        document.getElementById("msgsuccess").innerHTML = "Saved!";
        this.getOrderlist();
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

  editable(event)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "none";
    c[1].style.display = "block";
    c[1].focus();
  }

  editremove(event, cat, sid)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "block";
    c[1].style.display = "none";
    c[0].innerText = c[1].value;

    this.myService.updateMainorder(cat,c[1].value, sid).subscribe((data)=>{          
      let myd = JSON.parse(data); 

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

  editselectremove(event, cat, sid)
  {
    let c = event.target.parentElement.children;
    c[0].style.display = "block";
    c[1].style.display = "none";
    c[0].innerText = c[1].value;

    this.myService.updatePurchased(cat,c[1].value, sid).subscribe((data)=>{          
      let myd = JSON.parse(data); 

      console.log(myd);
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example2");
        this.shipmentsTable.DataTable();
        document.getElementById("example2").parentElement.style.overflow = "scroll";
      });
    }); 

  }

  UpdateChecks(event, field, oid)
  {
    let ch = '0';

    if(event.target.checked)
    {
      ch = '1';
    }
    else
    {
      ch = '0';
    }

    this.myService.updateChecks(field, ch, oid).subscribe((data)=>{          
      let myd = JSON.parse(data); 

      console.log(myd);
    },err => {      
      console.error(err);    
    });
  }

  NewOrder()
  {
    this.router.navigate(["neworder"]);
  }

  SendOrderEmail()
  {
    if(this.model.orderemail != null && this.model.orderemail != undefined && this.model.orderemail != "")
    {
    this.myService.sentOrderId(this.productID, this.model.orderemail, this.model.emailremarks).subscribe((data)=>{          
      let myd = JSON.parse(data);
      
      if(myd.Status == "Done")
      {                   
        document.getElementById("dan_msg").style.display = "none";      
        document.getElementById("suc_msg").style.display = "block";
        document.getElementById("msgsuccess").innerHTML = "Email sent successfully!";
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
        document.getElementById("msgalert").innerHTML = "Email cannot be empty!";
    }
  }

  PDFOut()
  {
    var columns = [
      {title: "S No.", dataKey: "sno"},
      {title: "POS", dataKey: "pos"}, 
      {title: "Auction Date", dataKey: "adate"},
      {title: "DAI", dataKey: "dai"},
      {title: "LOT", dataKey: "lot"},
      {title: "Auction Name", dataKey: "auction"},
      {title: "Chassis No", dataKey: "prefix"},
      {title: "Car Name", dataKey: "make"},
      {title: "No Plate", dataKey: "noplate"},
      {title: "Fudosha", dataKey: "fudosha"},
      {title: "Yard Name", dataKey: "yard"},
      {title: "Yard Tel", dataKey: "tel"},
      {title: "Remarks", dataKey: "remarks"}
  ];

  var rows = [];
  
  var self = this;
  let orddet = this.OrderDetail[0];

  for (var i = 0; i < this.orderlists.length; i++) {

    let x = self.yards.filter(function(val){
      return val.y_id == self.orderlists[i].y_id;     
    });

    var yardtel = x[0].tel;
    var yrd = x[0].name;


      rows.push({
          sno: i + 1,
          pos: this.orderlists[i].pos,
          adate: this.orderlists[i].adate,
          dai: this.orderlists[i].dai,
          lot: this.orderlists[i].lot,
          auction: this.orderlists[i].auction,
          prefix: this.orderlists[i].prefix,
          make: this.orderlists[i].make + " " + this.orderlists[i].model,
          noplate: this.orderlists[i].noplate,
          fudosha: this.orderlists[i].fudosha,
          yard: yrd,
          tel: yardtel,
          remarks: this.orderlists[i].remarks,          
      });
  }
  
  // Only pt supported (not mm or in)
  var doc = new jsPDF('landscape', 'pt');
  doc.setFontSize(10);
  doc.autoTable(columns, rows, {
      styles: {fillColor: [100, 255, 255], fontSize:8, columnWidth: 'wrap'},
      columnStyles: {
        id: {fillColor: 255}
      },
      margin: {top: 120},
      addPageContent: function(data) {
        doc.setFontSize(20);
        doc.text("Transport Order", 40, 30);
        doc.setFontSize(10);
        doc.text(40, 60, 'Company: ' + orddet.sname);
        doc.text(40, 80, 'Tel No: ' + orddet.tel);
        doc.text(40, 100, 'Fax No: ' + orddet.fax);
        doc.text(300, 60, 'Representative: ' + orddet.cperson);
        doc.text(300, 80, 'Mobile: ' + orddet.mob);
        doc.text(300, 100, 'Email: ' + orddet.email);
      }
  });
  doc.save('transportorder.pdf');
  }

  Export(args) {  
    var data, filename, link;
    var self = this;
        let edata = this.orderlists.map(function(obj, index) {

          let x = self.yards.filter(function(val){
            return val.y_id == obj.y_id;     
          });

          var yardtel = x[0].tel;
          var yrd = x[0].name;

          return {
            SNo: index + 1,
            pos: obj.pos,
            dai: obj.dai,
            lot: obj.lot,
            adate: obj.adate,
            auction: obj.auction,
            chassis: obj.prefix,
            carname: obj.make + " " + obj.model,
            fudosha: obj.fudosha,
            noplate: obj.noplate,
            client: obj.client, 
            dst: obj.dst,          
            yard: yrd,
            yardtelephone: yardtel,
            nocut: obj.nocut,
            remark: obj.remarks            
          }
        });


        this.exportlist = edata;


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
