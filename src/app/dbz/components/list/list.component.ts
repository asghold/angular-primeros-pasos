import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    name: 'Trunks',
    power: 100
  }];

  @Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  //onDeleteCharacter(index: number):void{
    onDeleteCharacter(uuid?: string):void{

   this.onDelete.emit(uuid);

  }
}
