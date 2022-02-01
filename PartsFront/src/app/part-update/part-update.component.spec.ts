import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartUpdateComponent } from './part-update.component';

describe('PartUpdateComponent', () => {
  let component: PartUpdateComponent;
  let fixture: ComponentFixture<PartUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
