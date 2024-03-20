
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService implements OnInit {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  username() {
    return this.http.get(`${this.url}/users`);
  }
  signin(data: any) {
    return this.http.post(`${this.url}/users/login`, data);
  }
  signup(data: any) {
   
    return this.http.post(`${this.url}/users/signup`, data);
  }
  listofExercises() {

    return this.http.get(`${this.url}/exercise`);
  }
  listofNutration() {
    return this.http.get(
      `${this.url}/nutration`
    );
  }

  postExercise(data: any) {

    return this.http.post(
      `${this.url}/exercise/create`,
      { service: data }
    );
  }
  postNutration(data: any) {
    return this.http.post(
      `${this.url}/nutration/create`,
      { request: data }
    );
    }
  deleteExercise(id: any) {
    return this.http.delete(
      `${this.url}/exercise/${id}`
    );
  }
  deleteNutration(id: any) {
    return this.http.delete(
      `${this.url}/nutration/${id}`
    );
  }
}

