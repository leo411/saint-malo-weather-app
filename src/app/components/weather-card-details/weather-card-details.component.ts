import { Component, OnInit, Input } from '@angular/core';
import { WeatherPoint } from 'src/forecast';
import { Observable } from 'rxjs';
import { ForecastService } from 'src/app/service/forecast.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-weather-card-details',
  templateUrl: './weather-card-details.component.html',
  styleUrls: ['./weather-card-details.component.css']
})
export class WeatherCardDetailsComponent implements OnInit {
  foreCast$: Observable<WeatherPoint[]>
  @Input() selectedDate: string

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getDetailedForecasts()
  }

  getDetailedForecasts(): void {
    this.foreCast$ = this.forecastService.getForeCasts().pipe(
      map(weatherPointArray => weatherPointArray.filter(singlePoint => {
        console.log('selected', this.selectedDate.slice(0,10))
        return singlePoint.dt_txt.slice(0,10) === this.selectedDate.slice(0,10)
      }))
    )
  }

}
