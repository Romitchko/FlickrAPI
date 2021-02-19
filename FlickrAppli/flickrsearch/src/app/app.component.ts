import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import {CommonService} from './common.service';

import {HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flickrsearch';

  constructor(private newService :CommonService,) { }
  Repdata;
  valbutton ="Save";

  ngOnInit() {
    this.newService.GetImage().subscribe(data => this.Repdata = data)
  }

  onSave = function(image,isValid: boolean) {
    image.mode=this.valbutton;
    this.newService.saveImage(image)
    .subscribe(data => { alert(data.data);
    this.ngOninit();
    }
    , error => this.errorMessage = error )
  }
edit = function(kk) {
  this.url = kk._url;
  this.title= kk.title;
  this.owner= kk.owner;
  this.valbutton ="Update";
}

delete = function(id) {
  this.newService.deleteImage(id)
  .subscribe(data => { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )
}

}

