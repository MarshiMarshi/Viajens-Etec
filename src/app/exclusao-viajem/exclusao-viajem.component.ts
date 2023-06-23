import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { Viajem } from '../Models/viajem';

@Component({
  selector: 'app-exclusao-viajem',
  templateUrl: './exclusao-viajem.component.html',
  styleUrls: ['./exclusao-viajem.component.css']
})
export class ExclusaoViajemComponent {

  viajem = AppComponent.viajemArray;
  receivedId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.receivedId = +params['id'];
    });
  }
}
