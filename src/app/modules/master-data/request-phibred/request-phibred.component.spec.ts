import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPhibredComponent } from './request-phibred.component';

describe('RequestPhibredComponent', () => {
  let component: RequestPhibredComponent;
  let fixture: ComponentFixture<RequestPhibredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPhibredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPhibredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
