import {CustomerResponse} from "../customer/customer-response";

export class ProjectResponse {
  "id": number
  "customer": CustomerResponse
  "projectName": string
  "description": string
  "creationDate": string
}
