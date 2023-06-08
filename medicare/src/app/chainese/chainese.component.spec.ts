import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaineseComponent } from './chainese.component';

describe('ChaineseComponent', () => {
  let component: ChaineseComponent;
  let fixture: ComponentFixture<ChaineseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaineseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
