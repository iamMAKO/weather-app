import { Routes } from '@angular/router';

//views
import { HourlyComponent } from './views/hourly/hourly.component';
import { ChartComponent } from './views/chart/chart.component';
import { CalcComponent } from './views/calc/calc.component';

//routes
export const routes: Routes = [
    { path: '', component: HourlyComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'calc', component: CalcComponent }
];
