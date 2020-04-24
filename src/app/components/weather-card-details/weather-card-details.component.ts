import { Component, OnInit, Input } from '@angular/core';
import { WeatherPoint, PointFromServer } from 'src/forecast';

@Component({
  selector: 'app-weather-card-details',
  templateUrl: './weather-card-details.component.html',
  styleUrls: ['./weather-card-details.component.css']
})
export class WeatherCardDetailsComponent implements OnInit {
  @Input() foreCast: WeatherPoint

  constructor() { }

  ngOnInit(): void {
  }

}
