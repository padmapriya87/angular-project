import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../../weatherapi.service';
import { Weather } from '../../app.component';
@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})

export class WeatherforecastComponent implements OnInit {
  weather: Weather = new Weather()
  constructor(private weatherApiService: WeatherapiService) { 

  }

  ngOnInit(): void {
    this.weatherApiService.getWeatherForecast().subscribe((data) => {
      console.log(data);
      console.log( data['location'].name);
      this.weather.city = data['location'].name      
      this.weather.conditions = data['current'].weather_descriptions[0]
      this.weather.temperature = Math.round((data['current'].temperature - 273.15)*1.8 + 32)
      this.weather.icon = data['current'].weather_icons[0]
    });

  
  }

}
