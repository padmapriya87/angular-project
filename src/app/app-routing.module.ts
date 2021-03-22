import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { WeatherforecastComponent } from './components/weatherforecast/weatherforecast.component';
const routes: Routes = [
  {path:'', component: NewsComponent},
{path:'weather', component: WeatherforecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
