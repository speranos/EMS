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
    return this.http.post(this.baseUrl + "/create", user);
  }

  Delete(userid: string){
    console.log("Delete triggerd !!");
    return this.http.delete(this.baseUrl + `/delete/${userid}`);
  }

  GetAll() {
    return this.http.get<user[]>(this.baseUrl + "/all");
  }

  GetUser(userid: string) {
    return this.http.get<user>(this.baseUrl + `/user/${userid}`);
  }

  UpdateUser(user: user) {
    return this.http.put(this.baseUrl + "/update", user);
  }



}
