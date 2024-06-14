import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  groups = [
    { id: 1, name: 'Group 1', description: 'Description 1' },
    { id: 2, name: 'Group 2', description: 'Description 2' },
    // Add more group objects as needed
  ];

  constructor(private router: Router) {}

  navigateToAddSubgroup() {
    this.router.navigate(['/subgroup-add']);
  }
}
