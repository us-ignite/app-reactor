import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemComponent } from './ecosystem.component';

describe('EcosystemComponent', () => {
  let component: EcosystemComponent;
  let fixture: ComponentFixture<EcosystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
