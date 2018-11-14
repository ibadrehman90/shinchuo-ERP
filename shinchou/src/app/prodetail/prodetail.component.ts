import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DatafromApiService } from './../datafrom-api.service';


@Component({
  selector: 'app-prodetail',
  templateUrl: './prodetail.component.html',
  styleUrls: ['./prodetail.component.css']
})
export class ProdetailComponent implements OnInit {
  model: any = {};
  productID: string;
  public incomingData;
  public imageData;
  public imagethumbs;
  public Mileage;
  public Lot;
  public Auction;
  public AuctionDate;
  public Chassis;
  public Year;
  public Engine;
  public Color;
  public Make;
  public Model;
  public Price;
  public Transmission;
  public Grade;
  public Rate;
  public AllVehicleData;
  public imagelength;
  public img4 = false;
  public img8 = false;
  public loginCheck = false;
  public calculatorcheck = false;
  public statArray = new Array();
  public nextStr = "";
  public prevStr = "";  
  public Clients;
  public userrole = "";
  public prodids;
  public loggedinuser = "";

  constructor(public myService : DatafromApiService,private route: ActivatedRoute, private router: Router) {
    document.getElementById("Loader").style.display = "block";
    this.productID = route.snapshot.params['id'];   
    if(window.localStorage.getItem("username") != null || window.localStorage.getItem("username") != undefined)
    {
      this.loginCheck = true;
      this.loggedinuser = window.localStorage.getItem("username");
    }
    else
    {
      window.localStorage.setItem("ReturnUrl", this.productID);
      this.router.navigate(["account"]);
    }
    //this.getData();  
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      document.getElementById("Loader").style.display = "block";
      this.productID = params['id']; 
      
      if(this.loginCheck == true)
      {
        this.CheckBid();      
        this.LoadWishlist(this.productID);
        this.SendVisited(this.productID);
        this.loggedinuser = window.localStorage.getItem("username");

        this.userrole = window.localStorage.getItem("userrole");
        if(this.userrole == "salesuser")
        {
          this.getClients();
        }
        else
        {
        this.getStats();
        }
      }

      this.model.estprice = 0;
      this.getProdids();
      this.getData(); 
    });
  }

  getProdids()
  {
    let tday = new Date();
    let ftday = this.formatCurrentDate(tday);
    
    let searchq = '';
    
    if(window.localStorage.getItem("searchQ") === null)
    {
      searchq = "%20where%20auction_date%20LIKE%20%27" + ftday + "%%27";      
    }
    else
    searchq = "%20where%20" + window.localStorage.getItem("searchQ");

    console.log(searchq);

    this.myService.getProdids(ftday, searchq).subscribe((data)=>{          
      let cc = JSON.parse(data); 
      console.log(cc);
      this.prodids = this.getColumnfromArray(cc, "ID");
      document.getElementById("NextPrev").style.display = "block";
      this.getPrevNext();
    },err => {      
      console.error(err);    
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

  getClients()
  {
    this.myService.getClients(window.localStorage.getItem("username"), this.productID).subscribe((data)=>{          
      this.Clients = JSON.parse(data).Status; 
    },err => {      
      console.error(err);    
    }); 
  }

  NavigateID(vid)
  {
    this.router.navigate(['prodetail',vid]);
  }

  getPrevNext()
  {
    let prodid = this.prodids;
    let val = prodid.indexOf(this.productID);
    
    this.nextStr = prodid[val + 1];
    this.prevStr = prodid[val - 1];
  }

  getStats()
  {
    this.myService.getStats(window.localStorage.getItem("username")).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;  
      this.statArray = myd[0];
      console.log(this.statArray);
    },err => {      
      console.error(err);    
    }); 
  }

  getData()
  {
    this.myService.getProductData(this.productID).subscribe((data)=>{          
      this.incomingData = JSON.parse(data);
      console.log(this.incomingData);
      let imgs = this.incomingData[0].IMAGES;
      this.imageData = imgs.split('#');


      this.imagethumbs = this.imageData[0];

      this.imageData.shift();
      this.imagelength = this.imageData.length;

      if(this.imagelength > 4)
      this.img4 = true;
      else
      {
      this.img4 = false;
      this.img8 = false;
      }

      if(this.imagelength > 8)
      this.img8 = true;
      else
      this.img8 = false;

      this.Mileage = this.incomingData[0].MILEAGE;
      this.Lot = this.incomingData[0].LOT;
      this.Auction = this.incomingData[0].AUCTION;
      this.AuctionDate = this.incomingData[0].AUCTION_DATE;
      this.Chassis = this.incomingData[0].KUZOV;
      this.Color = this.incomingData[0].COLOR;
      this.Engine = this.incomingData[0].ENG_V;
      this.Year = this.incomingData[0].YEAR;
      this.Engine = this.incomingData[0].ENG_V;
      this.Make = this.incomingData[0].MARKA_NAME;
      this.Model = this.incomingData[0].MODEL_NAME; 
      this.Price = this.incomingData[0].START; 
      this.Transmission = this.incomingData[0].KPP;
      this.Grade = this.incomingData[0].GRADE;
      this.Rate = this.incomingData[0].RATE;
      
    },err => {      
      console.error(err);    
    }, () => {
      setTimeout(() => {
        document.getElementById("Loader").style.display = "none";
      });
    });
  }

  SendVisited(prod)
  {
    this.myService.sendVisited(prod, window.localStorage.getItem("username")).subscribe((data)=>{          
      console.log(data);
    },err => {      
      console.error(err);    
    });
  }

  CheckBid()
  {
    this.myService.checkbid(this.productID, window.localStorage.getItem("username")).subscribe((data)=>{          
      console.log(data);
      let myd = JSON.parse(data);        

      if(myd.Status == "null")
      {        
        this.model.estprice = 0;
        this.model.bidmsg = undefined;
        //document.getElementById("calcdiv").style.display = "block";
        document.getElementById("btncalcbtn").style.display = "inline-block";
        //document.getElementById("bidplaced").style.display = "none";
      }
      else
      {
        this.model.estprice = 0;
        this.model.bidmsg = undefined;
        //document.getElementById("calcdiv").style.display = "none";
        document.getElementById("btncalcbtn").style.display = "none";
        //document.getElementById("bidplaced").style.display = "block";
      }

    },err => {      
      console.error(err);    
    });
  }

  PlaceBid()
  {
    if(this.loginCheck == false)
    {
      document.getElementById("msger").innerHTML = "Please Login to Place Bid!";
      document.getElementById("msgerr").style.display = "block";

      setTimeout(function() {
        document.getElementById("msgerr").style.display = "none";        
      }, 5000);
    }
    else
    {
      
        var checker = 0;
        if(this.model.estprice != undefined || this.model.estprice != "0")
        { 
          if(parseInt(this.model.estprice.toString().replace(/,/gi,'')) < parseInt(this.Price))
          {            
            checker = 2;
          }
          else
          {
            checker = 1;
          }
          
        }
        else
        {
          checker = 0;      
        }
        console.log(this.model.estprice);

        if(checker == 1)
        {

          document.getElementById("msgconfirm").style.display = "block";   
          $('#myModal').modal('toggle');      
          
        }
        else if(checker == 0)
        {
          document.getElementById("lessbidmsg").innerHTML = "Enter Bid amount to Continue!";
          document.getElementById("lessbidmsg").style.display = "block";
          setTimeout(function() {
            document.getElementById("lessbidmsg").style.display = "none";        
          }, 5000);
        }
        else if(checker == 2)
        {
          document.getElementById("lessbidmsg").innerHTML ="Bid amount is too small.";
          document.getElementById("lessbidmsg").style.display = "block";
          setTimeout(function() {
            document.getElementById("lessbidmsg").style.display = "none";        
          }, 5000);
        }
    }
  }

  Confirm()
  {
    document.getElementById("Loader").style.display = "block";
    var d = new Date();
    let userid = window.localStorage.getItem("username");
    let for_user = "";
    if(this.userrole == "salesuser")
    {
      for_user= window.localStorage.getItem("username");
      userid = (<HTMLInputElement>document.getElementById("clientselect")).value;
    }
        
            this.myService.placebid(this.productID, userid, for_user, this.model.estprice.replace(/,/gi,''), this.model.bidmsg, d.toString()).subscribe((data)=>{          
              console.log(data);
              let myd = JSON.parse(data);        
      
              if(myd.Status == "Done")
              {               
                //document.getElementById("calcdiv").style.display = "none";
                if(this.userrole == "salesuser")
                {
                  this.getClients();  
                }
                else
                {
                document.getElementById("btncalcbtn").style.display = "none";
                }
                document.getElementById("bidsuccess").style.display = "block";         
                //document.getElementById("bidplaced").style.display = "block";

                document.getElementById("msgconfirm").style.display = "none";
                document.getElementById("Loader").style.display = "none"; 
                //document.getElementById("btncalcbtn").innerHTML = "Place Bid";
                this.calculatorcheck = false;
              }
              else
              {
                document.getElementById("msger").innerHTML ="Some Error Occured! Please Try again Later";
                document.getElementById("msgerr").style.display = "block";
                setTimeout(function() {
                  document.getElementById("msgerr").style.display = "none";        
                }, 5000);
              }

            },err => {      
              console.error(err);    
            });

  }

  ConfirmClose()
  {
    document.getElementById("msgconfirm").style.display = "none"; 
  }

  ConfirmBClose()
  {
    document.getElementById("bidsuccess").style.display = "none";
    this.model.estprice = 0;
    this.model.bidmsg = undefined; 
  }

  showCalculator()
  {
    if(this.calculatorcheck == false)
    {
    document.getElementById("calcdiv").style.display = "block"; 
    document.getElementById("btncalcbtn").innerHTML = "Close Calculator";
    this.calculatorcheck = true;
    }
    else
    {
      document.getElementById("calcdiv").style.display = "none"; 
      document.getElementById("btncalcbtn").innerHTML = "Place Bid";
      this.calculatorcheck = false;
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
  
  getColumnfromArray(matrix, col)
  {
      var column = [];
      for(var i=0; i<matrix.length; i++){
         column.push(matrix[i][col]);
      }
      return column;
  }

  SelectPic(event)
  {
    (<HTMLImageElement>document.getElementById("mainimg")).src = event.target.src;    
  }

 
  SaveWishlist(event, prodid)
  {    
    this.myService.savewishlist(prodid, window.localStorage.getItem("username"), '1').subscribe((data)=>{          
      console.log(data);
    },err => {      
      console.error(err);    
    });
    
  }

  CloseWin()
  {
    window.close();
  }

  LoadWishlist(prodid)
  {    
     this.myService.loadwishlist(prodid, window.localStorage.getItem("username")).subscribe((data)=>{          
        let wish = JSON.parse(data); 
        
        if(wish.wishlist != "null")
        {
          let x = (<HTMLInputElement>document.getElementById("prodwish"));
          x.checked = true;        
        }        
        
      },err => {      
        console.error(err);    
      }); 
  }
}
