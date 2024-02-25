import { Component, OnInit} from '@angular/core';
import { WeatherService} from '../../services/weather.service';
import { TransformedWeather } from '../../types';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Column } from '../../types';

@Component({
  selector: 'app-hourly',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './hourly.component.html',
  styleUrl: './hourly.component.css'
})

export class HourlyComponent implements OnInit{

  cols!: Column[];
  transformedData: TransformedWeather[] = [];
  hourly: [] = []

  constructor(private weatherService: WeatherService) {}

  //GET DATA FROM API AND SAVE THEM TO VARIABLE
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      this.transformedData = data;
    });

    this.cols = [
      { field: 'time', header: 'Time' },
      { field: 'temperature', header: 'Temperature' },
      { field: 'relative_humidity', header: 'Relative Humidity' },
      { field: 'apparent_temperature', header: 'Apparent Temperature' },
      { field: 'precipitation_probability', header: 'Precipitation Probability' },
      { field: 'surface_pressure', header: 'Surface Pressure' }
    ];
  }
  
}

