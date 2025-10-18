import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewQuotesPage } from './new-quotes.page';

describe('NewQuotesPage', () => {
  let component: NewQuotesPage;
  let fixture: ComponentFixture<NewQuotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
