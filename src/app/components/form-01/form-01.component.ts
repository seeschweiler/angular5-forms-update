import { Component, Input } from '@angular/core';

@Component({
  selector: 'form01',
  templateUrl: 'form-01.component.html'
})
export class Form01Component  {
  model = {
    firstname: "", 
    lastname: ""
  }
}