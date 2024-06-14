import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  units = [
    { id: 1, name: 'Unit 1', description: 'Description 1' },
    { id: 2, name: 'Unit 2', description: 'Description 2' },
  ];

  constructor(private router: Router) {}

  navigateToAddUnit() {
    this.router.navigate(['/unit-add']);
  }
}
