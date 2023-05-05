import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomelistComponent } from './customelist/customelist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailComponent,
    CustomelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
