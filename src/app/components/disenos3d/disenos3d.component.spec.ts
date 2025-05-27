import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disenos3dComponent } from './disenos3d.component';

describe('Disenos3dComponent', () => {
  let component: Disenos3dComponent;
  let fixture: ComponentFixture<Disenos3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Disenos3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Disenos3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
