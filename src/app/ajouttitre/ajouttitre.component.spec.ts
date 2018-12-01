import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttitreComponent } from './ajouttitre.component';

describe('AjouttitreComponent', () => {
  let component: AjouttitreComponent;
  let fixture: ComponentFixture<AjouttitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouttitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouttitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
