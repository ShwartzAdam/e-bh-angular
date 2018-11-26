import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chmodPipe'
})
export class ChmodPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( value === '7') return 'Read,Write,Execute';
    if( value === '6') return 'Read,Write';
    if( value === '5') return 'Read,Execute';
    if( value === '4') return 'Read';
    if( value === '3') return 'Write,Execute';
    if( value === '2') return 'Write';
    if( value === '1') return 'Execute';
    if( value === '1') return 'No Permission';

  }

}
