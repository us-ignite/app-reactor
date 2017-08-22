import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchosystemComponent } from './echosystem.component';

describe('EchosystemComponent', () => {
  let component: EchosystemComponent;
  let fixture: ComponentFixture<EchosystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchosystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
