import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.css']
})
export class SubgroupComponent {
  subgroups = [
    { id: 1, name: 'Subgroup 1', description: 'Description 1' },
    { id: 2, name: 'Subgroup 2', description: 'Description 2' },
  ];

  constructor(private router: Router) {}

  navigateToAddSubgroup() {
    this.router.navigate(['/subgroup-add']);
  }
}
