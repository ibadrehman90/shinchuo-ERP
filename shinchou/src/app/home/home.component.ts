import { Component, OnInit } from '@angular/core';
import { DatafromApiService } from './../datafrom-api.service';
import { Subject }    from 'rxjs/Subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myData;
  public incomingData;  
  public AllVehicleData;
  public tempAllVehicleData;
  public Mileage;
  public Year;
  public Price;
  public Grade;
  public CC;
  public Auctions;
  public make_selected = "";
  public model_selected = "";
  public year_selected = "";
  public price_selected = "";
  public minMileage;
  public maxMileage;
  public minYear;
  public maxYear;
  public minPrice;
  public maxPrice;
  public loaddays;
  public loaddates;
  public selecteddays = new Array();
  public selecteddayshow = "";
  public SearchYear;
  public SearchPrice;
  public Chassis;
  public chassiss;
  public loginCheck;
  public sliceStart = 0;
  public sliceEnd = 0;
  public scrollCount = 0;
  public numPages = 0;
  public totalProd = 0;
  public Checkbtn = 0;
  public fnalsttr = "";
  public vehicstr = "";
  public sortsttr = "";
  public sorttoggle = "";
  public loggedinMake;
  public loggedinModel;
  public mkelnt = 0;
  public mdllnt = 0;
  public static Vehic: Subject<any> = new Subject();
  
  constructor(public myService : DatafromApiService, private router: Router){ 
    
    HomeComponent.Vehic.subscribe(res => {
      document.getElementById("Loader").style.display = "block";
      this.SetbyBrand();     
    });     
    
    window.localStorage.removeItem("ReturnUrl");
    
    if(window.localStorage.getItem("username") != null || window.localStorage.getItem("username") != undefined)
    {
      this.loginCheck = true;
    }
  }
  
  ngOnInit() {

    if(this.loginCheck != true)
    this.getVehicle(); 
    else
    this.getFilteredVehicle();
    //this.getAllVehicle(); 

    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);
    this.selecteddayshow = ftday;
    this.LoadDays();
    this.LoadAuctions(ftday);
    this.LoadRates(ftday,"",1);
    this.LoadChassis(ftday,"",1);
    this.LoadMileage(ftday,"",1);
    this.LoadYear(ftday,"",1);
    this.LoadCC(ftday,"",1);
    this.LoadPrice(ftday,"",1);

    if(window.localStorage.getItem("Vehic") != "")
    {
      this.SetbyBrand();     
    }
    else
    {
      this.LoadCurrentVehicles();   
    }
  }

  SavedSearch()
  {
    this.router.navigate(['/admin/savedsearch']);
  }

  SetbyBrand()
  {
    this.vehicstr = "MARKA_NAME = '" + window.localStorage.getItem("Vehic") + "'";  
    this.Checkbtn = 2;
    this.sliceStart = 0;
    this.sliceEnd = 0;
    this.ClearSortArrow();

    this.myService.getCount(" where " + this.vehicstr).subscribe((data)=>{          
     let myd = JSON.parse(data); 
     this.totalProd  = parseInt(myd[0].TAG0);  
     this.numPages = Math.ceil(this.totalProd/15);

     this.SearchCustomized(0,this.vehicstr);
     
   },err => {      
     console.error(err);   
   }, () => {
    setTimeout(() => {
      window.localStorage.setItem("Vehic",""); 
      document.getElementById("Loader").style.display = "none";      
    });
   });
  }

  LoadAuctions(ftday)
  {    
    this.myService.LoadAuctions(ftday).subscribe((data)=>{  
      this.Auctions = JSON.parse(data);
      console.log(this.Auctions);
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadRates(ftday,squry,cnt)
  {    
    this.myService.LoadAPIData("rate",ftday,squry,cnt).subscribe((data)=>{  
      this.Grade = JSON.parse(data);
      let i = 0;

      for(i = 0;i < this.Grade.length;i++)
      {
        if(this.Grade[i].RATE == "" || this.Grade[i].RATE == " " || this.Grade[i].RATE == "&nbsp;")
        {
          this.Grade.splice(i,1); 
        }
      }

    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadChassis(ftday,squry,cnt)
  {    
    this.myService.LoadAPIData("kuzov",ftday,squry,cnt).subscribe((data)=>{  
      this.Chassis = JSON.parse(data);
      if(this.Chassis[0].KUZOV == "")
      this.Chassis.splice(0,1);     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadYear(ftday,squry,cnt)
  {    
    this.myService.LoadAPIData("year",ftday,squry,cnt).subscribe((data)=>{  
      this.Year = JSON.parse(data);
      //this.Chassis.splice(0,1);     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadMileage(ftday,squry,cnt)
  {    
    this.myService.LoadAPIData("mileage",ftday,squry,cnt).subscribe((data)=>{  
      this.Mileage = JSON.parse(data);
      //this.Chassis.splice(0,1);     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadCC(ftday,squry,cnt)
  {    
    this.myService.LoadAPIData("eng_v",ftday,squry,cnt).subscribe((data)=>{  
      this.CC = JSON.parse(data);
      //this.Chassis.splice(0,1);     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadPrice(ftday,squry,cnt)
  {    
    this.myService.LoadAPIData("start",ftday,squry,cnt).subscribe((data)=>{  
      this.Price = JSON.parse(data);
      //this.Chassis.splice(0,1);     
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  LoadCurrentVehicles()
  {
    this.sliceStart = 0;
    this.sliceEnd = 0;
    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);
    let cnt = 0;
    let qry = " where auction_date like '" + ftday + "%'";

    this.myService.getCount(qry).subscribe((data)=>{          
      let myd = JSON.parse(data); 
      this.totalProd  = parseInt(myd[0].TAG0);  
      this.numPages = Math.ceil(this.totalProd/15);

      this.getCurrentVehicles(0,ftday,"");
      
    },err => {      
      console.error(err);    
    });
  }

  getCurrentVehicles(lmt,ftday,sortstr)
  {
    let qury = " limit " + lmt + ",15";
    
    this.myService.LoadVehicles(ftday,qury,sortstr).subscribe((data)=>{          
      this.AllVehicleData = JSON.parse(data); 
      this.tempAllVehicleData = this.AllVehicleData;
      
      if(this.AllVehicleData.length == 0)
      {
        document.getElementById("emptydataerror").style.display = "block";
      }
      else
      {
        document.getElementById("emptydataerror").style.display = "none";
      }

      if(this.loginCheck == true)
      {
        let lotn = this.getColumnfromArray(this.AllVehicleData, "ID");
        var ii = 0;
        for(ii = 0; ii < lotn.length; ii++)
        {
          this.LoadWishlist(lotn[ii], ii);
        }

        let visit = this.getColumnfromArray(this.AllVehicleData, "ID");
        var jj = 0;
        for(jj = 0; jj < visit.length; jj++)
        {
          this.CheckVisited(visit[jj], jj);
        }
      }

      document.getElementById("Loader").style.display = "none";      
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
  }

  getVehicle(){  
    this.myService.getVehicles().subscribe((data)=>{          
      this.myData = JSON.parse(data);
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  getFilteredVehicle(){  
    
    let myd;
    let myd2 = new Array();

    this.myService.getVehicles().subscribe((data)=>{          
      myd = JSON.parse(data);
      if(myd.length > 0)
      {
        this.myService.getDBVehicles(window.localStorage.getItem("username")).subscribe((data)=>{          
          console.log(data);
          let mydmke;
          let mydoth;
          if(JSON.parse(data).makelist != "")
          {
            mydmke = JSON.parse(JSON.parse(data).makelist);
            this.mkelnt = mydmke.length;
            myd2 = mydmke;
          }

          if(JSON.parse(data).otherlist != "")
          {
          mydoth = JSON.parse(JSON.parse(data).otherlist);  
          myd2 = mydmke.concat(mydoth);
          } 
         
          let  i = 0;
          let dta = this.getColumnfromArray(myd,"MARKA_NAME");
          if(myd2.length > 0)
          {
            /*for(i = 0; i < myd2.length;i++)
            {
              let ind = dta.indexOf(myd2[i]);
              
              dta.splice(ind,1);
            }*/

            this.loggedinMake = myd2;
          }
          else
          {
            this.loggedinMake = dta;
          }
          console.log(this.loggedinMake);
          
        },err => {      
          console.error(err);    
        });
      }
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });    
    
  }

  FormatVal(item,cn)
  {
    if(cn <= this.mkelnt)
    {
      return item + " *";
    }
    else
    {
      return item;
    }
  }

  SelectMakeArr(event)
  {
    if(this.loginCheck != true)
    {
      let str = "";
      $.each( event.target.selectedOptions , function( index, obj ){      
        if(index > 0)
        str += " OR ";

        str += "marka_name='" + obj.value + "'";
        
      });

      this.myService.getModels(str).subscribe((data)=>{          
        this.incomingData = JSON.parse(data);
      },err => {      
        console.error(err);    
      }, () => {
        setTimeout(() => {
          $('.selectpicker').selectpicker('refresh');
        });
      }); 
    }
    else
    {
      this.CustModelSelect(event);
    }
  }

  CustModelSelect(event)
  {
    (<HTMLInputElement>document.getElementById("models")).value = "";
    let myd;
    let myd2 = new Array();

    let str = "";
    let dbstr = "";
      $.each( event.target.selectedOptions , function( index, obj ){      
        if(index > 0)
        str += " OR ";

        str += "marka_name='" + obj.value + "'";
        dbstr += "make='" + obj.value + "'";

        dbstr += " OR ";
        
      });

    this.myService.getModels(str).subscribe((data)=>{          
      myd = JSON.parse(data);
      console.log(myd);
      if(myd.length > 0)
      {
        this.myService.getDBModel(dbstr,window.localStorage.getItem("username")).subscribe((data)=>{          
          console.log(JSON.parse(data));
          let mydmke;
          let mydoth;
          if(JSON.parse(data).modellist != "")
          {
            mydmke = JSON.parse(JSON.parse(data).modellist);
            this.mdllnt = mydmke.length;
            myd2 = mydmke;
          }

          if(JSON.parse(data).otherlist != "")
          {
          mydoth = JSON.parse(JSON.parse(data).otherlist);  
          myd2 = mydmke.concat(mydoth);
          } 
         
          let  i = 0;
          let dta = this.getColumnfromArray(myd,"MODEL_NAME");
          if(myd2.length > 0)
          {
            this.loggedinModel = myd2;
          }
          else
          {
            this.loggedinModel = dta;
          }
          console.log(this.loggedinModel);
          
        },err => {      
          console.error(err);    
        }, () => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          });
        }); 
      }
      else
      {
        this.loggedinModel = new Array();
      }
    },err => { 
          
      console.error(err);    
    }, () => {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });    
  }

  formatCurrentDate(tday)
  {
    let m = (tday.getMonth() + 1);
    let mnth = "";
    let dt = "";
    if(m < 10)
    mnth = "0" + m;
    else
    mnth = "" + m;

    if(tday.getDate() < 10)
    dt = "0" + tday.getDate();
    else
    dt = "" + tday.getDate();

    return tday.getFullYear() + "-" + mnth + "-" + dt;
  }

  listview()
  {
    document.getElementById("listview").style.display = "block";
    document.getElementById("boxview").style.display = "none";    
  }

  boxview()
  {
    document.getElementById("listview").style.display = "none";
    document.getElementById("boxview").style.display = "block";    
  }

  ref()
  {
    $('.selectpicker').selectpicker('refresh');
    $('.selectpicker').selectpicker('render');
  }

  SearchData()
  {
    this.Checkbtn = 1;
    this.sliceStart = 0;
    this.sliceEnd = 0;
    this.ClearSortArrow();
    document.getElementById("Loader").style.display = "block"; 
    let lots = (<HTMLInputElement>document.getElementById("lots")).value;
    let lotstr = "";
    if(lots != "")
    {
    let lotarr = lots.split(',');
    
    $.each(lotarr , function( index, obj ){      
      if(index > 0)
      lotstr += "%20OR%20";

      lotstr += "LOT%20=%20" + obj;  
    });
    
    lotstr = "%20AND%20(" + lotstr + ")";
    }

    let minlot = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("minlot"),"LOT >=");
    let maxlot = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("maxlot"),"LOT <=");
    let aucs = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("aucs"),"AUCTION =");
    let makes = this.SearchDataFunc(<HTMLSelectElement>document.getElementById("makes"),"MARKA_NAME");
    let models = this.SearchDataFunc(<HTMLSelectElement>document.getElementById("models"), "MODEL_NAME");
    let chassis = this.SearchDataFunc(<HTMLSelectElement>document.getElementById("chassiss"), "KUZOV");
    let mingrade = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("mingrade"),"RATE >=");
    let maxgrade = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("maxgrade"),"RATE <=");
    let minyear = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("minyear"),"YEAR >=");
    let maxyear = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("maxyear"),"YEAR <=");
    let minmile = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("minmile"),"MILEAGE >=");
    let maxmile = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("maxmile"),"MILEAGE <=");
    let mincc = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("mincc"),"ENG_V >=");
    let maxcc = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("maxcc"),"ENG_V <=");
    let minprice = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("minprice"),"START >=");
    let maxprice = this.SearchDataFunc2(<HTMLInputElement>document.getElementById("maxprice"),"START <=");

    this.fnalsttr = "AUCTION_DATE%20LIKE%20%27" + this.selecteddayshow + "%%27" + lotstr + minlot + maxlot + aucs + makes + models + chassis + mingrade + maxgrade + minyear + maxyear + minprice + maxprice + mincc + maxcc + minmile + maxmile;

    this.LoadRates("",this.fnalsttr,2);
    this.LoadChassis("",this.fnalsttr,2);
    this.LoadMileage("",this.fnalsttr,2);
    this.LoadYear("",this.fnalsttr,2);
    this.LoadCC("",this.fnalsttr,2);
    this.LoadPrice("",this.fnalsttr,2);
    
    window.localStorage.setItem("searchQ",this.fnalsttr);

    this.myService.getCount(" where " + this.fnalsttr).subscribe((data)=>{          
      let myd = JSON.parse(data); 
      this.totalProd  = parseInt(myd[0].TAG0);  
      this.numPages = Math.ceil(this.totalProd/15);

      this.SearchCustomized(0,this.fnalsttr);
      
    },err => {      
      console.error(err);    
    });
    
    
  }

  SearchCustomized(lmt,fnalstr)
  {
    let qury = " limit " + lmt + ",15";
    console.log(qury);
    this.myService.getCustomizedVehicles(fnalstr,qury).subscribe((data)=>{          
      this.AllVehicleData = JSON.parse(data);
      console.log(this.AllVehicleData);
      if(this.AllVehicleData.length == 0)
      {
        document.getElementById("emptydataerror").style.display = "block";
      }
      else
      {
        document.getElementById("emptydataerror").style.display = "none";
      }

      if(this.loginCheck == true)
      {
        let lotn = this.getColumnfromArray(this.AllVehicleData, "ID");
        var ii = 0;
        for(ii = 0; ii < lotn.length; ii++)
        {
          this.LoadWishlist(lotn[ii], ii);
        }

        let visit = this.getColumnfromArray(this.AllVehicleData, "ID");
        var jj = 0;
        for(jj = 0; jj < visit.length; jj++)
        {
          this.CheckVisited(visit[jj], jj);
        }
      }

    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        document.getElementById("Loader").style.display = "none";
        $('.selectpicker').selectpicker('refresh');
      });
    }); 
  }

  ClearSearch()
  {
    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);
    this.Checkbtn = 0;
    this.fnalsttr = "";
    (<HTMLInputElement>document.getElementById("minlot")).value = "";
    (<HTMLInputElement>document.getElementById("maxlot")).value = "";
    (<HTMLSelectElement>document.getElementById("mingrade")).value = "";
    (<HTMLInputElement>document.getElementById("maxgrade")).value = "";
    (<HTMLInputElement>document.getElementById("minyear")).value = "";
    (<HTMLInputElement>document.getElementById("maxyear")).value = "";
    (<HTMLInputElement>document.getElementById("minmile")).value = "";
    (<HTMLInputElement>document.getElementById("maxmile")).value = "";
    (<HTMLInputElement>document.getElementById("minprice")).value = "";
    (<HTMLInputElement>document.getElementById("maxprice")).value = "";
    (<HTMLInputElement>document.getElementById("mincc")).value = "";
    (<HTMLInputElement>document.getElementById("maxcc")).value = "";
    (<HTMLInputElement>document.getElementById("lots")).value = "";
    (<HTMLInputElement>document.getElementById("aucs")).value = "";
    (<HTMLInputElement>document.getElementById("makes")).value = "";
    (<HTMLInputElement>document.getElementById("models")).value = "";
    (<HTMLInputElement>document.getElementById("chassiss")).value = "";
    (<HTMLInputElement>document.getElementById("rd0")).checked = true;

    this.ClearSortArrow();
    this.LoadRates(ftday,"",1);
    this.LoadChassis(ftday,"",1);
    this.LoadMileage(ftday,"",1);
    this.LoadYear(ftday,"",1);
    this.LoadCC(ftday,"",1);
    this.LoadPrice(ftday,"",1);

    window.localStorage.removeItem("searchQ");

    $('.selectpicker').selectpicker('refresh');
    this.LoadCurrentVehicles();
  }


  ClearSortArrow()
  {
    var elements = document.getElementsByClassName("sup");
    for (var i = 0, len = elements.length; i < len; i++) {
        (<HTMLElement>elements[i]).style.color = "Black";
    }

    elements = document.getElementsByClassName("sdown");
    for (var i = 0, len = elements.length; i < len; i++) {
        (<HTMLElement>elements[i]).style.color = "Black";
    }
  }

  SortData(event,cat,num)
  {

    if(cat != this.sorttoggle)
    this.ClearSortArrow();

    let l = event.target;

    let x = l.querySelector(".sup");
    let y = l.querySelector(".sdown");  
    console.log(x.style.color + " " + y.style.color);
    let str = "";
    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);

    if(x.style.color == "" && y.style.color == "" || x.style.color == "black" && y.style.color == "black")
    {
      y.style.color = "Red";    
      str = " order by " + cat + " ASC";
    }
    else if(y.style.color == "red")
    {
      y.style.color = "Black";
      x.style.color = "Red";      
      str = " order by " + cat + " DESC";
    }
    else if(x.style.color == "red")
    {
      y.style.color = "Red";
      x.style.color = "Black";     
      str = " order by " + cat + " ASC";
    }    
    this.sortsttr = str;
    this.sliceEnd = 0;
    this.sliceStart = 0;

    if(this.Checkbtn == 0)
    this.getCurrentVehicles(this.sliceStart,ftday,this.sortsttr);
    else if(this.Checkbtn == 1)
    this.SearchCustomized(this.sliceStart,this.fnalsttr + this.sortsttr);
    else if(this.Checkbtn == 2)
    this.SearchCustomized(this.sliceStart,this.vehicstr + this.sortsttr);

    this.sorttoggle = cat;
  }

  ClearSort()
  {
    this.ClearSortArrow();
    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);

    if(this.Checkbtn == 0)
    this.getCurrentVehicles(this.sliceStart,ftday,"");
    else if(this.Checkbtn == 1)
    this.SearchCustomized(this.sliceStart,this.fnalsttr);
    else if(this.Checkbtn == 2)
    this.SearchCustomized(this.sliceStart,this.vehicstr);
  }

  SearchDataFunc(vid, cat)
  {
    let selt = vid.selectedOptions;
    let seltstr = "";
    if(selt.length > 0)
    {
    $.each(selt , function( index, obj ){      
      if(index > 0)
      seltstr += "%20OR%20";

      seltstr += cat + "%20=%20%27" + obj.value + "%27";  
    });

    seltstr = "%20AND%20(" + seltstr +  ")";
    }
    return seltstr;
  }

  SearchDataFunc2(vid, cat)
  {
    let aucs = vid.value;
    let aucsstr = "";
    if(aucs != "" && aucs != undefined)
    {
      aucsstr = "%20AND%20" + cat + "%20%27" + aucs + "%27"; 
    }

    return aucsstr;
  }

  CheckVisited(prod, ind)
  {
    this.myService.checkVisited(prod, window.localStorage.getItem("username")).subscribe((data)=>{          
      let wish = JSON.parse(data);

      let l = document.getElementById("csb" + ind);
      let x = l.querySelector("#visited");

      if(wish.visited != "null")
      (<HTMLInputElement>x).style.display = "block";

      l = document.getElementById("csl" + ind);
      x = l.querySelector("#visited");

      if(wish.visited != "null")
      (<HTMLInputElement>x).style.display = "block";
            

    },err => {      
      console.error(err);    
    });
  }

  LoadDays()
  {
    let today = new Date();    
    this.loaddays = new Array();
    this.loaddates = new Array();


    let weekday = new Array(7);
    weekday[0] =  "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let i = 0;
    for(i = 0; i <= (6 - today.getDay()); i++)
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
           
      
      if(i == 0)
      this.loaddays.push("Today");
      else
      this.loaddays.push(weekday[d.getDay()]);      
    }

    console.log(this.loaddates); 
    
  }

  SelectDay(event)
  {   
    if(event.target.id != 'rdAll')
    {
    this.selecteddayshow = this.loaddates[this.loaddays.indexOf(document.getElementById("rad" + event.target.id.substr(2)).innerHTML)].toString();
    this.LoadAuctions(this.selecteddayshow);
    }
    else
    {
      this.selecteddayshow = "";
      this.LoadAuctions("");
    }
  }

  checkURL(url) {

    if(url[url.length - 1] == '/')
    return "./assets/Nilimage.jpg";    

    else
    return url;
  }

  sliceimages(imgsrc)
  {
    let imgarr = imgsrc.split('#');
    
    return imgarr[1].substr(0,imgarr[1].length - 5);
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

  FormatCurr(amount)
  {
    return parseInt(amount).toLocaleString();
  }

  SaveWishlist(event, ind, prodid)
  {
    let x = (<HTMLInputElement>document.getElementById("cbw" + ind)); 
    let y = (<HTMLInputElement>document.getElementById("clw" + ind)); 

    if(x.checked == true)
    y.checked = true;
    else
    y.checked = false;

    this.myService.savewishlist(prodid, window.localStorage.getItem("username"), '1').subscribe((data)=>{          
      console.log(data);
    },err => {      
      console.error(err);    
    });    
  }

  SaveWishlist1(event, ind, prodid)
  {
    let y = (<HTMLInputElement>document.getElementById("cbw" + ind)); 
    let x = (<HTMLInputElement>document.getElementById("clw" + ind)); 
    
    if(x.checked == true)
    y.checked = true;
    else
    y.checked = false;

    this.myService.savewishlist(prodid, window.localStorage.getItem("username"), '1').subscribe((data)=>{          
      console.log(data);
    },err => {      
      console.error(err);    
    });    
  }

  LoadWishlist(prodid, ind)
  {    
     this.myService.loadwishlist(prodid, window.localStorage.getItem("username")).subscribe((data)=>{          
        let wish = JSON.parse(data); 
        
        if(wish.wishlist != "null")
        {
          let x = (<HTMLInputElement>document.getElementById("cbw" + ind));
          x.checked = true;

          let y = (<HTMLInputElement>document.getElementById("clw" + ind));
          y.checked = true;
        }        
        
      },err => {      
        console.error(err);    
      }); 
  }

  changeSplice(val)
  {
    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);

    if(val == 1)
    {
      this.sliceStart = 0;    
      this.sliceEnd = 0;       
    }
    else if(val == 2)
    {
      if(this.sliceStart > 0)
      {
        this.sliceStart -= 15;  
        this.sliceEnd--;       
      }
      else
      {
        this.sliceStart = 0;
        this.sliceEnd = 0;
      }     
    }
    else if(val == 3)
    {
      if(this.sliceStart < (this.totalProd - 15))
      {
      this.sliceStart += 15; 
      this.sliceEnd++;
      }
    }
    else if(val == 4)
    {
      this.sliceStart = this.totalProd - 15;   
      this.sliceEnd = this.numPages - 1;
    }
    
    if(this.Checkbtn == 0)
    this.getCurrentVehicles(this.sliceStart,ftday,this.sortsttr);
    else if(this.Checkbtn == 1)
    this.SearchCustomized(this.sliceStart,this.fnalsttr + this.sortsttr);
    else if(this.Checkbtn == 2)
    this.SearchCustomized(this.sliceStart,this.vehicstr);
  } 
   
}
