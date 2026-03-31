import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {

    let currentdate : any = new Date().getFullYear();

    let dobyear : any = new Date(value).getFullYear();


    return currentdate - dobyear ;
  }

}
