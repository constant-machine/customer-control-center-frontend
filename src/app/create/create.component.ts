import { Component } from '@angular/core';
import {ProjectService} from "../service/project.service";
import {ProjectRequest} from "../model/project/project-request";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private projectService: ProjectService) {
  }
  createCustomer(value: any) {
    let project: ProjectRequest = {
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
