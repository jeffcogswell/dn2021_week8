import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PartListComponent } from './part-list/part-list.component';
import { PartFormComponent } from './part-form/part-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PartUpdateComponent } from './part-update/part-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    PartFormComponent,
    PartUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
