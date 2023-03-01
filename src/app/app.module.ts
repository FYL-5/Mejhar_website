import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardEngComponent } from './components/dashboard-eng/dashboard-eng.component';
import { DashboardArabComponent } from './components/dashboard-arab/dashboard-arab.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SubscribeComponent,
    LearnMoreComponent,
    ForgotPasswordComponent,
    DashboardEngComponent,
    DashboardArabComponent,
    DashboardAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule ,
    ReactiveFormsModule , 
    AngularFireAuthModule , 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
