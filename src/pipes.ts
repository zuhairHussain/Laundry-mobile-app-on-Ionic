import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'itemFilter',
    pure: false
})
export class itemFilter implements PipeTransform {
    transform(items, filter: any): any {
        if (!items || !filter) {
            return items;
        }
        const result = items.filter(data => data.id == filter);
        return result[0];
       
    }
}

@Pipe({
    name: 'supplyFilter',
    pure: false
})
export class supplyFilter implements PipeTransform {
    transform(items, filter: any): any {
        if (!items || !filter) {
            return items;
        }
        const result = items.filter(data => data.id == filter);
        return result[0];
       
    }
}


@Pipe({
    name: 'customersFilter',
    pure: false
})
export class customersFilter implements PipeTransform {
    transform(items, filter: any): any {
        if (!items || !filter) {
            return items;
        }
        const result = items.filter(data => data.id == filter);
        return result[0];
       
    }
}