import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatafromApiService {
  public searchquery = '';
  constructor(public http: Http) { }    
  
  getVehicles(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
    //return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct + marka_name%20from%20main%20group%20by%20marka_id%20order%20by%20marka_name%20ASC','',options).map(response => response.text());  
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20marka_name,count(marka_name)%20from%20main%20group%20by%20marka_name%20order%20by%20count(marka_name)%20DESC','',options).map(response => response.text());  
  }

  getModels(make:string){ 
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct%20+%20model_name%20from%20main%20where ' + make + ' order%20by%20model_name','',options).map(response => response.text());  
  }

  getRemaining(make:string, model:string){ 
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20year,start%20from%20main%20where%20marka_name=%27' + make + '%27%20AND%20model_name=%27' + model + '%27','',options).map(response => response.text());  
  }

  getAllVehicles(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main',options).map(response => response.text());  
  }

  LoadVehicles(tday:string,qury:string,sortstr:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20where%20auction_date%20LIKE%20%27' + tday + '%%27' + sortstr + qury,options).map(response => response.text());  
  }

  LoadAuctions(tday:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers }); 
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct%20+%20auction%20from%20main%20where%20auction_date%20LIKE%20%27' + tday + '%%27',options).map(response => response.text());  
  }

  LoadAPIData(cat:string, tday:string,searchqury:string, cnt:number)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers }); 
    if(cnt == 1)
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct%20+%20' + cat + '%20from%20main%20where%20auction_date%20LIKE%20%27' + tday + '%%27%20order%20by%20' + cat,options).map(response => response.text());  
    else if(cnt == 2)
    {
    console.log('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct%20+%20' + cat + '%20from%20main%20where%20' + searchqury + '%20order%20by%20' + cat);
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct%20+%20' + cat + '%20from%20main%20where%20' + searchqury + '%20order%20by%20' + cat,options).map(response => response.text());  
    }
  }

  getCustomizedVehicles(fnalstr:string, qury:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    console.log('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20where%20' + fnalstr + qury);
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20where%20' + fnalstr + qury,options).map(response => response.text());  
  }

  getAllVehiclesSimilar(make:string, prodid:string){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });      
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20where%20marka_name=%27' + make + '%27%20limit%2011',options).map(response => response.text());  
  }

  /*getCustomizedVehicles(make:string, model:string, year:string, price:string, dates:string)
  {
    let ur = "";

    if(make != "" || dates != "")
    ur = 'https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20where%20' + dates + make + model + year + price + "%20limit%200,100";
    else
    ur = 'https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main';

 console.log(ur);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post(ur,options).map(response => response.text());  
  }*/

  getProductData(id:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20WHERE%20id=%27'+ id +'%27',options).map(response => response.text());  
  }

  getProdids(tday:string, searq:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    console.log('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20ID%20from%20main' + searq);
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20ID%20from%20main' + searq,options).map(response => response.text());  
  }

  getCount(qry:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20COUNT(*)%20from%20main' + qry,options).map(response => response.text());  
  }

  getCountries()
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.get('./assets/jsons/countries.json',options).map(response => response.text());  
  }

  getPorts(country: string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "country=" + country;
    return this.http.post('http://shinchuo-test2.com/shinchou/getportsbycountry.php',pram,options).map(response => response.text());  
  }

  signup(email:string, password: string, username: string, name: string, company: string, country: string, city:string, phone:string, address:string, port:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "email=" + email + "&password=" + password + "&username=" + username + "&name=" + name + "&company=" + company + "&country=" + country + "&city=" + city + "&phone=" + phone + "&address=" + address + "&port=" + port;
    return this.http.post('http://shinchuo-test2.com/shinchou/newsignup.php',pram,options).map(response => response.text());  
  }

  signin(email:string, password: string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "email=" + email + "&password=" + password;
    return this.http.post('http://shinchuo-test2.com/shinchou/newsignin.php',pram,options).map(response => response.text());  
  }

  getStats(username:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "client=" + username;
    return this.http.post('http://shinchuo-test2.com/shinchou/getuserview.php',pram,options).map(response => response.text());  
  }

  getClients(username:string, prodid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "client=" + username + "&prodid=" + prodid;
    return this.http.post('http://shinchuo-test2.com/shinchou/getclients.php',pram,options).map(response => response.text());  
  }

  savewishlist(pid:string, userid:string, wishlist:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "pid=" + pid + "&userid=" + userid + "&wishlist=" + wishlist;
    return this.http.post('http://shinchuo-test2.com/shinchou/savewishlist.php',pram,options).map(response => response.text());  
  }

  loadwishlist(lot:string, userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "lot=" + lot + "&userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/loadwishlist.php',pram,options).map(response => response.text());  
  }

  placebid(prodid:string, userid:string, foruser:string, estprice:string, bidmsg: string, dtetme:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "prodid=" + prodid + "&userid=" + userid + "&estprice=" + estprice + "&bidmsg=" + bidmsg + "&datetme=" + dtetme + "&foruser=" + foruser;
    return this.http.post('http://shinchuo-test2.com/shinchou/placebid.php',pram,options).map(response => response.text());  
  }

  checkbid(prodid:string, userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?prodid=" + prodid + "&userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/checkbids.php' + pram,options).map(response => response.text());  
  }

  sendVisited(prodid:string, userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?prodid=" + prodid + "&userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/sendvisited.php' + pram,options).map(response => response.text());  
  }

  checkVisited(prodid:string, userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?prodid=" + prodid + "&userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/checkvisited.php' + pram,options).map(response => response.text());  
  }


  /** Ibad's Work */
  loadBids(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_bids.php' + pram,options).map(response => response.json());  
  }


  loadExpiredBids(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_expired_bids.php' + pram,options).map(response => response.json());  
  }

  loadWishA(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_wish_A.php' + pram,options).map(response => response.json());  
  }

  loadWishB(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_wish_B.php' + pram,options).map(response => response.json());  
  }

  loadWishC(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_wish_C.php' + pram,options).map(response => response.json());  
  }

  loadWishD(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_wish_D.php' + pram,options).map(response => response.json());  
  }

  updateWishList(userid:string,pid:string,wishlist:string){
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid + "&pid=" + pid + "&wishlist="+wishlist;
    
    return this.http.post('http://shinchuo-test2.com/shinchou/update_wishlist.php' + pram,options).map(response => response.json());  
  }

  loadProfileData(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_user_profile.php' + pram,options).map(response => response.json());  
  }

  updateProfileData(email:string,fname: string,country: string, city:string, phone:string, address:string, port:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    //const pram = {email : email, password : password, fname : fname, lname : lname, company : company, country : country, city : city, phone : phone};
    let pram = "?userid=" + email + "&fname=" + fname + "&country=" + country + "&city=" + city + "&phone=" + phone + "&address=" + address + "&port=" + port;
    console.log("data sent "+pram);
    return this.http.post('http://shinchuo-test2.com/shinchou/update_user_profile.php' + pram,options).map(response => response.json());  
  }

  fetchLCC(email:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    //const pram = {email : email, password : password, fname : fname, lname : lname, company : company, country : country, city : city, phone : phone};
    let pram = "?userid=" + email;
    console.log("data sent "+pram);
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_lcc.php' + pram,options).map(response => response.json());  
  }

  fetchPurchase(email:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    //const pram = {email : email, password : password, fname : fname, lname : lname, company : company, country : country, city : city, phone : phone};
    let pram = "?userid=" + email;
    console.log("data sent "+pram);
    return this.http.post('http://shinchuo-test2.com/shinchou/fetch_purchase.php' + pram,options).map(response => response.json());  
  }

  /** Custom Make */
  getDBVehicles(userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "userid=" + userid;
    return this.http.post('http://shinchuo-test2.com/shinchou/getdbvehicle.php',pram,options).map(response => response.text());  
  }

  /** Custom Model */
  getDBModel(str:string, userid:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "userid=" + userid + "&str=" + str;
    return this.http.post('http://shinchuo-test2.com/shinchou/getdbmodel.php',pram,options).map(response => response.text());  
  }

  /**Stocks */
  getStocks(username:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "username=" + username;
    return this.http.post('http://shinchuo-test2.com/shinchou/getstocks.php',pram,options).map(response => response.text());  
  }

  getSaleuser(username:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "username=" + username;
    return this.http.post('http://shinchuo-test2.com/shinchou/getsaleuser.php',pram,options).map(response => response.text());  
  }

}
