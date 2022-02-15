import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedTodosComponent } from './closed-todos.component';

describe('ClosedTodosComponent', () => {
  let component: ClosedTodosComponent;
  let fixture: ComponentFixture<ClosedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
