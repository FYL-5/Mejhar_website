import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardArabComponent } from './components/dashboard-arab/dashboard-arab.component';
import { DashboardEngComponent } from './components/dashboard-eng/dashboard-eng.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login',component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subscribtion', canActivate: [AuthGuard], component: SubscribeComponent },
  { path: 'dashboard-eng', canActivate: [AuthGuard], component: DashboardEngComponent },
  { path: 'dashboard-arab', canActivate: [AuthGuard], component: DashboardArabComponent },
  { path: 'dashboard-admin', canActivate: [AuthGuard], component: DashboardAdminComponent },

  { path: 'learn-more', component: LearnMoreComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
