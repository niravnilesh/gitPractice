import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CalcComponent } from './calc/calc.component';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { StudentShowComponent } from './student-show/student-show.component';
import { EmployDropdownComponent } from './employ-dropdown/employ-dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

// const appRoutes : Routes = [
//   {path:'first',component:FirstComponent},
//   {path:'second',component:SecondComponent},
//   {path:'event',component:EventComponent},
//   {path:'databind',component:DataBindComponent},
//   {path:'twoWay',component:TwoWayComponent},
//   {path:'calc',component:CalcComponent},
//   {path:'',component:MenuComponent},
// ]

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
  {path:'second',component:SecondComponent,outlet:'data'},
  {path:'event',component:EventComponent,outlet:'data'},
  ]
}
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DataBindComponent,
    EventComponent,
    TwoWayComponent,
    CalcComponent,
    EmployShowComponent,
    StudentShowComponent,
    EmployDropdownComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
