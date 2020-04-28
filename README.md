<p align="center">
    <img alt="logoweatherapp" src="./src/assets/logo-bateau.png" width="60" />
  </a>
</p>
<h1 align="center">
  Saint-Malo Weather-App
</h1>

Welcome to Saint-Malo Weather-App ☀️☀️

<img alt="screesnhot" src="./src/assets/screenshotweathercard copie.jpg" />

The web-app Saint-Malo weather-app is a single page angular application which give you the weather for the 5 upcoming days. When the user clicks a weather card, a detail weather 3 hours forecast is displayed.  🏖️⛵🏄

<img alt="screesnhot" src="./src/assets/screenshotdetailledweathercard copie.jpg" />

## This app uses 🍁🍁

1.  **Angular**
    <img alt="logoAngular" src="./src/assets/Angular_logo.svg copie.png" />

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

The codebase is organised into three simple components `Weather-card`, `Weather-card-detail`, and `Header`.
`Weather-card` displays the weather for the 5 upcoming days.
`Weather-card-detail` displays the detailed weather, 3 hours forecast of the selected day. It takes one prop `selectedDate`.
`Header` displays the header of the website which is made from an image and 3 headers. It takes one prop `selectedTimeRange`.

All type for the app are organised under the `forecast.ts`file in the `src` folder.

The data are retrieved from [OpenWeatherMap](https://openweathermap.org/). The API [5day/3hours](https://openweathermap.org/forecast5) forecast has been used for this project. It is the `forecast-service` which provide the shared data accross the 2 components which need it `Weather-card` and `Weather-card-detail` for display.

## Get started 🚀🚀

To run this project :

### `npm start`

### `npm run build`
