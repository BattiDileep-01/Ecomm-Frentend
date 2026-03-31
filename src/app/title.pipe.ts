import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true
})
export class TitlePipe implements PipeTransform {

  transform( name: String , gender: String): String {

    if(gender.toLocaleLowerCase() =='male'){
      return 'Mr. ' + name;
    }
    else{
    return 'Mrs. ' + name;
    }
  }

}
