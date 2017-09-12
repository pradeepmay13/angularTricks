import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateDemoComponent } from './animate-demo.component';

describe('AnimateDemoComponent', () => {
  let component: AnimateDemoComponent;
  let fixture: ComponentFixture<AnimateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
