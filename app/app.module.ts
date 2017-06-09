import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ExhibitList } from './list-exhibits.component';
import { NewDino } from './new-dino.component'
// import { ListExhibits }   from './list-exhibits.component';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ExhibitList, NewDino ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
