import { Component, OnInit } from '@angular/core';
import { WeatherPoint } from 'src/forecast';
import { foreCasts } from 'src/mock-forecast';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  foreCasts: WeatherPoint[] = foreCasts
  selectedForeCast: WeatherPoint

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(foreCast: WeatherPoint): void {
    this.selectedForeCast = foreCast
  }
}
