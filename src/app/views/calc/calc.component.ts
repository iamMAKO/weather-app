import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [InputNumberModule, FormsModule, TableModule, ButtonModule, ToggleButtonModule, MessagesModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent{

  checked: boolean = false;
  temporarySuffix: string = ' °C'
  temperatureValue!: number;
  humidityValue!: number;
  heatIndexC!: number;
  heatIndexF!: number;
  messages: any;

  //METHOD TO CHANGE TEMPERATURE UNIT
  onChangeUnit(){
    if(this.checked) this.temporarySuffix = (' °F')
    else this.temporarySuffix = (' °C')
  }

  //METHOD TO CALCULATE HEAT INDEX
  calculate(){
    let fh:number
    if(this.checked) {
      if(this.temperatureValue >= 80) fh = this.temperatureValue
      else { 
        this.messages = [{ severity: 'error', summary: 'Error', detail: 'To calculate the heat index, the temperature cannot be lower than 80 °F' }];
        this.temperatureValue = 0;
        return
      } 
    } else {
      if(this.temperatureValue >= 26.7) fh = (9/5) * this.temperatureValue + 32
      else {
        this.messages = [{ severity: 'error', summary: 'Error', detail: 'To calculate the heat index, the temperature cannot be lower than 26,7 °C' }];
        this.temperatureValue = 0;
        return
      }
    }
    console.log(fh + 'toto je prepocet na fh')
    this.heatIndexF = Math.round((-42.379 + (2.04901523 * fh) + (10.14333127 * this.humidityValue) - (0.22475541 * fh * this.humidityValue) - (6.83783e-3 * fh**2) - (5.481717e-2 * this.humidityValue**2) + (1.22874e-3 * fh**2 * this.humidityValue) + (8.5282e-4 * fh * this.humidityValue**2) - (1.99e-6 * fh**2 * this.humidityValue**2))*100)/100
    this.heatIndexC = Math.round(((5/9) * (this.heatIndexF - 32))*100)/100
    console.log(this.heatIndexF + ' toto je heatIndexF ' + this.heatIndexC + ' toto je heatIndexC') 
  }
}

