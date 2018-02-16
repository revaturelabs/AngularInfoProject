import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingdefinitionComponent } from './databindingdefinition.component';

describe('DatabindingdefinitionComponent', () => {
  let component: DatabindingdefinitionComponent;
  let fixture: ComponentFixture<DatabindingdefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingdefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingdefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
