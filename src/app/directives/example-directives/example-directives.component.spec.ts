import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDirectivesComponent } from './example-directives.component';

describe('ExampleDirectivesComponent', () => {
  let component: ExampleDirectivesComponent;
  let fixture: ComponentFixture<ExampleDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
