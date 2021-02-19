import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  saveImage(image){
    return this.http.post('http://localhost:8081/api/SaveImage/', image)
    .map((response: Response) =>response.json())
  }

  GetImage(){
    return this.http.get('http://localhost:8081/api/getImage/')
    .map((response: Response) => response.json())
  }

  deleteImage(id){
    return this.http.post('http://localhost:8081/appi/deleteImage/', {'id': id})
    .map((response: Response) =>response.json())
  }
}
