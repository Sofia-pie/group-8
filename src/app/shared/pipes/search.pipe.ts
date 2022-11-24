import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/models/product';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], field: string, search: any): any[] {
    if (search && typeof search == 'number') {
      return products.filter((pr) => pr[field] === search);
    }
    if (!search || search.length === 0) return products;

    return products.filter((pr) =>
      pr[field].toLowerCase().includes(search.toLowerCase())
    );
  }
}
