import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../datafrom-services.service';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { SortablejsOptions } from 'angular-sortablejs';
import { HostListener } from '@angular/core';
import { ThrowStmt } from '../../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-purchasedlist',
  templateUrl: './purchasedlist.component.html',
  styleUrls: ['./purchasedlist.component.css']
})
export class PurchasedlistComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public purchased;
  public userrole;
  public userauc = '';
  public buyerAuc;
  public salesClient;
  public emaillist = new Array();
  public datalist = new Array();
  public exportlist;
  public selectedImages;
  public cImages;
  public NewImages = "";
  public selectedProd;
  public selectCriteria = 0;
  public poscompany;
  public SelectedSerial;
  public testDataTable;
  public normalOptions: SortablejsOptions = {
    onUpdate: (event: any) => {
      this.workGo();
    }
  };

  constructor(public myService : DatafromServicesService, public http: Http) {
    this.userrole = window.localStorage.getItem("adm_role");
   }

  ngOnInit() { 

    $('#adate').datepicker();

    if(window.localStorage.getItem("adm_role") == "buyer")
    this.LoadBuyerAuctions();
    
    if(window.localStorage.getItem("adm_role") == "admin")
    {
      this.LoadPOSCompany();
      this.LoadPurchased();      
    }   

    if(window.localStorage.getItem("adm_role") == "salesuser")
    this.LoadSalesClients();
    
  }

  workGo()
  {
    this.NewImages = this.cImages.join('#') + '#';
    this.UpdateImageData();
  }

  Export(args) {  
    var data, filename, link;

    if(this.userrole == "admin")
      {
        let edata = this.purchased.map(function(obj, index) {
          return {
            SNo: index + 1,
            s_code: obj.s_code,
            client: obj.client, 
            dst: obj.dst,
            auction: obj.auction,
            adate: obj.adate,
            pos: obj.pos,
            dai: obj.dai,
            lot: obj.lot,
            prefix: obj.prefix,
            serial: obj.serial,
            make: obj.make,
            model: obj.model,
            year: obj.year,
            bidprice: obj.bidprice,
            aucfee: obj.aucfee,
            exportcharge: obj.exportcharge,
            noplate: obj.noplate,
            plateserial: obj.plateserial,
            shaken:obj.shaken,
            fudosha: obj.fudosha,
            transmission: obj.transmission,
            cc: obj.enginecc,
            mileage: obj.mileage,
            color: obj.color,
            colorcode: obj.colorcode,
            buyingcom: obj.buyingcom,
            buyer: obj.buyer,
            remark: obj.remark,
            landedvalue: obj.landedvalue,
            soldprice: obj.soldprice
          }
        });

        this.exportlist = edata;
      }
      else if(this.userrole == 'salesuser' || this.userrole == 'buyer')
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

  doClick()
  {
    let t = document.getElementById("fileInput");
    if(t)
    t.click();
  }

  doClickSheet()
  {
    let t = document.getElementById("fileInput2");
    if(t)
    t.click();
  }

  SelectImages(imgs, prod)
  {
    let imgx = imgs.substr(0,imgs.length - 1);
    let myd = imgx.split("#");
    this.cImages = myd;
    this.NewImages = this.cImages.join('#') + '#';
    this.selectedProd = prod;
  }

  SelectSheet(imgs, newimgs, prod)
  {
    if(newimgs != null)
    this.NewImages = newimgs;
    else
    this.NewImages = "";
    this.selectedImages = imgs;
    console.log(this.selectedImages);
    this.selectedProd = prod;
    this.selectCriteria = 2;
  }

  NewImage(prod, event)
  {
    document.getElementById("uploadstatus1").style.display = "block";
    let fileList: FileList = event.target.files;
    
    if(fileList.length > 0) {
        let formData: FormData = new FormData();
        let cnt = fileList.length;
        let j = 0;
        let names = "";
        for(j = 0; j < cnt; j++)
        {
        let file: File = fileList[j];
        formData.append('fileToUpload[]', file, "newimg" + prod + file.name);
        names += "http://www.shinchuo-test2.com/shinchouadmin/uploads/" + "newimg" + prod + file.name + "#";
        }
        let headers_s = new Headers();        
        let options = new RequestOptions({ headers: headers_s });
        this.myService.uploadImage(headers_s, options, formData).subscribe((data)=>{          
          let myd = JSON.parse(data);          
          if(myd == "Done")
          {                   
            document.getElementById("dan_msg").style.display = "none";      
            document.getElementById("suc_msg").style.display = "block";
            document.getElementById("msgsuccess").innerHTML = "Image Uploaded!";   
            this.NewImages += names;
            let imgx = this.NewImages.substr(0,this.NewImages.length - 1);
            let myd = imgx.split("#");
            this.cImages = myd;      
            this.UpdateImageData();
          }      
          else
          {
            document.getElementById("dan_msg").style.display = "block";
            document.getElementById("suc_msg").style.display = "none";
            document.getElementById("msgalert").innerHTML = myd;
          }

          setTimeout(function() {
            document.getElementById("dan_msg").style.display = "none";
            document.getElementById("suc_msg").style.display = "none";        
          }, 2000);
          console.log(myd);
         },err => {      
           console.error(err);    
         }); 
    }
  }

  NewSheet(prod, event)
  {
    document.getElementById("uploadstatus").style.display = "block";
    let fileList: FileList = event.target.files;
    
    if(fileList.length > 0) {
        let formData: FormData = new FormData();
        let cnt = fileList.length;
        let j = 0;
        let names = "";
        for(j = 0; j < cnt; j++)
        {
        let file: File = fileList[j];
        formData.append('fileToUpload[]', file, "newimg" + prod + file.name);
        names += "http://www.shinchuo-test2.com/shinchouadmin/uploads/" + "newimg" + prod + file.name + "#";
        }

        let headers_s = new Headers();        
        let options = new RequestOptions({ headers: headers_s });
        this.myService.uploadImage(headers_s, options, formData).subscribe((data)=>{          
          let myd = JSON.parse(data);          
          if(myd == "Done")
          {                   
            document.getElementById("dan_msg").style.display = "none";      
            document.getElementById("suc_msg").style.display = "block";
            document.getElementById("msgsuccess").innerHTML = "Image Uploaded!";   
            this.NewImages += names;
            this.UpdateSheetData();
          }      
          else
          {
            document.getElementById("dan_msg").style.display = "block";
            document.getElementById("suc_msg").style.display = "none";
            document.getElementById("msgalert").innerHTML = myd;
          }

          setTimeout(function() {
            document.getElementById("dan_msg").style.display = "none";
            document.getElementById("suc_msg").style.display = "none";        
          }, 2000);
          console.log(myd);
         },err => {      
           console.error(err);    
         }); 
    }
  }

  UpdateImageData()
  {
    this.myService.updateimagedata(this.selectedProd, this.NewImages).subscribe((data)=>{          
      let myd = JSON.parse(data);    

      if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";    
          this.LoadPurchased();     
          document.getElementById("uploadstatus1").style.display = "none";
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

  UpdateSheetData()
  {
    this.myService.updatesheetdata(this.selectedProd, this.selectedImages, this.NewImages).subscribe((data)=>{          
      let myd = JSON.parse(data);    

      if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";    
          this.LoadPurchased();     
          document.getElementById("uploadstatus").style.display = "none";
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

      let i = 0;
      let j = 0;
      let str = "";
      if(this.salesClient.length > 0)
      {
        for(i = 0; i < this.salesClient.length; i++)
        {
          if(this.salesClient[i].user != window.localStorage.getItem("adm_user"))
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
      this.purchased = JSON.parse(data).Status;   
     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example1_purchased");
        //this.shipmentsTable.DataTable();
        //document.getElementById("example1").parentElement.style.overflow = "scroll";
       
        this.testDataTable = this.shipmentsTable.DataTable(
          {
            fixedHeader:true,
            scrollX: true
          }
        );
        
        var clientWidth= $('.dataTables_wrapper').innerWidth();
        var scrollWidth= $('.fixedHeader-floating').innerWidth();
        var maxScrollLeft = scrollWidth - clientWidth;
        
        $(".dataTables_scrollBody").scroll(function ()    { 
          var p = $(".fixedHeader-floating").offset();         
            $(".fixedHeader-floating").offset({ top: p.top,  left: -1 * (this.scrollLeft - 255) });
        });
      });
    });
  }

  LoadPOSCompany()
  {
    this.myService.getposcompanies().subscribe((data)=>{          
      this.poscompany = JSON.parse(data).Status;   
      console.log(this.poscompany);
    },err => {      
      console.error(err);    
    }); 
  }

  SaveForm()
  { 
    let dte = $('#adate').val();
    let finaldte = '';
    if(dte != "")
    {
    var splitdte = dte.toString().split('/');
    finaldte = splitdte[2] + "-" + splitdte[0] + "-" + splitdte[1];
    }
    
    this.myService.searchPurchased(this.userrole, this.userauc, this.model.scode, this.model.client, this.model.dst, this.model.auction, finaldte, this.model.pos, this.model.dai, this.model.lot, this.model.prefix, this.model.serial, this.model.make, this.model.model, this.model.year, this.model.bidprice, this.model.aucfee, this.model.exportcharge, this.model.noplate, this.model.plateserial, this.model.shaken, this.model.fudosha, this.model.transmission, this.model.enginecc, this.model.mileage, this.model.color, this.model.colorcode, this.model.buyingcom, this.model.buyer, this.model.remark, this.model.landedvalue, this.model.soldprice).subscribe((data)=>{          
      let myd = JSON.parse(data).Status; 

        this.purchased = myd;

       
        
       
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
    $('#adate').datepicker();
    $('#adate').val('');

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
    let c = event.target.parentElement.children;
    c[0].style.display = "block";
    c[1].style.display = "none";
    c[0].innerText = c[1].value;

    this.myService.updatePurchased(cat,c[1].value, sid).subscribe((data)=>{          
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

  getComp(auc)
  {
    let x = this.poscompany.filter(function(val){
      return val.aname == auc;     
    });
    
    return x;
  }

  SelectSerialSid(sid)
  {
    let x = this.purchased.filter(function(val){
      return val.s_id == sid;     
    });

    this.SelectedSerial = x[0];
    
  }

  updateserial()
  {
    if(this.model.userial != "" && this.model.userial != undefined && this.model.userial !=  null)
    {
      this.myService.updatePurchased('serial', this.model.userial, this.SelectedSerial.s_id).subscribe((data)=>{          
        let myd = JSON.parse(data); 
        
        if(myd.Status == "Done")
          {                   
            document.getElementById("dan_msg").style.display = "none";      
            document.getElementById("suc_msg").style.display = "block";
            document.getElementById("msgsuccess").innerHTML = "Saved!";   
            this.LoadPurchased();      
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
  }

  deleteImage(prodid, imgurl)
  {
    let lt = this.NewImages;
    this.NewImages = lt.replace(imgurl + "#", "");

    if(this.selectCriteria == 1)
    {
      this.UpdateImageData();
    }
    else if(this.selectCriteria == 2)
    {
      this.UpdateSheetData();
    }
  }

  deletecImage(prodid, imgurl)
  {
    let lt = this.NewImages;
    this.NewImages = lt.replace(imgurl + "#", "");
    let imgx = this.NewImages.substr(0,this.NewImages.length - 1);
    let myd = imgx.split("#");
    this.cImages = myd;
    this.UpdateImageData();
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
      /*str += ', "aucdatesw":' + (<HTMLInputElement>document.getElementById('aucdatesw' + i)).checked;
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
    if(amount != 'N/A')
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
