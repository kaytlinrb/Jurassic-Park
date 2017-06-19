import {Pipe, PipeTransform} from '@angular/core';
import {Exhibit} from './exhibit.model';

@Pipe({
  name: "maturity",
    pure: false
})

export class MaturityPipe implements PipeTransform {


  transform(input: Exhibit[], desiredCompleteness) {
      var output: Exhibit[] = [];
      if(desiredCompleteness === "young") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age <= 2) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCompleteness === "old") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age > 2) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }


  }
