import { Injectable } from '@angular/core';

//import 
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }
}