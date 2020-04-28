import { Component, OnInit } from '@angular/core';
import { WeatherPoint, PointFromServer } from 'src/forecast';
import { ForecastService } from 'src/app/service/forecast.service';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { catchError } from 'rxjs/operators';
registerLocaleData(localeFr, 'fr');


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  foreCasts$: Observable<WeatherPoint[]>
  selectedForeCast: WeatherPoint
  errorMessage: string

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getForecasts();
  }

  onSelect(foreCast: WeatherPoint): void {
    this.selectedForeCast = foreCast
  };

  onNotify() {
    this.selectedForeCast = null
  }
  
  getForecasts(): void {
    this.foreCasts$ = this.forecastService.getForeCasts().pipe(
      map(weatherPointArray => weatherPointArray.filter(singlePoint => singlePoint.dt_txt.endsWith('12:00:00'))),
      catchError(err => {
        this.errorMessage = err;
        return EMPTY 
      })
    )
  }
}
