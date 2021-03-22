import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherapiService {
  API_KEY = '6b39c8ba749bd0cc854bd2aba7e7375f';
  constructor(private httpClient: HttpClient) { }
  public getWeatherForecast(){
    return this.httpClient.get('http://api.weatherstack.com/current?access_key=6b39c8ba749bd0cc854bd2aba7e7375f&query=Dallas');
  }
 
}
