import { Component, OnInit } from '@angular/core';
import { DatafromServicesService } from '../../datafrom-services.service';
import {Router} from '@angular/router';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {
  public name;
  public rolename;
  public pimg;
  public colorscheme;
  constructor(public myService : DatafromServicesService, private router: Router) { }

  ngOnInit() {
    this.getuserdetail();
  }

  getuserdetail()
  {
    this.myService.getuserdetail(window.localStorage.getItem("adm_user")).subscribe((data)=>{          
      let myd = JSON.parse(data);    
      this.name = myd.name;
      this.rolename = myd.rolename;
      this.pimg = myd.pimg;
      this.colorscheme = myd.colorscheme;
      (<HTMLInputElement>document.getElementById('color_value')).value = this.colorscheme;
      console.log(myd);

    },err => {      
      console.error(err);    
    });
  }

  doClick()
  {
    let t = document.getElementById("fileInput");
    if(t)
    t.click();
  }

  UploadPic(event)
  {
    let fileList: FileList = event.target.files;
    
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('fileToUpload', file, file.name);
        formData.append('userid', window.localStorage.getItem("adm_user"));
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        //headers.append('Content-Type', 'multipart/form-data');
        //headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });

        this.myService.uploadProfileImage(options, formData).subscribe((data)=>{          
          let myd = JSON.parse(data);
          
          this.getuserdetail();
        },err => {      
          console.error(err);    
        });
        
    }
  }

  Updatecolor(event)
  {
    this.myService.updatecolor(window.localStorage.getItem("adm_user"), "#" + event.target.value).subscribe((data)=>{          
      let myd = JSON.parse(data).Status;
      console.log(myd);  
      this.getuserdetail();
    },err => {      
      console.error(err);    
    });
    
  }
  
  logout()
  {
    document.getElementById("Loader").style.display = "block";
    window.localStorage.removeItem("adm_user");
    window.localStorage.removeItem("adm_role");
    this.router.navigate(["login"]);
  }
}
