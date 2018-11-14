import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatafromServicesService } from '../../../../datafrom-services.service';

@Component({
  selector: 'app-shipmentschedule',
  templateUrl: './shipmentschedule.component.html',
  styleUrls: ['./shipmentschedule.component.css']
})
export class ShipmentscheduleComponent implements OnInit {

  private shipmentsTable: any;
  public shipsch;
  constructor(public myService : DatafromServicesService, private router: Router) {
    
   }

  ngOnInit() { 
      
    this.LoadSchedules();     
    
  }

  LoadSchedules()
  {
    this.myService.getschedules().subscribe((data)=>{          
     this.shipsch = JSON.parse(data).Status;  
     
     //console.log(this.shipsch);

     //this.FrameSchedule();

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

  FrameSchedule()
  {
    let dat = this.shipsch;
    let coldata = this.getColumnfromArray(dat, 'maxrow');
    let countmax = this.getMaxCount(coldata);

    let ssid = this.getColumnfromArray(dat, 'sid');
    let ssunique = this.getuniQuedata(ssid);    

    let cnt = 0;
    let temp = '<table id="example1" class="table table-bordered table-striped"><thead><tr><th>S.No.</th><th>Vessel</th><th>Voyage</th><th colspan="' + countmax + '">Origin Ports</th><th colspan="' + countmax + '">Destination Ports</th><th>Action</th></tr></thead><tbody>';

    for(let i = 0; i < ssunique.length; i++)
    {
      let x = dat.filter(function(val){
        return val.sid == ssunique[i];     
      });
      
      temp += '<tr><td>' + ++cnt + '</td>';
      temp += '<td>' + x[0].vessel + '</td>';
      temp += '<td>' + x[0].voyage + '</td>';

      for(let j = 0; j < x.length; j++)
      {
        temp += '<td>' + x[j].originport + '<br/>' + x[j].etd + '</td>';
      }

      if(x.length < countmax)
      {
        for(let n = 0; n < (countmax - x.length); n++)
        {
          temp += '<td></td>';
        }
      }
      let nn = 0, tmp = '';
      for(let j = 0; j < x.length; j++)
      {
        if(x[j].destport != tmp)
        {
        temp += '<td>' + x[j].destport + '<br/>' + x[j].eta + '</td>';
        }
        else
        {
          nn++;
        }
        tmp = x[j].destport;
      }

      if(x.length - nn < countmax)
      {
        for(let n = 0; n < (countmax - (x.length - nn)); n++)
        {
          temp += '<td></td>';
        }
      }

      temp += '<td><button id="btn' + ssunique[i] + '" class="btn btn-black btnedit">Edit</button></td></tr>';

    }
    
    temp += '</tbody></table>';

    document.getElementById("scheduleship").innerHTML = temp;

    var self = this;
    $(".btnedit").click(function(event)
    {
      self.UpdateSchedule(event);
    });

    console.log(temp);
  }

  getMaxCount(cold)
  {
      let column = [];
      for(var i=0; i < cold.length; i++){
         column.push(parseInt(cold[i]));
      }

      return Math.max(...column);
  }

  getuniQuedata(arra)
  {
    var arr = [];
    for(var i = 0; i < arra.length; i++) {
        if(!arr.includes(arra[i])) {
            arr.push(arra[i]);
        }
    }
    return arr; 
  }

  getColumnfromArray(matrix, col)
  {
      var column = [];
      for(var i=0; i<matrix.length; i++){
         column.push(matrix[i][col]);
      }
      return column;
  }

  UpdateSchedule(ind)
  {
    //let ind = event.target.id.substr(3);
    this.router.navigate(["edit_shipmentschedule/" + ind]);
  }

}

