import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //product management-root: since this is our root component
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>My First Component </div>
  </div>
  `
})

export class AppComponent{
  pageTitle: string = "Pokemon Wiki"
}