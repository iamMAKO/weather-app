//API DATA STRUCTURE
export interface Weather {
    hourly: {
    time:                      string[];
    temperature_2m:            number[];
    relative_humidity_2m:      number[];
    apparent_temperature:      number[];
    precipitation_probability: number[];
    surface_pressure:          number[];
    }
}

//DATA STRUCTURE FOR TABLE
export interface TransformedWeather {
    time: string;
    temperature: number;
    relative_humidity: number;
    apparent_temperature: number;
    precipitation_probability: number;
    surface_pressure: number;
}

//TABLE COLUMNS INTERFACE
export interface Column {
    field: string;
    header: string;
  }
  
