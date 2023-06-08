import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthindianComponent } from './southindian.component';

describe('SouthindianComponent', () => {
  let component: SouthindianComponent;
  let fixture: ComponentFixture<SouthindianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthindianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthindianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
