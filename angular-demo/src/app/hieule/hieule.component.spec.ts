import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HieuleComponent } from './hieule.component';

describe('HieuleComponent', () => {
  let component: HieuleComponent;
  let fixture: ComponentFixture<HieuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HieuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HieuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
