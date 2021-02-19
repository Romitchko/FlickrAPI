import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { HttpClientModule } from '@angular/common/Http';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { FormsModule } from '@angular/forms';
import {CommonService} from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
