import { Component, input } from '@angular/core';
import { Character } from '../../../interface/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
    standalone: true,
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {


  characters = input.required<Character[]>(); //Se recibe la lista y la muestra y se refiere a que necesita el Character para poder funcionar
  listName = input.required<string>(); //Aqui recibe un tipo de dato string
  
}
