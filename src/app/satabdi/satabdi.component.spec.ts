/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatabdiComponent } from './satabdi.component';

describe('SatabdiComponent', () => {
  let component: SatabdiComponent;
  let fixture: ComponentFixture<SatabdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatabdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatabdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
