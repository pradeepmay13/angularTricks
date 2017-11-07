import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { AnimateDemoComponent } from './animate-demo/animate-demo.component';
import { InputOutputComponent } from './animate-demo/input-output/input-output.component';
import { ChildComponent } from './child/child.component';
import { LoginxComponent } from './loginx/loginx.component';
import {Login2Component} from './test/login2.component';

const routes: Routes = [
	{ path:'', redirectTo: 'login', pathMatch: 'full' },
	{ path:'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent },
  { path:'loginx', component: LoginxComponent },
  { path:'login2', component: Login2Component },
  { path:'customForm', component: CustomFormComponent },
  { path:'childInput', component: ChildComponent },
  { path:'datatable', component: DatatableComponent }, 
  { path:'loginx', component: LoginxComponent },  
  {
    path: 'animate',
    //component: AnimateDemoComponent,    
    children: [
      {path: '', redirectTo: 'input-output', pathMatch:'prefix'}, 
      {path: 'input-output', component: InputOutputComponent},
      {path: 'test', component: DatatableComponent},  
    ]
  },
  { path: '**', redirectTo: '/' }
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
export const routingComponent=[LoginxComponent, HomeComponent, DatatableComponent, LoginComponent, CustomFormComponent, AnimateDemoComponent, InputOutputComponent, ChildComponent]
