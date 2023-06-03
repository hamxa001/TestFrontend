import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeavesComponent } from './add-leaves.component';

describe('AddLeavesComponent', () => {
  let component: AddLeavesComponent;
  let fixture: ComponentFixture<AddLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
