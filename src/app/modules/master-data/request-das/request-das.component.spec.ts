import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDasComponent } from './request-das.component';

describe('RequestDasComponent', () => {
  let component: RequestDasComponent;
  let fixture: ComponentFixture<RequestDasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
