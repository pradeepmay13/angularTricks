import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path:'', redirectTo: 'home', pathMatch: 'full' },
	{ path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'datatable', component: DatatableComponent },
  //{ path:'**', component: PageNotFound }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)//, { useHash: true, enableTracing: true }
    //RouterModule.forRoot(routes)
	//ng build --base-href http://localhost/ng/#/
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent, DatatableComponent, LoginComponent]
