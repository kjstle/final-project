import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScholarPage } from './scholar.page';

describe('ScholarPage', () => {
  let component: ScholarPage;
  let fixture: ComponentFixture<ScholarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScholarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
