import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  //passing data from api
  employees:any; 

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData(); 
  }

  //create functions based on the data pushed
  getEmployeesData(){
   //console.log('Hellow Employees'); <- debuging


   //this is how we put json from api to angular
   this.dataService.getData().subscribe(res=>{
     // this debug into web browser console.log(res); 
    this.employees = res; // push data into model
   });
  }

}
