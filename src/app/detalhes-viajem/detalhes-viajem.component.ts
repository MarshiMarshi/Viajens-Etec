import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-viajem',
  templateUrl: './detalhes-viajem.component.html',
  styleUrls: ['./detalhes-viajem.component.css']
})
export class DetalhesViajemComponent {

  viajem = AppComponent.viajemArray;
  receivedId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.receivedId = +params['id'];
    });
  }
}
