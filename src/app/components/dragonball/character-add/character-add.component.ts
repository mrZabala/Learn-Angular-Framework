import { Component, output, inject, signal } from '@angular/core';
import { Character } from '../../../interface/character.interface';
import { dragonBallService } from "../../../services/dragonball.service"


@Component({
  selector: 'dragonball-character-add',
  imports: [],
  standalone: true,
  templateUrl: './character-add.component.html',
})

export class CharacterAddComponent {
  public dragonBallService = inject(dragonBallService);


  name = signal('') //Nombre del nuevo personaje
  power = signal(0) //Poder del nuevo personaje

  newCharacter = output<Character>();

  aggCharacter() {
    //Validando que el nombre y el poder no esten vacios
    if (!this.name() || !this.power()) {
      return;
    }

    //Creando nuevo caracter o personaje
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter)
    this.resetFields();
  }

  DeleteCharacter() {
    alert('klok compita')
  }


  resetFields() {

    //Limpiando campos en la UI
    this.name.set('');
    this.power.set(0);
  }
}
