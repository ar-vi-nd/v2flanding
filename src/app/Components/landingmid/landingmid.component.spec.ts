import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingmidComponent } from './landingmid.component';

describe('LandingmidComponent', () => {
  let component: LandingmidComponent;
  let fixture: ComponentFixture<LandingmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingmidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
