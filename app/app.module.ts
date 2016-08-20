import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

@NgModule({
  imports: [ BrowserModule,FormsModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers :[ HTTP_PROVIDERS ]
})
export class AppModule { }
