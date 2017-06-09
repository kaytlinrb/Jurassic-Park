import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Component({
  selector: 'edit-dino',
  template:`
  <div class="container">
    <div *ngIf="dinoToEdit">
      <div>
        <label>Enter Name:</label>
        <input [(ngModel)]="dinoToEdit.name">
        <label>Enter Age:</label>
        <input [(ngModel)]="dinoToEdit.age">
        <label>Enter Number of Caretakers:</label>
        <input [(ngModel)]="dinoToEdit.caretakers">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class EditDino {
  @Input() dinoToEdit: Exhibit[];
  @Output() doneButtonSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonSender.emit();
  }
}
