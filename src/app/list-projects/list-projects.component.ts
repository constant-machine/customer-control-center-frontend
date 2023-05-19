import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../service/project.service";
import {ProjectResponse} from "../model/project/project-response";

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) {
  }

  projectList: ProjectResponse[] = [];

  ngOnInit(): void {
    this.getAllProjects()
  }

  getAllProjects() {
    this.projectService.getProjectsList()
      .subscribe(data => {
        this.projectList = data
      })
  }

  deleteProject(project: ProjectResponse) {
    this.projectService.deleteProject(project.id)
      .subscribe(data => {
        this.getAllProjects()
        console.log(data)
      })
  }
}
