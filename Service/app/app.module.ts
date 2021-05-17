import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { FormsModule } from '@angular/forms';
import { UserSearchComponent } from './user-search/user-search.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

// const appRoutes : Routes = [
//   {path:'user',component:UserComponent},
//   {path:'employ',component:EmployComponent},
//   {path:'employSearch',component:EmploySearchComponent},
//   {path:'userSearch',component:UserSearchComponent},
// ]

const appRoutes : Routes = [
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'user',component:UserComponent,outlet:'data'},
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employSearch',component:EmploySearchComponent,outlet:'data'},
  {path:'userSearch',component:UserSearchComponent,outlet:'data'},
  ]
}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    EmploySearchComponent,
    UserSearchComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
