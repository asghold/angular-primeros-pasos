import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Iron man";
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;

  }

  changeHero(){
    this.name = 'Spider-Man'
  }

  changeAge(){
    this.age = 25;
  }

  resetForm():void {
    this.name= 'Iron man';
    this.age= 45;
  }

}
