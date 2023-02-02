import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000/';
  private REST_API_RANDOM_USER = 'https://randomuser.me/api/?results=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getComments(word: string =''): Observable<any> {
    const url = `${this.REST_API_SERVER}` + word ;
    console.log(url);
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getRandomUser(user:number = 1): Observable<any> {
    const url = `${this.REST_API_RANDOM_USER}` + user;
    console.log(url);
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
