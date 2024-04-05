import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addpipec'
})
export class AddpipecPipe implements PipeTransform {
  transform(arr:number[]) {    
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  }

}
