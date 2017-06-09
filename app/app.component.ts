import { Component } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Jurassic Park</h1>
    <list-exhibits [dinoList]="dinos" (editDinoSender)="editDino($event)"></list-exhibits>
    <edit-dino [dinoToEdit]="selectedDino" (doneButtonSender)="finishedEditing()"></edit-dino>
    <new-dino (addedDino)="createDino($event)"></new-dino>
  </div>
  `
})

export class AppComponent {
  selectedDino= null;
  dinos: Exhibit[] = [
    new Exhibit('Brontosaurus', 'Becky', 12, 'Herbivore', 'Waterfall', 6, 'Female', 'Food', 'Raptors'),
    new Exhibit('Raptor', 'Ripper', 2, 'Carnivore', 'Fence', 40, 'Male', 'People', 'Guns')
  ];

  editDino(clickedDino) {
    this.selectedDino = clickedDino;
    console.log(clickedDino);
  }

  createDino(newDino) {
    this.dinos.push(newDino);
  }

  finishedEditing() {
    this.selectedDino = null;
  }

}
