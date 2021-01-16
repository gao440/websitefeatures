import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotplaceComponent } from './hotplace.component';

describe('HotplaceComponent', () => {
  let component: HotplaceComponent;
  let fixture: ComponentFixture<HotplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
