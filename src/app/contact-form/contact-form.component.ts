import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent{
  categories = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Languages"}
  ];
  submit(course){ console.log(course); }
  log(x){ console.log(x); }
}
