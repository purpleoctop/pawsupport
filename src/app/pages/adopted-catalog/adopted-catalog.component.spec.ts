import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedCatalogComponent } from './adopted-catalog.component';

describe('AdoptedCatalogComponent', () => {
  let component: AdoptedCatalogComponent;
  let fixture: ComponentFixture<AdoptedCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdoptedCatalogComponent]
    });
    fixture = TestBed.createComponent(AdoptedCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
