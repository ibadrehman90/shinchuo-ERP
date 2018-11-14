import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../datafrom-services.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public purchased;
  public userrole;
  public userauc = '';
  public buyerAuc;
  public salesClient;
  public emaillist = new Array();
  public datalist = new Array();
  public selectedSoldid;
  public exportlist;
  constructor(public myService : DatafromServicesService) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 
    
    if(window.localStorage.getItem("adm_role") == "buyer")
    this.LoadBuyerAuctions();
    
    if(window.localStorage.getItem("adm_role") == "admin")
    {
    this.LoadPurchased();  
    }   

    if(window.localStorage.getItem("adm_role") == "salesuser")
    this.LoadSalesClients();
    
  }

  Export(args) {  
    var data, filename, link;

    if(this.userrole == 'salesuser')
      {
        let edata = this.purchased.map(function(obj, index) {
          return {
            SNo: index + 1,
            client: obj.client, 
            auction: obj.auction,
            date: obj.adate,
            lot: obj.lot,
            prefix: obj.prefix,
            make: obj.make,
            model: obj.model,
            year: obj.year,
            bidprice: obj.bidprice,
            cc: obj.enginecc,
            mileage: obj.mileage,
            color: obj.color,
            remark: obj.remark,
            landedvalue: obj.landedvalue
          }
        });

        this.exportlist = edata;
      }


    var csv = this.convertArrayOfObjectsToCSV({
        data: this.exportlist
    });
    if (csv == null) return;

    filename = args.filename || 'stocklist.csv';

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
      this.LoadPurchased();
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
      console.log(this.salesClient);
      let i = 0;
      let j = 0;
      let str = "";
      if(this.salesClient.length > 0)
      {
        for(i = 0; i < this.salesClient.length; i++)
        {
          if(this.salesClient[i].user == window.localStorage.getItem("adm_user"))
          {
            if(j == 0)
            {
              str += "client = '" + this.salesClient[i].user + "'";
            }
            else
            str += " OR client = '" + this.salesClient[i].user + "'";

            j++;
          }
        }

        this.userauc = " AND (" + str + ")";
      }

      if(this.userauc != "")      
      this.LoadPurchased();
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

  LoadPurchased()
  {
    this.myService.getPurchased(this.userrole, this.userauc).subscribe((data)=>{          
      let x = JSON.parse(data).Status;   

      this.purchased = x.filter(function(val){
        return val.stocksold == 0;     
      });
     
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

  SaveForm()
  { 
    
    this.myService.searchPurchased(this.userrole, this.userauc, this.model.scode, this.model.client, this.model.dst, this.model.auction, this.model.adate, this.model.pos, this.model.dai, this.model.lot, this.model.prefix, this.model.serial, this.model.make, this.model.model, this.model.year, this.model.bidprice, this.model.aucfee, this.model.exportcharge, this.model.noplate, this.model.plateserial, this.model.shaken, this.model.fudosha, this.model.transmission, this.model.enginecc, this.model.mileage, this.model.color, this.model.colorcode, this.model.buyingcom, this.model.buyer, this.model.remark, this.model.landedvalue, this.model.soldprice).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;   

      this.purchased = myd.filter(function(val){
        return val.stocksold == 0;     
      });

        console.log(myd);
      },err => {      
        console.error(err);    
      });  
 
  }

  ResetForm()
  {
    this.model.scode = undefined;
    this.model.client = undefined;
    this.model.dst = undefined;
    this.model.auction = undefined;
    this.model.adate = undefined;
    this.model.pos = undefined;
    this.model.dai = undefined;
    this.model.lot = undefined;
    this.model.prefix = undefined;
    this.model.serial = undefined;
    this.model.make = undefined;
    this.model.model = undefined;
    this.model.year = undefined;
    this.model.bidprice = undefined;
    this.model.aucfee = undefined;
    this.model.exportcharge = undefined;
    this.model.noplate = undefined;
    this.model.plateserial = undefined;
    this.model.shaken = undefined;
    this.model.fudosha = undefined;
    this.model.transmission = undefined;
    this.model.enginecc = undefined;
    this.model.mileage = undefined;
    this.model.color = undefined;
    this.model.colorcode = undefined;
    this.model.buyingcom = undefined;
    this.model.buyer = undefined;
    this.model.remark = undefined;
    this.model.landedvalue = undefined;
    this.model.soldprice = undefined;

    //let x = document.getElementById("statselect");
    //(<HTMLInputElement>x).value = "All";

    this.SaveForm();
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
    let c;
    let val = "";
    if(cat != 'showsellprice')
    {
      let c = event.target.parentElement.children;
      c[0].style.display = "block";
      c[1].style.display = "none";
      c[0].innerText = c[1].value;

      if(cat == 'sellingprice')
      {
        c[0].innerText = "$ " + this.FormatCurr(c[1].value);
      }
      val = c[1].value.replace(/,/gi,'');
    }
    else
    {
      let c = event.target;
      if(c.checked == true)
      val = '1';
      else
      val = '0';
    }
console.log(val);
    this.myService.updatePurchased(cat,val, sid).subscribe((data)=>{          
      let myd = JSON.parse(data); 
      
      /*if(myd.Status == "Done")
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

        setTimeout(function() {
          document.getElementById("dan_msg").style.display = "none";
          document.getElementById("suc_msg").style.display = "none";        
        }, 2000);*/

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

  getCombineImages(images, newsheet)
  {
    let res;
    let oldurl = this.getImagelink(images, -1);
    res = oldurl;     

    if(newsheet != null &&  newsheet != undefined && newsheet != "" && newsheet != "null")
    {
      let newsheeturl = this.getImagelink(newsheet, -1);
      res = res.concat(newsheeturl);  
    }
    
    return res;
  }


  getAllImages(images, newimages)
  {
    let oldurl = this.getImagelink(images, -1);
    if(newimages != null &&  newimages != undefined && newimages != "" && newimages != "null")
    {
    let newurl = this.getImagelink(newimages, -1);
    return oldurl.concat(newurl);
    }    
    else return oldurl;
  }

  getImagelink(imglinks,ind)
  {    
    if(imglinks != null)
    {
    var imgx = imglinks.substr(0,imglinks.length - 1);
    var imgy = imgx.split("#");
    if(ind == -1)
    {
      return imgy;
    }
    else
    return imgy[ind];     
    }
    else
    return "";
  }

  getlabel(ind)
  {
    return "image-" + ind;
  }

  SelectPurchasedData(sid)
  {
    this.selectedSoldid = sid;
  }

  SoldStock()
  {
    var dte = new Date();
    let x = (<HTMLSelectElement>document.getElementById("soldclient")).value;

    if(x != "" && (this.model.samount != undefined || this.model.samount != ""))
    {
      this.myService.soldstock(this.selectedSoldid, this.model.samount, this.model.cmment,x, dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data); 
        console.log(myd);
        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Stock Sold Successfully!";    
          this.LoadPurchased();     
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
      document.getElementById("msgalert").innerHTML = "Fields can't be Left Empty!";
    }
  }

  SendEmailClient()
  {

    let myd = new Array();
    let i = 0, j = 0;
    let str = "";
    for(i = 0; i < this.datalist.length; i++)
    {
      str += '{';
      str += '"prodid":' + (<HTMLInputElement>document.getElementById('purc' + i)).innerHTML;
      str += ', "pnz":"' + (<HTMLInputElement>document.getElementById('pnz' + i)).value;
      str += '", "yremark":"' + (<HTMLInputElement>document.getElementById('yremark' + i)).value;
      /*str += ', "lotsw":' + (<HTMLInputElement>document.getElementById('lotsw' + i)).checked;
      str += ', "auctionsw":' + (<HTMLInputElement>document.getElementById('auctionsw' + i)).checked;
      str += ', "aucdatesw":' + (<HTMLInputElement>document.getElementById('aucdatesw' + i)).checked;
      str += ', "colorsw":' + (<HTMLInputElement>document.getElementById('colorsw' + i)).checked;
      str += ', "mileagesw":' + (<HTMLInputElement>document.getElementById('mileagesw' + i)).checked;
      str += ', "pricesw":' + (<HTMLInputElement>document.getElementById('pricesw' + i)).checked;
      str += ', "transsw":' + (<HTMLInputElement>document.getElementById('transsw' + i)).checked;
      str += ', "ccsw":' + (<HTMLInputElement>document.getElementById('ccsw' + i)).checked;
      str += ', "chassissw":' + (<HTMLInputElement>document.getElementById('chassissw' + i)).checked;
      */
      let x = document.getElementById("imgcbox" + i);
      let y = x.getElementsByClassName("imgbox");
      let z = '';
      for(j = 0; j < y.length; j++)
      {
        if((<HTMLInputElement>document.getElementById('img' + i + '-' + j)).checked)
        {
          z += (<HTMLImageElement>document.getElementById('imgsrc' + i + '-' + j)).src + "#";
        }
      }
      
      str += '", "imges":"' +  z + '"';
      str += '},';
    }
    console.log(str);
    
    this.myService.sendEmail(str,this.model.emailfield).subscribe((data)=>{          
      console.log(data);
      let myd = JSON.parse(data); 
      
      if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Email Sent!"; 
          $("input:checkbox[class=checkmarkS]").each(function () {
            $(this).prop('checked', false);
          });

          this.datalist = new Array();
          this.emaillist = new Array();
                  
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
        }, 2000);
    
    },err => {      
      console.error(err);    
    }); 
  }

  SelectList(event, pid)
  {
    if(event.target.checked)
    {
      let x = this.purchased.filter(function(val){
        return val.s_id == pid;     
      });

      this.datalist.push(x);
      this.emaillist.push(pid);
    }
    else
    {
      let index = this.emaillist.indexOf(pid);
      if (index > -1) {
        this.datalist.splice(index,1);
        this.emaillist.splice(index, 1);
      }
    }    
  }

  FormatCurr(amount)
  {
    if(amount != 'N/A' && amount != null)
    {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
    }
    return amount;
  }

  FormatAmount(event)
  {
    let x = event.target.value;
    event.target.value = Number(x.replace(/,/gi,'')).toLocaleString();
  }
}

