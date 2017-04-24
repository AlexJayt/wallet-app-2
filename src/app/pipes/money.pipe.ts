import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: String;
    let str: String;
    let number: Number = Number(value);

    str = String(number.toFixed(2));
    result = '.' + str[str.length - 2] + str[str.length - 1];
    str = String(number.toFixed(0));

    let count = 0;

    for (let i = str.length; i > 0; i--) {
      if (count == 3) {
        result = " " + result;
        count = 0;
      }
      result = str[i - 1] + result;
      count++;
    }
    return result + " " + args.toUpperCase();
  }
}
