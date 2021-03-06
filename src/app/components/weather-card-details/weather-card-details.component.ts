import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EMPTY } from 'rxjs';
import { ForecastService } from 'src/app/service/forecast.service';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-weather-card-details',
  templateUrl: './weather-card-details.component.html',
  styleUrls: ['./weather-card-details.component.css']
})
export class WeatherCardDetailsComponent implements OnInit {
  foreCast$ = this.forecastService.foreCasts$
  .pipe(
    map(weatherPointArray => weatherPointArray.filter(singlePoint => {
      return singlePoint.dt_txt.slice(0,10) === this.selectedDate.slice(0,10)
    })),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY 
    })
  )
  @Input() selectedDate: string
  @Output() notify: EventEmitter<string> = new EventEmitter<string>()
  errorMessage: string

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {}

}
