import { Component } from '@angular/core';
import { Viajem } from '../Models/viajem';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-controle-viajem',
  templateUrl: './controle-viajem.component.html',
  styleUrls: ['./controle-viajem.component.css']
})
export class ControleViajemComponent {

  viajemArray = AppComponent.viajemArray;
}
