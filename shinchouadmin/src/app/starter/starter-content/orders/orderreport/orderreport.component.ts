import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

declare var jsPDF: any;

@Component({
  selector: 'app-orderreport',
  templateUrl: './orderreport.component.html',
  styleUrls: ['./orderreport.component.css']
})
export class OrderreportComponent implements OnInit {

  model: any = {};
  public tcompany;
  public ordcount = 0;
  private shipmentsTable: any;
  public purchased;
  public userrole;
  public userauc = ' AND status = 0';
  public ordlists = new Array();
  public orderlists;
  public yards;
  public exportlist;
  public OrderDetail;
  public outputstr;
  productID: string;
  public orders;
  public countcheck = 0;

  constructor(public myService : DatafromServicesService,private route: ActivatedRoute, private router: Router) { 
    this.userrole = window.localStorage.getItem("adm_role");
    this.productID = route.snapshot.params['id'];

    
    this.model.orderno = this.productID;
    document.getElementById("Loader").style.display = "none";
  }

  ngOnInit() {   
    this.route.queryParams.subscribe((params: Params) => {
      this.outputstr = params['out'];
    });

    this.productID = this.route.snapshot.params['id'];
    this.model.orderno = this.productID; 
    
    this.gettcompany();
    this.getYards();   
    this.getOrders();
    this.getOrderlist();

    

    $('#datepicker').datepicker('setDate', new Date());
  }

  getOrders()
  {
    this.myService.getOrders(this.productID).subscribe((data)=>{          
      let myd = JSON.parse(data).Status; 
      this.OrderDetail = myd;  
      this.countcheck++;
      
     },err => {      
       console.error(err);    
     }, () => {
      setTimeout(() => {

      if(this.countcheck >= 4)
      {
        if(this.outputstr == "PDF")
        this.PDFOut();

        else if(this.outputstr == "XLS")
        {
          this.Export('{ filename: "transportorder.csv" }');
        }
      }
        
      });
    }); 
  }

  gettcompany()
  {
    this.myService.getTransportCompany().subscribe((data)=>{          
      this.tcompany = JSON.parse(data).Status;   
      this.countcheck++;
     },err => {      
       console.error(err);    
     }, () => {
      setTimeout(() => {

      if(this.countcheck >= 4)
      {
        if(this.outputstr == "PDF")
        this.PDFOut();

        else if(this.outputstr == "XLS")
        {
          this.Export('{ filename: "transportorder.csv" }');
        }
      }
        
      });
    }); 
  }

  getOrderlist()
  {
    this.myService.getorderlist(this.model.orderno).subscribe((data)=>{          
      this.orderlists = JSON.parse(data).Status;  
      console.log(this.orderlists);
      this.countcheck++;
      
      
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {

      if(this.countcheck >= 4)
      {
        if(this.outputstr == "PDF")
        this.PDFOut();

        else if(this.outputstr == "XLS")
        {
          this.Export('{ filename: "transportorder.csv" }');
        }
      }
        
      });
    });
  }

  getYards()
  {
    this.myService.getYards().subscribe((data)=>{          
      this.yards = JSON.parse(data).Status; 
      this.countcheck++;
     },err => {      
       console.error(err);    
     }, () => {
      setTimeout(() => {

      if(this.countcheck >= 4)
      {
        if(this.outputstr == "PDF")
        this.PDFOut();

        else if(this.outputstr == "XLS")
        {
          this.Export('{ filename: "transportorder.csv" }');
        }
      }
        
      });
    });
  }

  getTelYard(yid,ind)
  {
    if(yid != 0)
    {
      let x = this.yards.filter(function(val){
        return val.y_id == yid;     
      });
      
      document.getElementById("ytel" + ind).innerHTML = x[0].tel;
    }
    else if(yid == 0)
    document.getElementById("ytel" + ind).innerHTML = "N/A"; 
    
  }


  PDFOut()
  {
  
    console.log(this.countcheck);
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
      {title: "Remarks", dataKey: "remarks"}
  ];

  var rows = [];
  
  var self = this;
  let orddet = this.OrderDetail[0];

  let x = self.yards.filter(function(val){
    return val.y_id == orddet.y_id;     
  });

  var yardtel = '';
  var yrd = '';

  if(x.length > 0)
  {
  yardtel= x[0].tel;
  yrd = x[0].name;
  }

  for (var i = 0; i < this.orderlists.length; i++) {

      rows.push({
          sno: i + 1,
          pos: this.orderlists[i].pos,
          adate: this.orderlists[i].adate,
          dai: this.orderlists[i].dai,
          lot: this.orderlists[i].lot,
          auction: this.orderlists[i].auction,
          prefix: this.orderlists[i].serial,
          make: this.orderlists[i].make + " " + this.orderlists[i].model,
          noplate: this.orderlists[i].noplate,
          fudosha: this.orderlists[i].fudosha,
          yard: yrd,
          remarks: this.orderlists[i].remarks,          
      });
  }
  
  // Only pt supported (not mm or in)
  var doc = new jsPDF('landscape', 'pt');
  doc.setFontSize(10);
  doc.autoTable(columns, rows, {
      styles: {fillColor: [255, 255, 255], textColor: [0, 0, 0], fontSize:8, columnWidth: 'wrap', lineWidth: 1},
      margin: {top: 120},
      addPageContent: function(data) {
        doc.setFontSize(20);
        doc.text("Shinchou K.K.", 350, 30);
        doc.setFontSize(10);
        doc.text(200, 60, 'Company: ' + orddet.sname);
        doc.text(200, 80, 'Tel No: ' + orddet.tel);
        doc.text(200, 100, 'Fax No: ' + orddet.fax);
        doc.text(440, 60, 'Representative: ' + orddet.cperson);
        doc.text(440, 80, 'Mobile: ' + orddet.mob);
        doc.text(440, 100, 'Email: ' + orddet.email);
      }
  });
  doc.save('transportorder.pdf');
  }

  Export(args) {
    console.log(this.countcheck);
    var data, filename, link;
    var self = this;

    let x = self.yards.filter(function(val){
      return val.y_id == self.OrderDetail[0].y_id;     
    });
    
    var yardtel = '';
    var yrd = '';

    if(x.length > 0)
    {
    yardtel= x[0].tel;
    yrd = x[0].name;
    }


        let edata = this.orderlists.map(function(obj, index) {
          
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