import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherformComponent } from './teacherform.component';

describe('TeacherformComponent', () => {
  let component: TeacherformComponent;
  let fixture: ComponentFixture<TeacherformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
