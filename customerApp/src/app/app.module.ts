import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// since we are not adding angular routing at first, then we need to create our own routing
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//adding import data
import { HttpClientModule } from '@angular/common/http';


//adding the route and componentes
const appRoutes: Routes = [

    { path: '', component:EmployeesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
