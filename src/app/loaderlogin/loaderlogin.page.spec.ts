import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderloginPage } from './loaderlogin.page';

describe('LoaderloginPage', () => {
  let component: LoaderloginPage;
  let fixture: ComponentFixture<LoaderloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
