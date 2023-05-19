import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../service/project.service";

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getProjectsList()
      .subscribe(data => {
        console.log(data)
      })
  }
}
