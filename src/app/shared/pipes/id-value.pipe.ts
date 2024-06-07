import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idValue'
})
export class IdValuePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
