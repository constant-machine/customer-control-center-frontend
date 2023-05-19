import { Component } from '@angular/core';
import {ProjectService} from "../service/project.service";
import {Project} from "../model/project";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private projectService: ProjectService) {
  }
  createCustomer(value: any) {
    let project: Project = {
      id: value.id,
      customerId: value.customerId,
      projectName: value.projectName,
      description: value.description
    }

    return this.projectService.createProject(project)
      .subscribe(response => {
        console.log(response)
      })
  }
}
