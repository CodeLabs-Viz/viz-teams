import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable()
export class PersonParserService {

  constructor() { }

  parsecsv(file){
    let result;
    const reader=new FileReader();
    reader.onload=()=>{
      result= this.parseFileIntoPeople(reader.result);
    }
    reader.readAsText(file);
    return result;
  }

  parseFileIntoPeople(text){
    let people:Person[]=[];
    text.split('\n').forEach(line => {
      people.push(this.parseLineIntoPerson(line))
    });
    return people;
  }

  parseLineIntoPerson(line){
    let props= line.split(',');  
    let person: Person={
      firstName:props[0],
      lastName:props[1],
      position:props[2],
      team:props[3]
    };
    return person;
  }
}


