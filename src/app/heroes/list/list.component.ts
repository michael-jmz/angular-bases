import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['IronMan', 'Superman', 'Hulk'];

  public deleteHero?: string;

  removeLastHereo():void{
    this.deleteHero =this.heroNames.pop();

  }

}
