import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { stat } from 'fs';

@Injectable()
export class DatafromServicesService {

  constructor(public http: Http) { }    
  
  getuserdetail(username:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?username=" + username;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/userdetail.php' + pram,options).map(response => response.text());  
  }

  getAllClients(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getclients.php',options).map(response => response.text());  
  }

  getAllCategories(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getcategories.php',options).map(response => response.text());  
  }

  signin(email:string, password: string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?email=" + email + "&password=" + password;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/signin.php' + pram,options).map(response => response.text());  
  }

  updateClients(email:string, approvedby: string, approval: string, category: string, dte: string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?email=" + email + "&apprby=" + approvedby + "&appr=" + approval + "&cat=" + category + "&dtetme=" + dte;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateclient.php' + pram,options).map(response => response.text());  
  }

  getSingleClients(email:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?email=" + email;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsingleclient.php' + pram,options).map(response => response.text());  
  }

  addCategory(cat:string,authid:string, dte:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let pram = "?cat=" + cat + "&authid=" + authid + "&dte=" +dte;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addcategory.php' + pram,options).map(response => response.text());  
  }
  
  /** Shipper */

  addShipper(snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, dtep:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&dte=" + dtep;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addshipper.php',pram,options).map(response => response.text());  
  }

  getShippers(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getshippers.php',options).map(response => response.text());  
  }

  getSingleShipper(s_id:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + s_id;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsingleshipper.php',pram,options).map(response => response.text());  
  }

  updateShipper(sid:string,snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, dtep:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + sid + "&sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&dte=" + dtep;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateshipper.php',pram,options).map(response => response.text());  
  }

  searchShipper(snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, status:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&status=" + status;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchshippers.php',pram,options).map(response => response.text());  
  }

  updateStatusShipper(sid:string, status:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + sid + "&status=" + status;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatusshipper.php',pram,options).map(response => response.text());  
  }

  /** Booking Agent */

  addBookingAgent(snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, dtep:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&dte=" + dtep;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addbookingagent.php',pram,options).map(response => response.text());  
  }

  getBookingAgent(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getbookingagents.php',options).map(response => response.text());  
  }

  getsingleBookingAgent(s_id:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + s_id;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsinglebookingagent.php',pram,options).map(response => response.text());  
  }

  updateBookingAgent(sid:string,snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, dtep:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + sid + "&sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&dte=" + dtep;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatebookingagent.php',pram,options).map(response => response.text());  
  }

  searchBookingAgent(snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, status:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&status=" + status;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchbookingagents.php',pram,options).map(response => response.text());  
  }

  updateStatusBookingAgent(sid:string, status:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + sid + "&status=" + status;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatusbookingagent.php',pram,options).map(response => response.text());  
  }

  /** Transport Company */

  addTransportCompany(snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, dtep:string, address:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&dte=" + dtep + "&address=" + address;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addtransportcompany.php',pram,options).map(response => response.text());  
  }

  getTransportCompany(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/gettransportcompany.php',options).map(response => response.text());  
  }

  getsingleTransportCompany(s_id:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + s_id;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsingletransportcompany.php',pram,options).map(response => response.text());  
  }

  updateTransportCompany(sid:string,snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, dtep:string, address:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + sid + "&sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&dte=" + dtep + "&address=" + address;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatetransportcompany.php',pram,options).map(response => response.text());  
  }

  searchTransportCompany(snamep:string, cpersonp:string, telp:string, mobp:string, faxp:string, emailp:string, status:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "sname=" + snamep + "&cperson=" + cpersonp + "&tel=" + telp + "&mob=" + mobp + "&fax=" + faxp + "&email=" + emailp + "&status=" + status;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchtransportcompany.php',pram,options).map(response => response.text());  
  }

  updateStatusTransportCompany(sid:string, status:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "s_id=" + sid + "&status=" + status;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatustransportcompany.php',pram,options).map(response => response.text());  
  }

  /** Auction */

  addAuction(aname:string, pos:string, tel:string, fax:string, cname:string, email:string, dte:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "aname=" + aname + "&pos=" + pos + "&tel=" + tel + "&cname=" + cname + "&fax=" + fax + "&email=" + email + "&dte=" + dte;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addauction.php',pram,options).map(response => response.text());  
  }

  getAuctions(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getauctions.php',options).map(response => response.text());  
  }

  getSingleAuction(a_id:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "a_id=" + a_id;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsingleauction.php',pram,options).map(response => response.text());  
  }

  updateAuction(aid:string, aname:string, pos:string, tel:string, fax:string, cname:string, email:string, dte:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "a_id=" + aid + "&aname=" + aname + "&pos=" + pos + "&tel=" + tel + "&cname=" + cname + "&fax=" + fax + "&email=" + email + "&dte=" + dte;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateauction.php',pram,options).map(response => response.text());  
  }

  searchAuction(aname:string, pos:string, tel:string, fax:string, cname:string, email:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "aname=" + aname + "&pos=" + pos + "&tel=" + tel + "&cname=" + cname + "&fax=" + fax + "&email=" + email;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchauctions.php',pram,options).map(response => response.text());  
  }

  /** Vehicles */

  addVehicle(make:string, mod:string, prefix:string, year:string, length:string, width:string, height:string, m3:string, kgs:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "make=" + make + "&mod=" + mod + "&prefix=" + prefix + "&year=" + year + "&length=" + length + "&width=" + width + "&height=" + height + "&m3=" + m3 + "&kgs=" + kgs;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addvehicle.php',pram,options).map(response => response.text());  
  }

  getVehicles(){          
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getvehicles.php',options).map(response => response.text());  
  }

  getSingleVehicle(v_id:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "v_id=" + v_id;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsinglevehicle.php',pram,options).map(response => response.text());  
  }

  updateVehicle(vid:string, make:string, mod:string, prefix:string, year:string, length:string, width:string, height:string, m3:string, kgs:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "v_id=" + vid + "&make=" + make + "&mod=" + mod + "&prefix=" + prefix + "&year=" + year + "&length=" + length + "&width=" + width + "&height=" + height + "&m3=" + m3 + "&kgs=" + kgs;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatevehicle.php',pram,options).map(response => response.text());  
  }

  searchVehicle(make:string, mod:string, prefix:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let pram = "make=" + make + "&mod=" + mod + "&prefix=" + prefix;
    return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchvehicles.php',pram,options).map(response => response.text());  
  }

/** Yard */

addYard(yardname, branch, streetaddress, billaddress, city, prefacture, postalcode, country, tel, fax, email, reps, ports, services, dtep)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardname=" + yardname + "&branch=" + branch + "&streetaddress=" + streetaddress + "&billaddress=" + billaddress + "&city=" + city + "&country=" + country + "&postalcode=" + postalcode + "&tel=" + tel + "&fax=" + fax + "&prefacture=" + prefacture + "&reps=" + reps + "&email=" + email + "&ports=" + ports + "&services=" + services + "&dte=" + dtep;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addyard.php',pram,options).map(response => response.text());  
}

getYards(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyards.php',options).map(response => response.text());  
}

getSingleYard(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsingleyard.php',pram,options).map(response => response.text());  
}

getreps(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getreps.php',pram,options).map(response => response.text());  
}

getyardyardservices(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyardyardservices.php',pram,options).map(response => response.text());  
}

getyardports(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyardports.php',pram,options).map(response => response.text());  
}

addyardport(yardid, tab, cat, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardid=" + yardid + "&tab=" + tab + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addyardports.php',pram,options).map(response => response.text());  
}

deleteyardport(tab, cat, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "tab=" + tab + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/deleteyardport.php',pram,options).map(response => response.text());  
}

updateYard_Address(yid:string,name:string, address:string, billingaddress:string, city:string, country:string, pos:string, prefacture:string, dtep:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + yid + "&name=" + name + "&address=" + address + "&billingaddress=" + billingaddress + "&city=" + city + "&country=" + country + "&pos=" + pos + "&prefacture=" + prefacture + "&dte=" + dtep;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateyardaddress.php',pram,options).map(response => response.text());  
}

updateYard_Contact(yid:string,tel:string, fax:string, email:string, dtep:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + yid + "&tel=" + tel + "&fax=" + fax + "&email=" + email + "&dte=" + dtep;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateyardcontact.php',pram,options).map(response => response.text());  
}

updateYard_Reps(yardid, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardid=" + yardid + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateyardreps.php',pram,options).map(response => response.text());  
}

searchYard(name:string, email:string, city:string, country:string, postcode:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "name=" + name + "&email=" + email + "&city=" + city + "&country=" + country + "&pos=" + postcode + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchyards.php',pram,options).map(response => response.text());  
}

updateStatusYard(yid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + yid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatusyard.php',pram,options).map(response => response.text());  
}

/** LCC Settings */
getDefaultCalc(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getdefaultcalc.php',options).map(response => response.text());  
}

updateDefaultCalc(agent:string, gst:string, freight:string, exchange:string, dte:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "agent=" + agent + "&gst=" + gst + "&freight=" + freight + "&exchange=" + exchange + "&dte=" + dte;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatedefaultcalc.php',pram,options).map(response => response.text());  
}

getOtherCalc(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getothercalc.php',options).map(response => response.text());  
}

updateOtherCalc(cname:string, agent:string, gst:string, freight:string, exchange:string, dte:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "cname=" + cname + "&agent=" + agent + "&gst=" + gst + "&freight=" + freight + "&exchange=" + exchange + "&dte=" + dte;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateothercalc.php',pram,options).map(response => response.text());  
}

/** Buyer/Sales */

addBSUser(username:string, pass:string, email:string, bname:string, city:string, country:string, mob:string, status:string, showlcc:string, role:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&pass=" + pass + "&email=" + email + "&bname=" + bname + "&city=" + city + "&country=" + country + "&mob=" + mob + "&status=" + status + "&showlcc=" + showlcc + "&role=" + role;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addbsuser.php',pram,options).map(response => response.text());  
}

getBSUsers(role:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "role=" + role;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getbsusers.php',pram,options).map(response => response.text());  
}

getSingleBSUser(username:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsinglebsuser.php',pram,options).map(response => response.text());  
}

updateBSUser(username:string,bname:string, mob:string, email:string, role:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&bname=" + bname + "&email=" + email + "&mob=" + mob + "&role=" + role;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatebsuser.php',pram,options).map(response => response.text());  
}

/*searchBSUser(username:string, pass:string, email:string, name:string, city:string, country:string, mob:string, status:string, showlcc:string, role:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&pass=" + pass + "&email=" + email + "&name=" + name + "&city=" + city + "&country=" + country + "&mob=" + mob + "&status=" + status + "&showlcc=" + showlcc + "&role=" + role;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchbsusers.php',pram,options).map(response => response.text());  
}*/

updateStatusBSUser(username:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatusbsuser.php',pram,options).map(response => response.text());  
}

updateLCCBSUser(username:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatelccbsuser.php',pram,options).map(response => response.text());  
}

changePassword(username:string, pass:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&pass=" + pass;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/changebsuserpassword.php',pram,options).map(response => response.text());  
}

getAuctionsAPI(sday:string){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20auction%20from%20main%20where%20auction_date%20LIKE%20%27' + sday + '%%27%20group by auction','',options).map(response => response.text());  
}

assignauction(email:string, fromdate:string, auction:string, sday:string, dte:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + email + "&fromdate=" + fromdate + "&auction=" + auction + "&sday=" + sday + "&dte=" + dte;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/assignauction.php',pram,options).map(response => response.text());  
}

getassignauction(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getassignauction.php',options).map(response => response.text());  
}

/** Purchased List */
getPurchased(role:string, aucs:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "role=" + role + "&aucs=" + aucs;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getpurchased.php',pram,options).map(response => response.text());  
}

searchPurchased(role:string, aucs:string, scode:string, client:string, dst:string, auction:string, adate:string, pos:string, dai:string, lot:string, prefix:string, serial:string, make:string, model:string, year:string, bidprice:string, aucfee:string, exportcharge:string, noplate:string, plateserial:string, shaken:string, fudosha:string, transmission:string, enginecc:string, mileage:string, color:string, colorcode:string, buyingcom:string, buyer:string, remark:string, landedvalue:string, soldprice:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "scode=" + scode  + "&client=" + client + "&dst=" + dst + "&auction=" + auction + "&adate=" + adate + "&pos=" + pos + "&dai=" + dai + "&lot=" + lot + "&prefix=" + prefix + "&serial=" + serial + "&make=" + make + "&model=" + model + "&year=" + year + "&bidprice=" + bidprice + "&aucfee=" + aucfee + "&exportcharge=" + exportcharge + "&noplate=" + noplate + "&plateserial=" + plateserial + "&shaken=" + shaken + "&fudosha=" + fudosha + "&transmission=" + transmission + "&enginecc=" + enginecc + "&mileage=" + mileage + "&color=" + color + "&colorcode=" + colorcode + "&buyingcom=" + buyingcom + "&buyer=" + buyer + "&remark=" + remark + "&landedvalue=" + landedvalue + "&soldprice=" + soldprice + "&role=" + role + "&aucs=" + aucs;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchpurchased.php',pram,options).map(response => response.text());  
}

updatePurchased(cat:string, val:string, sid:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "sid=" + sid + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatepurchased.php',pram,options).map(response => response.text());  
}

updateStatusAuctionAssignment(aid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "aid=" + aid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatusauctionassignment.php',pram,options).map(response => response.text());  
}

/** Clients */

addClient(username:string, email:string, pass:string, bname:string, city:string, country:string, mob:string, port:string, company:string, address:string, salesuser:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&email=" + email + "&pass=" + pass + "&port=" + port + "&bname=" + bname + "&city=" + city + "&country=" + country + "&mob=" + mob + "&company=" + company + "&address=" + address + "&salesuser=" + salesuser;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addclient.php',pram,options).map(response => response.text());  
}

getClients(role:string, username:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "role=" + role + "&salesuser=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getclients.php',pram,options).map(response => response.text());  
}

getSingleClient(email:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + email;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsingleclient.php',pram,options).map(response => response.text());  
}

updateClient(username:string, bname:string, city:string, country:string, mob:string, port:string, company:string, address:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + username + "&port=" + port + "&bname=" + bname + "&city=" + city + "&country=" + country + "&mob=" + mob + "&company=" + company + "&address=" + address;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateclient.php',pram,options).map(response => response.text());  
}

updateLCCClient(email:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + email + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatelccclient.php',pram,options).map(response => response.text());  
}

updateStatusClient(email:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + email + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatestatusclient.php',pram,options).map(response => response.text());  
}

getCalc(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getcalc.php',options).map(response => response.text());  
}

updateSelect(email:string, cat:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + email + "&cat=" + cat + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateselect.php',pram,options).map(response => response.text());  
}

getUserView(role:string, username:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "role=" + role + "&salesuser=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getuserview.php',pram,options).map(response => response.text());  
}

updateUserView(email:string, cat:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "email=" + email + "&cat=" + cat + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateuserview.php',pram,options).map(response => response.text());  
}

getClientsLCC(username:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "salesuser=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getclientslcc.php',pram,options).map(response => response.text());  
}

addRequest(username:string, agent:string, exchange:string, freight:string, dte:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&agent=" + agent + "&exchange=" + exchange + "&freight=" + freight + "&dte=" + dte;  
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addrequest.php',pram,options).map(response => response.text());  
}

getRequests(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getrequests.php',options).map(response => response.text());  
}

approverequest(sno:string, stat:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "sno=" + sno + "&status=" + stat;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/approverequest.php',pram,options).map(response => response.text());  
}

/** Bids */

getBids(cat:string, role:string, aucs:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "cat=" + cat + "&role=" + role + "&aucs=" + aucs;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getbids.php',pram,options).map(response => response.text());  
}

getAPIAuctions(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20auction%20from%20stats%20group%20by%20auction','',options).map(response => response.text());  
}

getAPIMake(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20marka_name%20from%20stats%20group%20by%20marka_name','',options).map(response => response.text());  
}

getAPIModel(lmt:string){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20MODEL_NAME%20from%20stats%20group%20by%20MODEL_NAME%20limit%20' + lmt + ',250','',options).map(response => response.text());  
}

getCountModel()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20COUNT(distinct%20model_name)%20from%20stats','',options).map(response => response.text());  
}

getAPIChassis(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20KUZOV%20from%20main%20group%20by%20KUZOV','',options).map(response => response.text());  
}

searchBids(lot:string, make:string, model:string, auction:string, chassis:string, salesuser:string, client:string, bfrom:string, bto:string, type:string, aucs:string, role:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "lot=" + lot + "&make=" + make + "&model=" + model + "&auction=" + auction + "&chassis=" + chassis + "&salesuser=" + salesuser + "&client=" + client + "&bfrom=" + bfrom + "&bto=" + bto + "&type=" + type + "&aucs=" + aucs + "&role=" + role;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchbids.php',pram,options).map(response => response.text());  
}

updateStatusBid(bidid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "b_id=" + bidid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatebidstatus.php',pram,options).map(response => response.text());  
}

getAPIDataMain(prodid:string){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20main%20where%20id=%27' + prodid + '%27','',options).map(response => response.text());  
}

getDataMain(prodid:string){          
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "prodid=" + prodid;    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getproddetail.php',pram,options).map(response => response.text());  
}

getAPIDataStat(prodid:string){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20*%20from%20stats%20where%20id=%27' + prodid + '%27','',options).map(response => response.text());  
}

addPurchase(id:string, client:string, auction:string, adate:string, lot:string, chassis:string, serial:string, make:string, model:string, year:string, bidamt:string, trans:string, engcc:string, mileage:string, color:string, buyer:string, remark:string, landed:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "lot=" + lot + "&id=" + id + "&adate=" + adate + "&serial=" + serial + "&bidamt=" + bidamt + "&make=" + make + "&model=" + model + "&auction=" + auction + "&chassis=" + chassis + "&trans=" + trans + "&cc=" + engcc + "&mileage=" + mileage + "&color=" + color + "&remark=" + remark + "&landed=" + landed + "&year=" + year + "&buyer=" + buyer + "&client=" + client;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addpurchase.php',pram,options).map(response => response.text());  
}

addSold(id:string, client:string, bidamt:string, buyer:string, remark:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "id=" + id + "&bidamt=" + bidamt + "&remark=" + remark + "&buyer=" + buyer + "&client=" + client;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addsold.php',pram,options).map(response => response.text());  
}

getBuyerAuction(username:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getbuyerauc.php',pram,options).map(response => response.text());  
}

getSalesClient(username:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsalesclient.php',pram,options).map(response => response.text());  
}

/** Dashboard */

getCountsData(field:string, tble:string, cond:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "field=" + field + "&tble=" + tble + "&cond=" + cond;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getcountsdata.php',pram,options).map(response => response.text());  
}

/** Delivery */
adddelivery(orderno:string, ordlist:string, orddate:string, trackingno, timeslot, remarks, user, aucid, tcompid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno + "&ordlist=" + ordlist + "&orddate=" + orddate + "&trackingno=" + trackingno + "&timeslot=" + timeslot + "&remarks=" + remarks + "&username=" + user + "&aucid=" + aucid + "&tcompid=" + tcompid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/adddelivery.php',pram,options).map(response => response.text());  
}

getdeliverylist(orderno:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getdeliverylist.php',pram,options).map(response => response.text());  
}

deletedelivery(oid:string, sid:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "oid=" + oid + "&sid=" + sid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/deletedelivery.php',pram,options).map(response => response.text());  
}

updatedeliverydetail(did, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "did=" + did + "&noplate=" + c1 + "&book=" + c2 + "&navicd=" + c3  + "&naviremote=" + c4 + "&nutlock=" + c5 + "&knob=" + c6 + "&other=" + c7 + "&tohon=" + c8 + "&crkeys=" + c9 + "&carremotekey=" + c10 + "&sd=" + c11 + "&mnote=" + c12 + "&monitor=" + c13;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatedeliverydetail.php',pram,options).map(response => response.text());  
}

getDeliveries()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getdeliveries.php',options).map(response => response.text());  
}

searchDeliveries(orderno, ofrom, oto, trans, pick)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno + "&ofrom=" + ofrom + "&oto=" + oto + "&trans=" + trans + "&pick=" + pick;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchdeliveries.php',pram,options).map(response => response.text());  
}

getDelivery(orderno:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getdelivery.php',pram,options).map(response => response.text());  
}

updateDelivery(deliveryno, deliverydate, trackingno, tcomp, acomp, remark, timeslot)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "deliveryno=" + deliveryno + "&deliverydate=" + deliverydate + "&trackingno=" + trackingno + "&tcomp=" + tcomp + "&acomp=" + acomp + "&remark=" + remark + "&timeslot=" + timeslot;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatedelivery.php',pram,options).map(response => response.text());  
}

/** Orders */
addorder(orderno:string, ordlist:string, orddate:string, pickupdate:string, btnselect:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno + "&ordlist=" + ordlist + "&orddate=" + orddate + "&pickupdate=" + pickupdate + "&btnselect=" + btnselect;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addorder.php',pram,options).map(response => response.text());  
}

getorderlist(orderno:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getorderlist.php',pram,options).map(response => response.text());  
}

updateOrder(field:string, value:string, oid:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "field=" + field + "&value=" + value + "&oid=" + oid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateorder.php',pram,options).map(response => response.text());  
}

updateChecks(field:string, value:string, oid:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "field=" + field + "&value=" + value + "&oid=" + oid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatechecks.php',pram,options).map(response => response.text());  
}

updateMainorder(cat:string, val:string, sid:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "sid=" + sid + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatemainorders.php',pram,options).map(response => response.text());  
}

updateOrderDetail(ordercode, orderdate, dropoffdate, tcomp, ycomp, status, pickupdate)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ordercode=" + ordercode + "&orderdate=" + orderdate + "&dropoffdate=" + dropoffdate + "&tcomp=" + tcomp + "&ycomp=" + ycomp + "&status=" + status + "&pickupdate=" + pickupdate;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateorderdetail.php',pram,options).map(response => response.text());  
}

deleteorder(oid:string, sid:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "oid=" + oid + "&sid=" + sid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/deleteorder.php',pram,options).map(response => response.text());  
}

searchOrder(orderno:string, client:string, dst:string, auction:string, adate:string, pos:string, dai:string, lot:string, prefix:string, make:string, model:string, noplate:string, fudosha:string, yard:string, nocut:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno + "&client=" + client + "&dst=" + dst + "&auction=" + auction + "&adate=" + adate + "&pos=" + pos + "&dai=" + dai + "&lot=" + lot + "&prefix=" + prefix + "&make=" + make + "&model=" + model + "&noplate=" + noplate + "&fudosha=" + fudosha + "&yard=" + yard + "&nocut=" + nocut;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchorder.php',pram,options).map(response => response.text());  
}

searchmainOrder(orderno, ofrom, oto, trans, pick, drop)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno + "&ofrom=" + ofrom + "&oto=" + oto + "&trans=" + trans + "&pick=" + pick + "&drop=" + drop;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchmainorder.php',pram,options).map(response => response.text());  
}

searchmainpastOrder(orderno, ofrom, oto, trans, pick, drop)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno + "&ofrom=" + ofrom + "&oto=" + oto + "&trans=" + trans + "&pick=" + pick + "&drop=" + drop;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchmainpastorder.php',pram,options).map(response => response.text());  
}

getOrderTransport()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getordertransport.php',options).map(response => response.text());  
}

UpdateCurrLoc_Pickup()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatecurloc_cron.php',options).map(response => response.text());  
}

getPastOrderTransport()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getpastordertransport.php',options).map(response => response.text());  
}

getOrders(orderno:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderno=" + orderno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getorders.php',pram,options).map(response => response.text());  
}

getVehicleHistory()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getvehiclehistory.php',options).map(response => response.text());  
}

searchVehicleHistory(lot, client, chassis)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "lot=" + lot + "&client=" + client + "&serial=" + chassis;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchvehiclehistory.php',pram,options).map(response => response.text());  
}

/** Send Email */
sendEmail(str:string, email:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "str=" + str + "&email=" + email;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/sendemail.php',pram,options).map(response => response.text());  
}

/** Stock Sold */
soldstock(sid:string, samount:string, cmment:string, soldto:string, dte:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "sid=" + sid + "&samount=" + samount + "&cmment=" + cmment + "&soldto=" + soldto + "&dte=" + dte;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/soldstock.php',pram,options).map(response => response.text());  
}

getStocksold(username:string, role:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "userid=" + username + "&role=" + role;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getsoldstock.php',pram,options).map(response => response.text());  
}

CancelStocksold(soldid, sid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "soldid=" + soldid + "&sid=" + sid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/cancelsoldstock.php',pram,options).map(response => response.text());  
}

/** Group Clients */
addgroup(gname, emails, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "gname=" + gname + "&emails=" + emails + "&username=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addgroup.php',pram,options).map(response => response.text());  
}

getgroups(username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getclientgroup.php',pram,options).map(response => response.text());  
}

updategroup(gid, stat)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "gid=" + gid + "&status=" + stat;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateclientgroup.php',pram,options).map(response => response.text());  
}

/** Custom Make */
getCountries()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.get('./assets/jsons/countries.json',options).map(response => response.text());  
}

getMakes(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  //return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20distinct + marka_name%20from%20main%20group%20by%20marka_id%20order%20by%20marka_name%20ASC','',options).map(response => response.text());  
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20marka_name,count(marka_name)%20from%20stats%20group%20by%20marka_name%20order%20by%20count(marka_name)%20DESC','',options).map(response => response.text());  
}

getModels(make:string){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });    
  console.log('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20model_name%20from%20main%20group%20by%20model_name%20where%20marka_name=%27' + make + '%27');
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://75.125.226.218/xml/json?code=Vdf3_ryhAjmf7&sql=select%20model_name%20from%20stats%20where%20marka_name=%27' + make + '%27%20group%20by%20model_name','',options).map(response => response.text());  
}

getcustmake(country)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "country=" + country;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getcustommakes.php',pram,options).map(response => response.text());  
}

getcustmodel(country, make)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "country=" + country + "&make=" + make;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getcustommodels.php',pram,options).map(response => response.text());  
}

addcustmake(country, makelist, otherlist)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "country=" + country + "&makelist=" + makelist + "&otherlist=" + otherlist;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addcustomemake.php',pram,options).map(response => response.text());  
}

addcustmodel(country, make, makelist, otherlist)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "country=" + country + "&make=" + make + "&makelist=" + makelist + "&otherlist=" + otherlist;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addcustommodel.php',pram,options).map(response => response.text());  
}

/** Sales Stocks */
loadSalesStocks(bsuser)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + bsuser;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/loadsalestocks.php',pram,options).map(response => response.text());  
}

/** Export Data */
exportpurchased()
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "";
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/exportpurchasedlist.php',pram,options).map(response => response.text());  
}

uploadImage(headers, options, formData)
{
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/uploadnewimage.php', formData, options).map(response => response.text());  
}

uploadProfileImage(options, formData)
{
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateprofilepic.php', formData, options).map(response => response.text());  
}

updateimagedata(prodid, newurl)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "prodid=" + prodid + "&newurl=" + newurl;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateimagedata.php',pram,options).map(response => response.text());  
}

updatesheetdata(prodid, oldurl, newurl)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "prodid=" + prodid + "&oldurl=" + oldurl + "&newurl=" + newurl;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatesheetdata.php',pram,options).map(response => response.text());  
}

/** poscompanies */
getposcompanies()
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "";
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getauctions.php',pram,options).map(response => response.text());  
}

/** Order EMail */
sentOrderId(orderid, email, remarks)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "orderid=" + orderid + "&email=" + email + "&remarks=" + remarks;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/sentorderemail.php',pram,options).map(response => response.text());  
}

/** Current Location */
updatecurrentlocation(ordercode)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ordercode=" + ordercode;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatecurloc_completed.php',pram,options).map(response => response.text());  
}


/** Preshipment */

getAuctionVehicles()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getauctionvehicles.php',options).map(response => response.text());  
}

getYardVehicles()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyardvehicles.php',options).map(response => response.text());  
}

getYardVehicles2()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyardvehicles2.php',options).map(response => response.text());  
}

getYardVehicles3()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyardvehicles3.php',options).map(response => response.text());  
}

searchYardVehicles(lot, client, port, country, yard, auction, serial)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "lot=" + lot + "&client=" + client + "&port=" + port + "&country=" + country + "&yard=" + yard + "&auction=" + auction + "&serial=" + serial;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchyardvehicle.php',pram,options).map(response => response.text());  
}

searchYardVehicles2(lot, client, port, country, yard, auction, serial)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "lot=" + lot + "&client=" + client + "&port=" + port + "&country=" + country + "&yard=" + yard + "&auction=" + auction + "&serial=" + serial;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/searchyardvehicle2.php',pram,options).map(response => response.text());  
}

/** Color Theme */

updatecolor(username, color)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&color=" + color;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updatecolor.php',pram,options).map(response => response.text());  
}

/** Ports */
addport(portname, cntry, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&portname=" + portname + "&country=" + cntry;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addport.php',pram,options).map(response => response.text());  
}

getports(cntry)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "country=" + cntry;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getports.php',pram,options).map(response => response.text());  
}

getpendingports(cntry)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "country=" + cntry;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getpendingports.php',pram,options).map(response => response.text());  
}

getallpendingports()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getallpendingports.php',options).map(response => response.text());  
}

updatePortApproval(portid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "portid=" + portid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateportapproval.php',pram,options).map(response => response.text());  
}

/** Yard Services */
addyardservice(servicename, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&servicename=" + servicename;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/addyardservice.php',pram,options).map(response => response.text());  
}

getyardservice()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getyardservices.php',options).map(response => response.text());  
}

getpendingyardservice()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getpendingyardservices.php',options).map(response => response.text());  
}

getallyardservices()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/getallpendingyardservices.php',options).map(response => response.text());  
}

updateServiceApproval(ysid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ysid=" + ysid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/updateserviceapproval.php',pram,options).map(response => response.text());  
}

/** Booking Agency Services */

addbookingservice(servicename, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&servicename=" + servicename;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagencyservice/addbs.php',pram,options).map(response => response.text());  
}

getbookingservice()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagencyservice/getbs.php',options).map(response => response.text());  
}

getpendingbookingservice()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagencyservice/getpendingbs.php',options).map(response => response.text());  
}

getallbookingservices()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagencyservice/getallbs.php',options).map(response => response.text());  
}

updateBookingServiceApproval(ysid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ysid=" + ysid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagencyservice/updatebsapproval.php',pram,options).map(response => response.text());  
}

/** Vessel */

addvessel(servicename, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&servicename=" + servicename;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/vessel/addvessel.php',pram,options).map(response => response.text());  
}

getvessel()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/vessel/getvessel.php',options).map(response => response.text());  
}

getpendingvessels()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/vessel/getpendingvessel.php',options).map(response => response.text());  
}

getallvessels()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/vessel/getallvessels.php',options).map(response => response.text());  
}

updateVesselApproval(ysid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ysid=" + ysid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/vessel/updatevesselapproval.php',pram,options).map(response => response.text());  
}

//** Voyage */
addvoyage(voyagename, vesselid, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&voyagename=" + voyagename + "&vesselid=" + vesselid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/voyage/addvoyage.php',pram,options).map(response => response.text());  
}

getvoyages(vesselid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "vessel=" + vesselid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/voyage/getvoyages.php',pram,options).map(response => response.text());  
}

getallvoyages()
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "";
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/voyage/getallvoyages.php',pram,options).map(response => response.text());  
}

/** Booking Agency */

addBAgency(bname, branch, address, tel, fax, email, reps, services, dtep)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "bname=" + bname + "&branch=" + branch + "&address=" + address + "&tel=" + tel + "&fax=" + fax + "&reps=" + reps + "&email=" + email + "&services=" + services + "&dte=" + dtep;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/addbagency.php',pram,options).map(response => response.text());  
}

getBagency(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/getbagency.php',options).map(response => response.text());  
}

getSingleBAgency(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/getsinglebagency.php',pram,options).map(response => response.text());  
}

getbagencyreps(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/getbagencyreps.php',pram,options).map(response => response.text());  
}

getbagencyservices(y_id:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + y_id;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/getbagencyservices.php',pram,options).map(response => response.text());  
}

addbagencyservices(yardid, tab, cat, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardid=" + yardid + "&tab=" + tab + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/addbagencyservices.php',pram,options).map(response => response.text());  
}

deletebagencyservices(tab, cat, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "tab=" + tab + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/deletebagencyservices.php',pram,options).map(response => response.text());  
}

updateBAgency_Address(yid:string, address:string, dtep:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + yid + "&name=" + name + "&address=" + address + "&dte=" + dtep;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/updatebagencyaddress.php',pram,options).map(response => response.text());  
}

updateBAgency_Contact(yid:string,tel:string, fax:string, email:string, dtep:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + yid + "&tel=" + tel + "&fax=" + fax + "&email=" + email + "&dte=" + dtep;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/updatebagencycontact.php',pram,options).map(response => response.text());  
}

updateBAgency_Reps(yardid, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardid=" + yardid + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/updatebagencyreps.php',pram,options).map(response => response.text());  
}

searchBAgency(name:string, email:string, branch:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "name=" + name + "&email=" + email + "&branch=" + branch;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/searchbagency.php',pram,options).map(response => response.text());  
}

updateStatusBAgency(yid:string, status:string)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "y_id=" + yid + "&status=" + status;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/bookingagency/updatestatusbagency.php',pram,options).map(response => response.text());  
}

//** Booking Charges */

addcontainercharges(chargename, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&chargename=" + chargename;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/containercharge/addcharge.php',pram,options).map(response => response.text());  
}

getcontainercharges()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/containercharge/getcharges.php',options).map(response => response.text());  
}

addrorocharge(chargename, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&chargename=" + chargename;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/rorocharge/addcharge.php',pram,options).map(response => response.text());  
}

getrorocharges()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/rorocharge/getcharges.php',options).map(response => response.text());  
}

//** Inspections */

addinspection(chargename, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&chargename=" + chargename;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspection/addinspection.php',pram,options).map(response => response.text());  
}

getinspections()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspection/getinspections.php',options).map(response => response.text());  
}

/** Shipment Schedule */

addschedule(vesselid, voyageid, routes, username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "username=" + username + "&vesselid=" + vesselid + "&voyageid=" + voyageid + "&routes=" + routes;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentschedule/addschedule.php',pram,options).map(response => response.text());  
}

getschedules(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentschedule/getschedules.php',options).map(response => response.text());  
}

getsingleschedule(ssid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ssid=" + ssid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentschedule/getsingleschedule.php',pram,options).map(response => response.text());  
}

addmoreroute(ssid, originport, etd, destport, eta)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "ssid=" + ssid + "&originport=" + originport + "&etd=" + etd + "&destport=" + destport + "&eta=" + eta;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentschedule/addmoreroute.php',pram,options).map(response => response.text());  
}

deleteroute(rid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "rid=" + rid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentschedule/deleteroute.php',pram,options).map(response => response.text());  
}

/** Booking */
getyardswithservices(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/getyardswithservices.php',options).map(response => response.text());  
}

addbooking(yard, drainageyard, bagency, route, bno, confirmedon, shipmenttype, containertype, cargotype, conditiontype, qty, yardopen, address, dco, yco, dft, dmft, insid, penaltyfree, reciepturl, freightcon, paymentcon)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yard=" + yard + "&drainageyard=" + drainageyard + "&bagency=" + bagency + "&route=" + route + "&bno=" + bno + "&confirmedon=" + confirmedon + "&shipmentype=" + shipmenttype + "&containertype=" + containertype + "&conditiontype=" + conditiontype + "&cargotype=" + cargotype + "&qty=" + qty + "&yardopen=" + yardopen + "&address=" + address + "&dco=" + dco + "&yco=" + yco + "&dft=" + dft + "&dmft=" + dmft + "&insid=" + insid + "&pfree=" + penaltyfree + "&freightcon=" + freightcon + "&paymentcon=" + paymentcon + "&reciepturl=" + reciepturl;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/addbooking.php',pram,options).map(response => response.text());  
}

uploadReciept(options, formData)
{
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/uploadreciept.php', formData, options).map(response => response.text());  
}

getbookings(){          
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/getbookings.php',options).map(response => response.text());  
}

searchbooking(bookingno, yardname, vesselname)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yard=" + yardname + "&bookingno=" + bookingno + "&vessel=" + vesselname;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/searchbooking.php',pram,options).map(response => response.text());  
}

getsinglebooking(bno)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "bno=" + bno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/getsinglebooking.php',pram,options).map(response => response.text());  
}

getbookingfreight(bno)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "bno=" + bno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/getbookingfreight.php',pram,options).map(response => response.text());  
}

getbookingpayment(bno, shiptype)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "bno=" + bno + "&shiptype=" + shiptype;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/getbookingpayment.php',pram,options).map(response => response.text());  
}

updatebookingdata(cat, val, bno)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "cat=" + cat + "&val=" + val + "&bno=" + bno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/updatebooking.php',pram,options).map(response => response.text());  
}

updatepaymentdata(temp, bno)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "temp=" + temp + "&bno=" + bno;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/updatepaymentdata.php',pram,options).map(response => response.text());  
}

deletefreight(bfid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "bfid=" + bfid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/deletefrieght.php',pram,options).map(response => response.text());  
}

addfreight(freight, unit, curr, range, bno)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "freight=" + freight + "&unit=" + unit + "&curr=" + curr + "&range=" + range + "&bno=" + bno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/booking/addfreight.php',pram,options).map(response => response.text());  
}

//** Loading Plan */
getyardvehicles(yardname)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardname=" + yardname;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/loadingplan/getyardvehicles.php',pram,options).map(response => response.text());  
}

addloadingplan(yardname, contype, vehiclelist, username, plancode)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardname=" + yardname + "&contype=" + contype + "&vehiclelist=" + vehiclelist + "&username=" + username + "&plancode=" + plancode;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/loadingplan/addloadingplan.php',pram,options).map(response => response.text());  
}

getloadingplan(yardname)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardname=" + yardname;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/loadingplan/getloadingplans.php',pram,options).map(response => response.text());  
}

getsingleloadingplan(plancode)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "plancode=" + plancode;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/loadingplan/getsingleloadingplan.php',pram,options).map(response => response.text());  
}

getplanvehicles(plancode)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "plancode=" + plancode;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/loadingplan/getplanvehicles.php',pram,options).map(response => response.text());  
}

//** Inspection Order */
addinspectionorder(vehiclelist, servicename, inspection, requestedon, emaillist, remarks, generatedby, vehiclejson, reqinspection)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "vehiclelist=" + vehiclelist + "&servicename=" + servicename + "&inspection=" + inspection + "&requestedon=" + requestedon + "&emaillist=" + emaillist + "&remarks=" + remarks + "&generatedby=" + generatedby + "&vehiclejson=" + vehiclejson + "&reqinspection=" + reqinspection;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspectionorder/addinspectionorder.php',pram,options).map(response => response.text());  
}

getinpectionorder()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspectionorder/getinspectionorder.php',options).map(response => response.text());  
}

getsingleinspectionorder(insoid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "insoid=" + insoid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspectionorder/getsingleorder.php',pram,options).map(response => response.text());  
}

getemailloginspection(insoid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "insoid=" + insoid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspectionorder/getemaillogs.php',pram,options).map(response => response.text());  
}

updateinspectiondata(cat, val, bno)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "cat=" + cat + "&val=" + val + "&bno=" + bno;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspectionorder/updateinsorderstatus.php',pram,options).map(response => response.text());  
}

remindinspectionorder(chassis, make, model, year, yardname, servicename, requestedon, emaillist, remarks, reqinspection, insoid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "chassis=" + chassis + "&make=" + make + "&model=" + model + "&year=" + year + "&yardname=" + yardname + "&servicename=" + servicename + "&requestedon=" + requestedon + "&emaillist=" + emaillist + "&remarks=" + remarks + "&reqinspection=" + reqinspection + "&insoid=" + insoid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/inspectionorder/remindinspectionorder.php',pram,options).map(response => response.text());  
}

/** Shipment Consignee */
getClientVehicles(username)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "client=" + username;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/getclientvehicles.php',pram,options).map(response => response.text());  
}

addConsignee(cusage, name, address, tel, fax, email, dest, clients, vehicles, generatedby)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "cusage=" + cusage + "&name=" + name + "&address=" + address + "&tel=" + tel + "&fax=" + fax + "&email=" + email + "&dest=" + dest + "&clients=" + clients + "&vehicles=" + vehicles + "&generatedby=" + generatedby;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/addshipmentconsignee.php',pram,options).map(response => response.text());  
}

getShipmentConsignee()
{
  let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});    
  let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });       
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/getshipmentconsignee.php',options).map(response => response.text());  
}

getSingleShipmentConsignee(csid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "csid=" + csid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/getsingleshipmentconsignee.php',pram,options).map(response => response.text());  
}

getConsigneeClients(csid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "csid=" + csid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/getclients.php',pram,options).map(response => response.text());  
}

getConsigneeDestinations(csid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "csid=" + csid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/getdestinations.php',pram,options).map(response => response.text());  
}

getConsigneeVehicles(csid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "csid=" + csid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/getvehicles.php',pram,options).map(response => response.text());  
}

addDestination(yardid, tab, cat, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yardid=" + yardid + "&tab=" + tab + "&cat=" + cat + "&val=" + val;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/adddestination.php',pram,options).map(response => response.text());  
}

deleteDestination(tab, cat, val)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "tab=" + tab + "&cat=" + cat + "&val=" + val;
  console.log(pram);
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/deletedestination.php',pram,options).map(response => response.text());  
}

updateConsigneeAddress(scid, address)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "scid=" + scid + "&address=" + address;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/updateaddress.php',pram,options).map(response => response.text());  
}

updateConsigneeContact(scid, tel, fax, email)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "scid=" + scid + "&tel=" + tel + "&fax=" + fax + "&email=" + email;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentconsignee/updatecontact.php',pram,options).map(response => response.text());  
}

/** Shipment Plans */
getYardsbyDestination(destport)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "destport=" + destport;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentplan/getyardbydestination.php',pram,options).map(response => response.text());  
}

/** Shipment Plans */
getBookingbyYard(yardid)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yard=" + yardid;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentplan/getbookingsbyyard.php',pram,options).map(response => response.text());  
}

getvehiclesbyyard(yard)
{
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});    
  let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  let pram = "yard=" + yard;
  return this.http.post('https://crossdomain-rolvo.herokuapp.com/http://shinchuo-test2.com/shinchouadmin/webservices/shipmentplan/getvehiclesbyyard.php',pram,options).map(response => response.text());  
}

}
