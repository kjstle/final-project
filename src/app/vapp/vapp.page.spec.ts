import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VappPage } from './vapp.page';

describe('VappPage', () => {
  let component: VappPage;
  let fixture: ComponentFixture<VappPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
