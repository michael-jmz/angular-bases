import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  // Para poder tener comunicacion desde otro componete Padre
  //Y este objeto seria el que esta por defecto
  @Input()
  public listCharacter : Character[] = [
    {
      name: 'Trunks',
      power: 400
    }
  ]
  @Output()
  public onDeleteEnviado: EventEmitter<string>= new EventEmitter();


  // onDeleteCharacter(index:number):void{
  //   console.log(index);
  //   this.onDeleteEnviado.emit(index);// aqui emito o envio mi indice
  // }

  //Emitir un evento es decir mandar este Indice para que pueda tenerlo el padre
  //UUID sera de tipo strign
  onDeleteCharacterUUID(uuid?:string):void{
    console.log({uuid});
    if (!uuid) return; // si no existe no retorne nada
    this.onDeleteEnviado.emit(uuid);// aqui emito o envio mi indice
  }


}
