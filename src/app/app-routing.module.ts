import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
	{ path:'', redirectTo: 'login', pathMatch: 'full' },
	{ path:'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent },
  { path:'customForm', component: CustomFormComponent },
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
export const routingComponent=[HomeComponent, DatatableComponent, LoginComponent, CustomFormComponent]
