import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SimpleNotificationsModule } from 'angular2-notifications';


//import { CustomOption } from './custom-option';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module';
import { DataTableModule } from 'angular-4-data-table';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
//import { Datatable2Component } from './datatable2/datatable2.component';
//import { ToastOptions } from 'ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    LoginComponent,
    //DatatableComponent,
    //Datatable2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastModule.forRoot(), // ToastrModule added
    SimpleNotificationsModule.forRoot(),
    DataTableModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [//{
            //provide: ToastOptions, useClass: CustomOption
        //}
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
