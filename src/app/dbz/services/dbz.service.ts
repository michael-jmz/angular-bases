// a-service + tab para un esquema de servicio

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4  as uuid} from 'uuid';

// console.log(v4()); //para ver el id que me genera

@Injectable({providedIn: 'root'})// no importa donde lo uses el valor sera igual =SINGELTON
export class DbzService {
  public character: Character[] = [{
    id:uuid(),
    name: 'Krilin',
    power:500,
  },
  {
    id:uuid(),
    name: 'Goku',
    power: 1000
  },
  {
    id:uuid(),
  name: 'Picoro',
  power:800
  }
];
addCharacters(character:Character):void{ // revibira desde forma un character = formulario
console.log('Main Page');
//Forma 1
// const newCharacter: Character ={
//   id: uuid(),
//   name:character.name,
//   power:character.power
// }
//Forma 2

const newCharacter: Character = {
  id:uuid(),
  ...character//Obtenga todas sus porpiedad de la interfaz
};
  console.log(this.character);
  this.character.push(newCharacter);

}

onDeleteRecibido(index:number){
  this.character.splice(index, 1); // le digo que me borre solo un elemento

}

onDeleteUUID(uuid: string){
  this.character = this.character.filter( character=> character.id !==uuid);
}

}
