export interface WeatherPoint {
    temp_min: number;
    temp_max: number;
    icon: string;
    dt_txt: string;
}

export interface ServerData {
    list: PointFromServer[];
}

export interface PointFromServer {
    main: {temp_min: number, temp_max: number};
    weather: {
        icon: string
    }[];
    dt_txt: string;
}