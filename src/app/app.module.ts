import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectivePracticeComponent } from './components/directive-practice/directive-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DirectivePracticeComponent,
    DirectivePracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
