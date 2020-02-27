import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSellerComponent } from './movie-seller.component';

describe('MovieSellerComponent', () => {
  let component: MovieSellerComponent;
  let fixture: ComponentFixture<MovieSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
