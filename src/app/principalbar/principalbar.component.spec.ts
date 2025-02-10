import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalbarComponent } from './principalbar.component';

describe('PrincipalbarComponent', () => {
  let component: PrincipalbarComponent;
  let fixture: ComponentFixture<PrincipalbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
