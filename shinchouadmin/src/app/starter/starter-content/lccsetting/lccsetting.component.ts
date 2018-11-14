import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatafromServicesService } from '../../../datafrom-services.service';

@Component({
  selector: 'app-lccsetting',
  templateUrl: './lccsetting.component.html',
  styleUrls: ['./lccsetting.component.css']
})
export class LccsettingComponent implements OnInit {

  model: any = {};
  private shipmentsTable: any;
  public Calculations;
  public OCalculations;
  constructor(public myService : DatafromServicesService) {
    
   }

  ngOnInit() { 
      
    this.LoadCalc();     
    this.LoadOtherCalc();
  }  

  LoadCalc()
  {
    this.myService.getDefaultCalc().subscribe((data)=>{          
     this.Calculations = JSON.parse(data).Status;   

     this.model.agent = this.FormatCurr(this.Calculations[0].agent);
     this.model.exchange = this.FormatCurr(this.Calculations[0].exchange);
     this.model.gst = this.Calculations[0].gst;
     this.model.freight = this.FormatCurr(this.Calculations[0].freight);

    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        this.shipmentsTable = $("#example1");
        this.shipmentsTable.DataTable();
      });
    }); 
  }

  LoadOtherCalc()
  {
    
    this.myService.getOtherCalc().subscribe((data)=>{          
     let myd = JSON.parse(data).Status;  
     let mm = new Array();
     let nn = new Array();
     let y = this.getColumnfromArray(myd, "cname");
     let z = y.filter( this.getUniqueValues ).sort();
    
    let i = 0, c = 0,f = 0, g = 0;
    let st = '';
     for(i = 0; i < z.length; i++)
     {
        let x = myd.filter(function(val){
          return val.cname == z[i];     
        });  
        
        console.log(x);
        c++;
        let str = '<tr id="r'+ (++g) +'"><td>'+ c +'</td><td class="a1">'+ x[0].cname +'</td><td class="a2">¥ '+ this.FormatCurr(x[0].agent) +'</td><td class="a3">'+ x[0].gst +'%</td><td class="a4">'+ this.FormatCurr(x[0].exchange) +'</td><td class="a5">NZ$ '+this.FormatCurr(x[0].freight) +'</td><td>'; 
        nn.push("r" + g);
        if(x.length > 1){ str += '<button class="btn btn-danger hist">History</button>&nbsp;'}; 
        
        str += '<button class="btn btn-black edt">Edit</button></td></tr>';
        if(x.length > 1){
        str += '<tr id="r'+ (++g) +'"><td colspan="7"><table class="display table table-bordered table-striped"><thead><tr><th>Sno</th><th>Calculation Name</th><th>Agent Fee</th><th>G.S.T</th><th>Exhange Rate</th><th>Freight in NZ$</th><th>Changed On</th></tr></thead><tbody>';
       
        mm.push("r" + g);
        
        for(f = 1; f < x.length;f++)
        {
          str += '<tr><td>'+ f +'</td><td>'+ x[f].cname +'</td><td>¥ '+ this.FormatCurr(x[f].agent) +'</td><td>'+ x[f].gst +'%</td><td>'+ this.FormatCurr(x[f].exchange) +'</td><td>NZ$ '+ this.FormatCurr(x[f].freight) +'</td><td>'+ x[f].statustime +'</td></tr>';
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
      
      edt.addEventListener('click', (event) => this.edt(s));      
     }
     
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
    let a2 = l.querySelector(".a2");
    let a3 = l.querySelector(".a3");
    let a4 = l.querySelector(".a4");
    let a5 = l.querySelector(".a5");

    this.model.ocname = a1.innerHTML;
    this.model.oagent = this.FormatCurr(a2.innerHTML.substr(2));    
    this.model.ogst = a3.innerHTML.substr(0,a3.innerHTML.length - 1);
    this.model.oexchange = this.FormatCurr(a4.innerHTML);
    this.model.ofreight = this.FormatCurr(a5.innerHTML.substr(4));
    let c = <HTMLInputElement>document.getElementById("ctext");
    c.disabled = true;
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

  /*UpdateAuctions(ind)
  {
    window.location.href = "edit_auction/" + ind;
  }*/

  SaveForm()
  {  
    let dte = new Date();  
    this.myService.updateDefaultCalc(this.model.agent.replace(/,/gi,''), this.model.gst, this.model.freight.replace(/,/gi,''), this.model.exchange.replace(/,/gi,''), dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data); 

        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.LoadCalc();
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

  SaveOtherForm()
  {  
    let dte = new Date();  
    this.myService.updateOtherCalc(this.model.ocname, this.model.oagent.replace(/,/gi,''), this.model.ogst, this.model.ofreight.replace(/,/gi,''), this.model.oexchange.replace(/,/gi,''), dte.toString()).subscribe((data)=>{          
        let myd = JSON.parse(data); 
        console.log(myd.Status);
        if(myd.Status == "Done")
        { 
                  
          document.getElementById("dan_msg").style.display = "none";      
          document.getElementById("suc_msg").style.display = "block";
          document.getElementById("msgsuccess").innerHTML = "Saved!";

          this.model.ocname = undefined;
          this.model.oagent = undefined;
          this.model.oexchange = undefined;
          this.model.ogst = undefined;
          this.model.ofreight = undefined;
          let c = <HTMLInputElement>document.getElementById("ctext");
          c.disabled = false;
          window.location.reload();                                 
          //this.LoadOtherCalc();
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

  FormatCurr(amount)
  {
    let x = amount.toString();
    return Number(x.replace(/,/gi,'')).toLocaleString();
  }

  FormatAmount(event)
  {
    let x = event.target.value;
    event.target.value = Number(x.replace(/,/gi,'')).toLocaleString();
  }

}
