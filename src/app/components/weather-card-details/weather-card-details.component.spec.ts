import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardDetailsComponent } from './weather-card-details.component';

describe('WeatherCardDetailsComponent', () => {
  let component: WeatherCardDetailsComponent;
  let fixture: ComponentFixture<WeatherCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
