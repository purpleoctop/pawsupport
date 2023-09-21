import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantStuffComponent } from './important-stuff.component';

describe('ImportantStuffComponent', () => {
  let component: ImportantStuffComponent;
  let fixture: ComponentFixture<ImportantStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImportantStuffComponent]
    });
    fixture = TestBed.createComponent(ImportantStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
