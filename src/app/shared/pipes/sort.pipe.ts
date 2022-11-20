import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/models/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(arr: any[], params: any): any[] {
    if (!params) {
      return arr;
    }

    let { type, option } = params;

    if (type === 'asc') {
      arr.sort((a: any, b: any) => {
        if (a[option].toString() < b[option].toString()) {
          return -1;
        } else if (a[option].toString() > b[option].toString()) {
          return 1;
        } else {
          return 0;
        }
      });
      return arr;
    }
    arr.sort((a: any, b: any) => {
      if (a[option].toString() < b[option].toString()) {
        return 1;
      } else if (a[option].toString() > b[option].toString()) {
        return -1;
      } else {
        return 0;
      }
    });
    return arr;
  }
}
