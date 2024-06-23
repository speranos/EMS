import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  private baseUrl = "http://localhost:5146";
  Add(user: user){
    console.log("SF RAH MCHAAAAAAA!!!!!!!!!!!!!!!");
    return this.http.post(this.baseUrl + "/create", user);
  }
  GetAll() {
    return this.http.get<user[]>(this.baseUrl + "/all");
  }
}
