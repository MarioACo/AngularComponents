import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocCssComponent } from './doc_css/app.component.doc_css';
import { DocHtmlComponent } from './doc_html5/app.component.doc_html5';
import { DocJSComponent } from './doc_js/app.component.doc_js';
import { DocTsComponent } from './doc_ts/app.component.doc_ts';

@NgModule({
  declarations: [
    AppComponent,
    DocCssComponent,
    DocJSComponent,
    DocHtmlComponent,
    DocTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
