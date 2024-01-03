import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nameHero: string='Iroman';
  public name:string ='Tony Start';
  public age:number=30;

  get capitalizedName ():string{
    return this.nameHero.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.nameHero} - ${this.name}`
  }

  changeHero(changeName:string):void{
    this.nameHero = changeName

  }
  changeAge(changeAge:number):void{
    this.age=changeAge;

  }


}
