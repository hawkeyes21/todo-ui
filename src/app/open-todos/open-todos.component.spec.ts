import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTodosComponent } from './open-todos.component';

describe('OpenTodosComponent', () => {
  let component: OpenTodosComponent;
  let fixture: ComponentFixture<OpenTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
