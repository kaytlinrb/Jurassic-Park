import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Component ({
  selector: 'list-exhibits',
  template: `

  <select (change)="onChange($event.target.value)">
        <option value="all">All Dinos</option>
        <option value="young">Young</option>
        <option value="old" selected="selected">Old</option>
      </select>



  <div class="container">
  <h1>Exhibit List</h1>
  <br>
  <div *ngFor="let dino of dinoList | maturity:filterByMaturity">
  <hr>
  <a (click)="editDino(dino)"><h3>Name: {{dino.name}}</h3>
  <h3>Species: {{dino.species}}</h3>
  <h3>Age: {{dino.age}}</h3>
  <h3>Current Location: {{dino.location}}</h3>
  <h3>Number of Caretakers: {{dino.caretakers}}</h3>
  <h3>Sex: {{dino.sex}}</h3>
  <h3>Likes: {{dino.likes}}</h3>
  <h3>Dislikes: {{dino.dislikes}}</h3></a>
  </div>
  <hr>
  `
})

export class ExhibitList {
  @Input() dinoList: Exhibit[];
  @Output() editDinoSender = new EventEmitter();

  filterByMaturity: string = "young";

  editDino(editedDino: Exhibit) {
    this.editDinoSender.emit(editedDino);
  }

  onChange(optionFromMenu) {
  this.filterByMaturity = optionFromMenu;
}

}
