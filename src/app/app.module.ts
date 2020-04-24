import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherCardDetailsComponent } from './components/weather-card-details/weather-card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
