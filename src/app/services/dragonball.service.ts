import { Injectable, signal } from '@angular/core'
import { Character } from '../interface/character.interface';

@Injectable({ providedIn: 'root' })
export class dragonBallService {
    //Objeto de caracteres
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 200 },
    ]);

    //Agregar caracter
    aggCharacter(character: Character) {
        this.characters.update((list) => [...list, character]);
    }

    //Delete Character
    DeleteCharacter(character: Character) {
        alert('klok manito')
    }
}
