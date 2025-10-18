import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditQuotePage } from './edit-quote.page';

describe('EditQuotePage', () => {
  let component: EditQuotePage;
  let fixture: ComponentFixture<EditQuotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
