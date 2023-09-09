import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelessCatalogComponent } from './homeless-catalog.component';

describe('HomelessCatalogComponent', () => {
  let component: HomelessCatalogComponent;
  let fixture: ComponentFixture<HomelessCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomelessCatalogComponent]
    });
    fixture = TestBed.createComponent(HomelessCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
