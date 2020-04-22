import { Component, OnInit } from '@angular/core';
import { WeatherPoint } from 'src/forecast';
import { ForecastService } from 'src/app/service/forecast.service';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  foreCasts: WeatherPoint[]
  selectedForeCast: WeatherPoint

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getForecasts();
  }

  onSelect(foreCast: WeatherPoint): void {
    this.selectedForeCast = foreCast
  };

  getForecasts(): void {
    this.forecastService.getForeCasts().subscribe(foreCasts => this.foreCasts = foreCasts);
  }
}
