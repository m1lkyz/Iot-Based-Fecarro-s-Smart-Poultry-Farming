import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderstartPage } from './loaderstart.page';

describe('LoaderstartPage', () => {
  let component: LoaderstartPage;
  let fixture: ComponentFixture<LoaderstartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderstartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
