import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person'; 

@Pipe({
  name: 'sidebarSortAsc'
})
export class SidebarSortAscPipe implements PipeTransform {

  transform(value: Person[], args?: any): any {
    return value.sort((a, b) => a.firstName > b.firstName ? 1 : -1);
  }

}
