import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ServerData } from 'src/forecast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=saint-malo&units=metric&appid=1df8aa478c8facf4df1c047ad220d70a';
  
  foreCasts$ = this.http.get<ServerData>(this.forecastUrl)
      .pipe(
        map(objectFromServer => objectFromServer.list.map(forcast => ({
          temp_min: forcast.main.temp_min,
          temp_max: forcast.main.temp_max,
          icon: forcast.weather[0].icon,
          dt_txt: forcast.dt_txt
        }))),
        catchError(this.handleError)
      )

      handleError(err: any){
        let errorMessage: string
        if (err.errorMessage instanceof ErrorEvent) {
          errorMessage = `An error occured: ${err.errorMessage}`;
        } else {
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
        }

  constructor(private http: HttpClient) { }
  }
