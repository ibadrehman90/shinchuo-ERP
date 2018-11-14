import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../../datafrom-services.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-assignauction',
  templateUrl: './assignauction.component.html',
  styleUrls: ['./assignauction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssignauctionComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public OCalculations;
  public loaddays;
  public loaddates;
  public Auctions;
  public Buyers;
  public assignAuc;
  public selectedassignAuc;
  public edtemail;
  
  constructor(public myService : DatafromServicesService) {
   
   }

  ngOnInit() {    
    this.LoadOtherCalc();

    this.LoadDays();
    this.getBuyers();
    
    $('#datepicker1').datepicker({
      autoclose: true
    });
    
  }  

  LoadDays()
  {
    let today = new Date();    
    this.loaddays = new Array();
    this.loaddates = new Array();


    let weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let i = 0;
    for(i = 0; i <= 6; i++)
    {
      let d = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      let m = (d.getMonth() + 1);
      let mnth = "";
      let dt = "";
      if(m < 10)
      mnth = "0" + m;
      else
      mnth = "" + m;

      if(d.getDate() < 10)
      dt = "0" + d.getDate();
      else
      dt = "" + d.getDate();


      this.loaddates.push(d.getFullYear() + "-" + mnth + "-" + dt);
           
      
      
      this.loaddays.push(weekday[d.getDay()]);
    }

    console.log(this.loaddates); 
  }

  getAuctions(dte){  
    this.myService.getAuctionsAPI(dte).subscribe((data)=>{          
      this.Auctions = JSON.parse(data);
    },err => {      
      console.error(err);    
    }); 
  }

  getBuyers(){  
    this.myService.getBSUsers("buyer").subscribe((data)=>{          
      this.Buyers = JSON.parse(data).Status;
    },err => {      
      console.error(err);    
    });  
  }

  getData()
  {
    let md = this.getSelectValues(document.getElementById("sbuyer"));
    let sd = (<HTMLInputElement>document.getElementById("sday")).value;
    let sa = (<HTMLInputElement>document.getElementById("sauc")).value;
    let dte = (<HTMLInputElement>document.getElementById("datepicker1")).value;

    let i = 0;
    for(i = 0; i < md.length;i++)
    this.SubmitData(md[i],sd,sa,dte);
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

  SelectDay(event)
  {
    let md = this.loaddays.indexOf(event.target.value);
    this.getAuctions(this.loaddates[md]);
  }

  LoadOtherCalc()
  {
    
    this.myService.getassignauction().subscribe((data)=>{          
     let myd = JSON.parse(data).Status;  
     this.assignAuc = myd;
     let mm = new Array();
     let nn = new Array();
     let y = this.getColumnfromArray(myd, "b_email");
     let z = y.filter( this.getUniqueValues ).sort();
    
    let i = 0, c = 0,f = 0, g = 0;
    let st = '';
     for(i = 0; i < z.length; i++)
     {
        let x = myd.filter(function(val){
          return val.b_email == z[i];     
        });  
        
        console.log(x);
        c++;
        let str = '<tr id="r'+ (++g) +'"><td>'+ c +'</td><td class="a1">'+ x[0].b_email +'</td><td class="a2">'+ x[0].day +'</td><td class="a3">'+ x[0].auction +'</td><td class="a4">'+ x[0].statustime +'</td><td class="a5"><label class="switch" id="ff' + x[0].a_id + '"><input type="checkbox" class="switch_check"';
        
        if(x[0].status == 1)
        str += ' checked="checked"';
        //else
        //str += ' checked=""';

        str += ' "><span class="slider round"></span></label></td><td>'; 

        nn.push("r" + g);
        if(x.length > 1){ str += '<button class="btn btn-danger hist">History</button>&nbsp;'}; 
        
        str += '<button class="btn btn-black edt" data-toggle="modal" data-target="#modal-info">Edit</button></td></tr>';
        if(x.length > 1){
        str += '<tr id="r'+ (++g) +'"><td colspan="7"><table class="display table table-bordered table-striped"><thead><tr><th>Sno</th><th>Buyer</th><th>Day</th><th>Auction</th><th>Date</th><th>Updated On</th><th>Status</th></tr></thead><tbody>';
       
        mm.push("r" + g);
        
        for(f = 1; f < x.length;f++)
        {
          let stt = 'Inactive';
          if(x[f].status == '1')
          stt = 'Active';
          else
          stt = 'Inactive';

          str += '<tr><td>'+ f +'</td><td>'+ x[f].b_email +'</td><td>'+ x[f].day +'</td><td>'+ x[f].auction +'</td><td>'+ x[f].fromdate +'</td><td>'+ x[f].statustime +'</td><td>' + stt + '</td></tr>';
        }
        str += '</tbody></table></td></tr>';
        
        }

        

        st += str;
     }

     document.getElementById("othertabcalc").innerHTML = st;
     let d = 0;
     for(d = 0; d < mm.length; d++)
     {
      document.getElementById(mm[d]).style.display = "none";
      let s = parseInt(mm[d].substr(1)) - 1;
      let l = document.getElementById("r" + s);    
      let appr = l.querySelector(".hist");
      appr.addEventListener('click', (event) => this.hist(s));      
     }

     d = 0;
     for(d = 0; d < nn.length; d++)
     {
      let s = parseInt(nn[d].substr(1));
      let l = document.getElementById("r" + s);    
      let edt = l.querySelector(".edt");
      let sw = l.querySelector(".switch_check");
      
      edt.addEventListener('click', (event) => this.edt(s));      
      sw.addEventListener('change', (event) => this.UpdateStatus(sw.parentElement.id));      
     }
     
    },err => {      
      console.error(err);    
    }); 
  }


  UpdateStatus(aid)
  {
    let l = document.getElementById(aid);
    let sw = l.querySelector(".switch_check");
    
    let stat = '0';
    if((<HTMLInputElement>sw).checked ==  true)
    stat = '1';
    else
    stat = '0';


    this.myService.updateStatusAuctionAssignment(aid.substr(2), stat).subscribe((data)=>{          
      let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";
          this.LoadOtherCalc();
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

  EditStatus(event,aid)
  {
    
    let stat = '0';
    if(event.target.checked ==  true)
    stat = '1';
    else
    stat = '0';

    this.myService.updateStatusAuctionAssignment(aid, stat).subscribe((data)=>{          
      let myd = JSON.parse(data);
        
        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.LoadOtherCalc();
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

  hist(vid)
  {   
    if(document.getElementById("r" + (vid + 1)).style.display == "none")
    document.getElementById("r" + (vid + 1)).style.display = "table-row";
    else 
    document.getElementById("r" + (vid + 1)).style.display = "none";
  }

  edt(vid)
  {   
    let l = document.getElementById("r" + vid);    
    let a1 = l.querySelector(".a1");
    this.edtemail = a1.innerHTML;
    this.selectedassignAuc = this.assignAuc.filter(function(val){
      return val.b_email == a1.innerHTML;     
    });
  }

  getUniqueValues(value, index, self) { 
    return self.indexOf(value) === index;
  }

  getColumnfromArray(matrix, col)
  {
      var column = [];
      for(var i=0; i<matrix.length; i++){
         column.push(matrix[i][col]);
      }
      return column;
  } 

  SubmitData(email, sday, auction, fromdate)
  {  
    let dte = new Date();  
    this.myService.assignauction(email, fromdate, auction,sday, dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data); 
        console.log(myd.Status);
        if(myd.Status == "Done")
        {                   
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";    
          
          this.LoadOtherCalc();
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

}