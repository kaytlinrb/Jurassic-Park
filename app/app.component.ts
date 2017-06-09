import { Component } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Jurassic Park</h1>
    <list-exhibits [dinoList]="dinos"></list-exhibits>
  </div>
  `
})

export class AppComponent {
  dinos: Exhibit[] = [
    new Exhibit('Brontosaurus', 'Becky', 12, 'Herbivore', 'Waterfall', 6, 'Female', 'Food', 'Raptors')
  ];

  newExhibit(newDino){
    this.dinos.push(newDino);
  }

}