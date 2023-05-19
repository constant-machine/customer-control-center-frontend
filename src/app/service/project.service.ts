import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project} from "../model/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL = "http://localhost:8080/api/v1"

  constructor(private http: HttpClient) { }

  getProjectsList(): Observable<any> {
    return this.http.get(`${this.baseURL}/project/all`)
  }

  createProject(customer: Project): Observable<any> {
    return this.http.post(`${this.baseURL}/project`, customer)
  }
}
