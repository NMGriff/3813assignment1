import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsecredComponent } from './parsecred.component';

describe('ParsecredComponent', () => {
  let component: ParsecredComponent;
  let fixture: ComponentFixture<ParsecredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParsecredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParsecredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
