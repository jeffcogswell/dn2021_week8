import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowBandComponent } from './show-band/show-band.component';
import { BandListComponent } from './band-list/band-list.component';
import { AddBandComponent } from './add-band/add-band.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowBandComponent,
    BandListComponent,
    AddBandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
