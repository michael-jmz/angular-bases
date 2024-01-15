import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './mian-pages.component.html'
})

export class MainComponent {

//En el constructor debo traer mi servicio (injeccio de dependecnias)
  constructor(private dbsService: DbzService ){

  }

  //Obtengo mi servicio
  get character (): Character []{
    return [...this.dbsService.character];
  }

  getDeletePersonaje(uuid:string):void{
    this.dbsService.onDeleteUUID(uuid);

  }
  addPersonaje (character: Character):void {
    this.dbsService.addCharacters(character);

  }



}
