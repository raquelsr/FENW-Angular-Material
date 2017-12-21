import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  animalControl = new FormControl('', [Validators.required]);

  name = 'Jesús';
  description: string;
  check = false;
  date: Date;
  options = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  selected: string;
  value = 50;
  firstName: string;
  age: string;
}
