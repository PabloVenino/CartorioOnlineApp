import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthApiService {
  readonly apiURL = "https://localhost:44390/";
  constructor(private http:HttpClient) { }

  getBirthList():Observable<any[]>{
    return this.http.get<any>(this.apiURL + "api/v1/Birth/list-all");
  }

  addBirth(data:any){
    return this.http.post(this.apiURL + "/api/v1/Birth", data)
  }
}
