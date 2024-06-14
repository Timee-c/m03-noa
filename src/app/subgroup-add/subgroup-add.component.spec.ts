import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupAddComponent } from './subgroup-add.component';

describe('SubgroupAddComponent', () => {
  let component: SubgroupAddComponent;
  let fixture: ComponentFixture<SubgroupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
