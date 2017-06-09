import { Component, Output, EventEmitter } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Component({
  selector: 'new-dino',
  template: `
  <div class="container">
    <h1>Add Dinosaur</h1>
    <div>
     <label>Enter Name:</label>
     <input #newName>
     <label>Enter Species:</label>
     <input #newSpecies>
     <label>Enter Age:</label>
     <input #newAge>
     <label>Enter Current Location:</label>
     <input #newLocation>
     <label>Enter Number of Caretakers:</label>
     <input #newCaretakers>
     <label>Enter Sex:</label>
     <input #newSex>
     <label>Enter Diet:</label>
     <input #newDiet>
     <label>Enter Likes:</label>
     <input #newLikes>
     <label>Enter Dislikes:</label>
     <input #newDislikes>

     <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newLocation.value, newCaretakers.value, newSex.value, newDiet.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newDiet.value=''; newLikes.value=''; newDislikes.value='';">Add Dino</button>
   </div>
  </div>
  `
})

export class NewDino {
  @Output() addedDino = new EventEmitter();

  submitForm(name: string, species: string, age: number, location: string, caretakers: number, sex: string, diet: string, likes: string, dislikes: string){

  var createdDino: Exhibit = new Exhibit(species, name, age, diet, location, caretakers, sex, likes, dislikes);

  this.addedDino.emit(createdDino);
  }
}
