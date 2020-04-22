import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WeatherPoint } from 'src/forecast';
import { foreCasts } from 'src/mock-forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() { }

  getForeCasts(): Observable<WeatherPoint[]> {
    return of (foreCasts)
  }
}
