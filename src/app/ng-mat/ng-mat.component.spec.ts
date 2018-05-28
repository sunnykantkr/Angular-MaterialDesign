import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatComponent } from './ng-mat.component';

describe('NgMatComponent', () => {
  let component: NgMatComponent;
  let fixture: ComponentFixture<NgMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
