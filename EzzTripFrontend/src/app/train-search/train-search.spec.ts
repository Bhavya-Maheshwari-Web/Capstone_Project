import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSearch } from './train-search';

describe('TrainSearch', () => {
  let component: TrainSearch;
  let fixture: ComponentFixture<TrainSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
