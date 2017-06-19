import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ExhibitList } from './list-exhibits.component';
import { NewDino } from './new-dino.component'
import { EditDino } from './edit-dino.component';
import { MaturityPipe } from './maturity.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ExhibitList, NewDino, EditDino, MaturityPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
