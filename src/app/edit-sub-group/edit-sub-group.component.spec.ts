import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubGroupComponent } from './edit-sub-group.component';

describe('EditSubGroupComponent', () => {
  let component: EditSubGroupComponent;
  let fixture: ComponentFixture<EditSubGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
