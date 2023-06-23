import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viajem } from './Models/viajem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etec-Viajens';

  constructor(public router: Router) {}

  static viajemArray: Viajem[] = [
    new Viajem(0, "Acapulco", "LAZER", "08/06/2021", "28/06/2021", 3500, 4),
    new Viajem(1, "Egito (Cairo)", "LAZER", "20/06/2021", "28/06/2021", 4000, 4),
    new Viajem(2, "Nova Zelandia", "LAZER", "04/09/2021", "11/10/2021", 3000, 4),
    new Viajem(3, "Australia", "LAZER", "04/09/2021", "11/10/2021", 4130, 4)
  ];
}
