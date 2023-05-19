import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectRequest} from "../model/project/project-request";
import {ProjectResponse} from "../model/project/project-response";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL = "http://localhost:8080/api/v1"

  constructor(private http: HttpClient) { }

  getProjectsList(): Observable<ProjectResponse[]> {
    return this.http.get<ProjectResponse[]>(`${this.baseURL}/project/all`)
  }

  createProject(project: ProjectRequest): Observable<ProjectResponse> {
    return this.http.post<ProjectResponse>(`${this.baseURL}/project`, project)
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/project/${id}`)
  }
}
