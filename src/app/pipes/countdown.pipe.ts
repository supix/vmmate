import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(d: Date): unknown {
    const now = new Date();
    let diffTime = (d.getTime() - now.getTime());

    if (diffTime < 0)
      return "0d 0h 0m";

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    diffTime -= diffDays * 1000 * 60 * 60 * 24;
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60)); 
    diffTime -= diffHours * 1000 * 60 * 60;
    const diffMinutes = Math.floor(diffTime / (1000 * 60)); 

    return `${ diffDays }d ${ diffHours }h ${ diffMinutes }m`;
  }

}
