import { effect, Injectable, signal } from '@angular/core'
import { Character } from '../interface/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class dragonBallService {
    //Objeto de caracteres
    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage
            .setItem(
                'character',
                JSON.stringify
                    (
                        this.characters()
                    )
            );
    });

    //Agregar caracter
    aggCharacter(character: Character) {
        this.characters.update((list) => [...list, character]);
    }

    //Delete Character
    DeleteCharacter(character: Character) {
        alert('klok manito')
    }
}
