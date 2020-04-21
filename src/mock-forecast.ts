import { WeatherPoint } from "./forecast"

export const foreCasts: WeatherPoint[] = [
    {temp_min: 8, temp_max: 17, main: 'clouds', icon: 'dfghjk', dt_txt: 'Vendredi 5 avril'},
    {temp_min: 6, temp_max: 21, main: 'sun', icon: 'dfghjk', dt_txt: 'Samedi 6 avril'},
    {temp_min: 5, temp_max: 16, main: 'rain', icon: 'dfghjk', dt_txt: 'Dimanche 7 avril'},
    {temp_min: 12, temp_max: 22, main: 'shower', icon: 'dfghjk', dt_txt: 'Lundi 8 avril'},
    {temp_min: 5, temp_max: 19, main: 'wind', icon: 'dfghjk', dt_txt: 'Mardi 9 avril'}
].map(foreCasts => ({
    temp_min: foreCasts.temp_min,
    temp_max: foreCasts.temp_max,
    main: foreCasts.main,
    icon: foreCasts.icon,
    dt_txt: foreCasts.dt_txt
}))

