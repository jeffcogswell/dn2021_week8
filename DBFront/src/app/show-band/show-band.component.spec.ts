import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBandComponent } from './show-band.component';

describe('ShowBandComponent', () => {
  let component: ShowBandComponent;
  let fixture: ComponentFixture<ShowBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
