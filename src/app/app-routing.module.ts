import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './User/user/user.component';
import { ParentComponent } from './inputoutput/parent/parent.component';
import { AuthGuard } from './gaurd/auth.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "sharing-data",
    canActivate: [AuthGuard],
    component: ParentComponent
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }