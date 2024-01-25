import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleDesignComponent } from './particle-design.component';

describe('ParticleDesignComponent', () => {
  let component: ParticleDesignComponent;
  let fixture: ComponentFixture<ParticleDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticleDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticleDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
