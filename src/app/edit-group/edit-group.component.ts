import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupDataService } from '../services/group-data.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  id: number = 0;
  name: string = '';
  description: string = '';
  groupId: number | undefined;
  private groupDataService = inject(GroupDataService);

  editGroup() {
    const newGroup = {
      name: this.name,
      description: this.description
    }
    this.groupDataService.editGroup(newGroup,this.id);
  }


  constructor(private route: ActivatedRoute) {

  }
  loadGroupDetails(groupId: number) {
    this.id = groupId;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.groupId = Number(params.get('id'));
      this.loadGroupDetails(this.groupId);
    });
  }
}
