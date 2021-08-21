import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName'
})
export class FirstNamePipe implements PipeTransform {
  transform(name: string): string {
    if (name.includes('.')) {
      name = name.split('.')[1].trim();
    }
    return name.split(' ').slice(0, 1).join(' ');
  }
}
