import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-latestbids',
  templateUrl: './latestbids.component.html',
  styleUrls: ['./latestbids.component.css']
})
export class LatestbidsComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Bids;
  public Auctions;
  public Chassis;
  public Make;
  public Model = new Array();
  public SalesUsers;
  public Clients;
  public SelectedBid;
  public SelectedAuction;
  public SelectedLot;
  public SelectedBidAmount;
  public SelectedProd;
  public SelectedMake;
  public SelectedModel;
  public buyerAuc;
  public userauc = "";
  public salesClient;
  public selectedAuc = new Array();
  public userrole;
  public APIData = new Array();
  public SelectedProddata;
  public getImagelink;
  constructor(public myService : DatafromServicesService) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 

    if(window.localStorage.getItem("adm_role") == "buyer")
    this.LoadBuyerAuctions();

    if(window.localStorage.getItem("adm_role") == "salesuser")
    this.LoadSalesClients();
    
    if(window.localStorage.getItem("adm_role") == "admin")
    {
      this.LoadBids(); 
      this.LoadAPIAuctions();
      this.LoadClients();
      this.LoadSalesUsers(); 
    }


    
    this.LoadAPIChassis();
    this.LoadAPIMake();
    this.LoadAPIModel();
       
    
    $('#datepicker').datepicker({
      autoclose: true
    });

    $('#datepicker1').datepicker({
      autoclose: true
    });
    
  }

  Export(args) {  
    var data, filename, link;

    let edata = this.Bids.map(function(obj, index) {
      return {
        SNo: index + 1,
        user: obj.user_id, 
        auction: obj.auction,
        date: obj.auctiondate,
        lot: obj.lot,
        chassis: obj.chassis,
        make: obj.make,
        model: obj.model,
        year: obj.year,
        bidprice: obj.estprice,        
        bid_text: obj.bidmsg
      }
    });

    var csv = this.convertArrayOfObjectsToCSV({
        data: edata
    });
    if (csv == null) return;

    filename = args.filename || 'purchasedlist.csv';

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

  SelectAucs(event,auc)
  {
    if(event.target.checked)
    {
      this.selectedAuc.push(auc);
    }
    else
    {
      let ind = this.selectedAuc.indexOf(auc);
      this.selectedAuc.splice(ind,1);
    }
    console.log(this.selectedAuc);
  }

  LoadBuyerAuctions()
  {
    this.myService.getBuyerAuction(window.localStorage.getItem("adm_user")).subscribe((data)=>{          
      this.buyerAuc = JSON.parse(data).Status; 

      let i = 0;
      let str = "";
      if(this.buyerAuc.length > 0)
      {
        str += "auction = '" + this.buyerAuc[i].auction + "'";
        for(i = 1; i < this.buyerAuc.length; i++)
        {
          str += " OR auction = '" + this.buyerAuc[i].auction + "'";
        }

        this.userauc = " AND (" + str + ")";
      }
      
      if(this.userauc != "")      
      this.LoadBids();
      else
      {
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
        document.getElementById("example1").parentElement.style.overflow = "scroll";
      }
      
     },err => {      
       console.error(err);    
     }); 
  }

  LoadSalesClients()
  {
    this.myService.getSalesClient(window.localStorage.getItem("adm_user")).subscribe((data)=>{          
      this.salesClient = JSON.parse(data).Status; 

      let i = 0;
      let str = "";
      if(this.salesClient.length > 0)
      {
        str += "user_id = '" + this.salesClient[i].user + "'";
        for(i = 1; i < this.salesClient.length; i++)
        {
          str += " OR user_id = '" + this.salesClient[i].user + "'";
        }

        this.userauc = " AND (" + str + ")";
      }

      if(this.userauc != "")      
      this.LoadBids();
      else
      {
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
        document.getElementById("example1").parentElement.style.overflow = "scroll";
      }
      
     },err => {      
       console.error(err);    
     }); 
  }

  LoadBids()
  {
    this.myService.getBids("latest", window.localStorage.getItem("adm_role"), this.userauc).subscribe((data)=>{          
      this.Bids = JSON.parse(data).Status;   

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

  LoadAPIAuctions()
  {
    this.myService.getAPIAuctions().subscribe((data)=>{          
     this.Auctions = JSON.parse(data);   

    },err => {      
      console.error(err);    
    }); 
  }

  LoadAPIMake()
  {
    this.myService.getAPIMake().subscribe((data)=>{          
     this.Make = JSON.parse(data);   

    },err => {      
      console.error(err);    
    }); 
  }

  LoadAPIModel()
  {
    this.myService.getCountModel().subscribe((data)=>{          
      let cnt = JSON.parse(data);   
      let c = cnt[0].TAG0;
      let v = Math.ceil(parseInt(c) / 250);
      let i = 0;
      for(i = 0; i < v; i++)
      {
        this.LoadModellls(250 * i);       
      }
      this.Model.sort();
     },err => {      
       console.error(err);    
     });     
  }

  LoadModellls(lmt)
  {
    this.myService.getAPIModel(lmt).subscribe((data)=>{          
     let myd = JSON.parse(data);   
     console.log(myd[0].MODEL_NAME);
     let i = 0;
     for(i = 0; i < myd.length; i++)
     {
       this.Model.push(myd[i].MODEL_NAME);
     }

    },err => {      
      console.error(err);    
    });
  }

  LoadAPIChassis()
  {
    this.myService.getAPIChassis().subscribe((data)=>{          
     this.Chassis = JSON.parse(data);   

    },err => {      
      console.error(err);    
    }); 
  }

  LoadSalesUsers()
  {
    this.myService.getBSUsers("salesuser").subscribe((data)=>{          
     this.SalesUsers = JSON.parse(data).Status;   

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
    }); 
  }

  getProductData(pid)
  {
    let myd = this.Bids.filter(function(val){
      return val.prodid == pid;     
    });

    this.SelectedProddata = myd[0]; 
    console.log(this.SelectedProddata.start);
    let imgx = this.SelectedProddata.images.substr(0,this.SelectedProddata.images.length - 1);
    let imgy = imgx.split("#");
    this.getImagelink = imgy;    
  }

  SelectBid(bidid)
  {
    this.SelectedBid = bidid;
  }

  SelectBidData(prodid, bidid)
  {
    this.SelectBid(bidid);
    let maindata;
    let statdata;

    this.myService.getDataMain(prodid).subscribe((data)=>{          
      maindata = JSON.parse(data).Status;   
        
      this.APIData = maindata;       
     },err => {      
       console.error(err);    
     });
     
     let x = this.Bids.filter(function(val){
      return val.b_id == bidid;     
    });

    this.SelectedMake = x[0].make;
    this.SelectedModel = x[0].model;
    this.SelectedAuction = x[0].auction;
    this.SelectedLot = x[0].lot;
    this.SelectedBidAmount = x[0].estprice;
    this.SelectedProd = prodid;
     
  }

  BidWin(prodid, bidid)
  {
    if(this.model.pamount != undefined)
    {
    let y = this.Bids.filter(function(val){
      return val.b_id == bidid;     
    });

          let x = this.APIData;
          this.myService.addPurchase(x["id"], y[0].user_id, x["auction"], x["auction_date"], x["lot"], x["chassis"], x["serial"], x["make"], x["model"], x["year"], this.model.pamount.replace(/,/gi,''), x["transmission"], x["enginecc"], x["mileage"], x["color"],window.localStorage.getItem("adm_user"), this.model.cmment, y[0].landedvalue).subscribe((data)=>{          
            let myd = JSON.parse(data); 
           
              if(myd.Status == "Done")
              {                   
                document.getElementById("dan_msg").style.display = "none";      
                document.getElementById("suc_msg").style.display = "block";
                document.getElementById("msgsuccess").innerHTML = "Saved!";
                this.UpdateStatus(bidid,3);
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

        this.model.pamount = undefined;
        this.model.cmment = undefined;

      }
  }

  BidSold(prodid, bidid)
  {
    if(this.model.samount != undefined)
    {
    let y = this.Bids.filter(function(val){
      return val.b_id == bidid;     
    });

          this.myService.addSold(prodid, y[0].user_id, this.model.samount.replace(/,/gi,''),window.localStorage.getItem("adm_user"), this.model.cmment).subscribe((data)=>{          
            let myd = JSON.parse(data); 
           
              if(myd.Status == "Done")
              {                   
                document.getElementById("dan_msg").style.display = "none";      
                document.getElementById("suc_msg").style.display = "block";
                document.getElementById("msgsuccess").innerHTML = "Saved!";
                this.UpdateStatus(bidid,4);
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

        this.model.samount = undefined;
        this.model.cmment = undefined;

    }
  }

  UpdateStatus(bidid, stat)
  {
    document.getElementById("dan_msg").style.display = "none";      
    document.getElementById("suc_msg").style.display = "none";

    this.myService.updateStatusBid(bidid, stat).subscribe((data)=>{          
      let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.LoadBids();

          this.shipmentsTable = $("#example1");
          this.shipmentsTable.DataTable();
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


  SaveForm()
  { 
    let auc, ss, cs;
    let x = document.getElementById("makeselect");
    let mk = (<HTMLInputElement>x).value;

    x = document.getElementById("modelselect");
    let md = (<HTMLInputElement>x).value;

    if(this.userrole == 'admin')
    {
    x = document.getElementById("auctionselect");
    auc = (<HTMLInputElement>x).value;

    x = document.getElementById("salesselect");
    ss = (<HTMLInputElement>x).value;

    x = document.getElementById("clientselect");
    cs = (<HTMLInputElement>x).value;
    }
    else if(this.userrole == 'salesuser')
    {
      x = document.getElementById("clientSselect");
      cs = (<HTMLInputElement>x).value;
    }

    x = document.getElementById("chassisselect");
    let ch = (<HTMLInputElement>x).value;   

      let i = 0;
      let str = "";
      let fstr = "";

      if(this.selectedAuc.length > 0)
      {
      str += "auction = '" + this.selectedAuc[i] + "'";
      for(i = 1; i < this.selectedAuc.length; i++)
      {
        str += " OR auction = '" + this.selectedAuc[i] + "'";
      }

      fstr = " AND (" + str + ")";
      }
      else
      {
        fstr = this.userauc;
      }

      if(this.userrole == "buyer" && fstr == "")
      fstr = " AND auction = 'Vdyhm54'";
      else if(this.userrole == "salesuser" && fstr == "")
      fstr = " AND user_id = 'asdajn23/nw9/tasdkc'";      

      console.log(fstr);
    let fr = (<HTMLInputElement>document.getElementById("datepicker")).value;
    let tr = (<HTMLInputElement>document.getElementById("datepicker1")).value;

       let frdate = "";
       let trdate = "";
     
      if(fr != "")
      {
      let fdate = new Date(fr.toString());

      frdate = fdate.getFullYear() + "-";

      if((fdate.getMonth() + 1) < 10)
      frdate += "0" + (fdate.getMonth() + 1) + "-";
      else
      frdate += (fdate.getMonth() + 1) + "-";

      if(fdate.getDate() < 10)
      frdate += "0" + fdate.getDate();
      else
      frdate += fdate.getDate();
      }
 
      if(tr == "")
      {
        tr = new Date().toDateString();
      }
          
      let tdate = new Date(tr.toString());

      trdate = tdate.getFullYear() + "-";

      if((tdate.getMonth() + 1) < 10)
      trdate += "0" + (tdate.getMonth() + 1) + "-";
      else
      trdate += (tdate.getMonth() + 1) + "-";

      if(tdate.getDate() < 10)
      trdate += "0" + tdate.getDate();
      else
      trdate += tdate.getDate();
    
    this.myService.searchBids(this.model.lot, mk, md, auc, ch, ss, cs, frdate, trdate, "latest", fstr, this.userrole).subscribe((data)=>{          
    
      let myd = JSON.parse(data).Status; 

        this.Bids = myd;

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.lot = undefined;

    let x = document.getElementById("makeselect");
    (<HTMLInputElement>x).value = "";

    x = document.getElementById("modelselect");
    (<HTMLInputElement>x).value = "";

    if(this.userrole == 'admin')
    {
    x = document.getElementById("auctionselect");
    (<HTMLInputElement>x).value = "";

    x = document.getElementById("salesselect");
    (<HTMLInputElement>x).value = "";

    x = document.getElementById("clientselect");
    (<HTMLInputElement>x).value = "";
    }
    else if(this.userrole == 'salesuser')
    {
      x = document.getElementById("clientSselect");
      (<HTMLInputElement>x).value = "";
    }

    x = document.getElementById("chassisselect");
    (<HTMLInputElement>x).value = "";

    (<HTMLInputElement>document.getElementById("datepicker")).value = "";
    (<HTMLInputElement>document.getElementById("datepicker1")).value = "";

    $("input[type='checkbox']").prop("checked", false);

    this.selectedAuc = new Array();

    //if(this.userauc != "")      
    this.LoadBids();
   // else
   // {
   //   this.shipmentsTable = $("#example1");
   //   this.shipmentsTable.DataTable();
   //   document.getElementById("example1").parentElement.style.overflow = "scroll";
   // }
  }

  FormatCurr(amount)
  {
    if(amount != undefined)
    {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
    }
    else
    return "";
  }

  FormatAmount(event)
  {
    let x = event.target.value;
    event.target.value = Number(x.replace(/,/gi,'')).toLocaleString();
  }
}
