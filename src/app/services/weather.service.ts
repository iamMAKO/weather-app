import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather, TransformedWeather } from '../types';
import { map } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class WeatherService {
  private apiUrl: string = 'https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,surface_pressure&timezone=Europe%2FLondon&past_days=5'

  //VARIABLES FOR CHART
  private time: string[] = []
  private temperature: number[] = []

  constructor(private httpClient: HttpClient) {}

  //METHOD TO GET DATA FROM API
  getWeatherData(): Observable<TransformedWeather[]> {
    return this.httpClient.get<Weather>(this.apiUrl).pipe(
      map((data: Weather) => {
        this.time = data.hourly.time;
        this.temperature = data.hourly.temperature_2m
        return this.transformData(data);
      })
    );
  }

  //METHOD TO SAVE DATA TO ARRAYS 
  private transformData(data: Weather): TransformedWeather[] {
    const transformedData: TransformedWeather[] = [];

    for (let i = 0; i < data.hourly.time.length; i++) {
        const transformedHour: TransformedWeather = {
            time: data.hourly.time[i],
            temperature: data.hourly.temperature_2m[i],
            relative_humidity: data.hourly.relative_humidity_2m[i],
            apparent_temperature: data.hourly.apparent_temperature[i],
            precipitation_probability: data.hourly.precipitation_probability[i],
            surface_pressure: data.hourly.surface_pressure[i]
        };
        transformedData.push(transformedHour);
    }
    return transformedData;
  }

  //GETTER METHODS FOR CHART
  getTime(): string[]{
    return this.time;
  }

  getTemperature(): number[]{
    return this.temperature;
  }
}