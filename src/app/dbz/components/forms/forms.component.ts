import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {


  //necesito de alguna manera emitir los datos hacia el padre  () Formulario ) donde el padre puede suscribirse

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character :Character={
    name:'Por defecto',
    power:0
  };

  formInfo():void{


    //validar si no viene nombre no aceptamos
    if (this.character.name.length===0) return;

    // caso contrario si acepta
      this.onNewCharacter.emit(this.character)//emitimos el formulario
    console.log(this.character);
    //luego que captura la infomracion debo limpiar mis cajas de texto
    this.character = {name:'',power:0};
  }


}
