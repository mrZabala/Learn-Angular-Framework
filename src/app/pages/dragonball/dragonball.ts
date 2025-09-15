import { Component, signal } from "@angular/core";
import { NgClass } from "@angular/common";
import {Character} from "../../interface/character.interface"

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dragonball.html',
  styleUrls: ['./dragonball.css']
})

export class Dragonball {
  //Propiedades
  name = signal('Trunks');
  power = signal(200);

  //Objeto de caracteres
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 200 },
  ]);

  //Agregar caracter
  aggCharacter() {
    //Validar credenciales
    if (!this.name().trim() || this.power() <= 0) {
      return;
    }

    //Crear nuevo caracter
    const newCharacter: Character = {
      id: this.characters().length + 1, //Toma el ultimo id del array y le suma 1
      name: this.name(), //nombre
      power: this.power(), //poder
    };

    this.characters.update(chars => [...chars, newCharacter]); //Actualiza y agrega eun nuevo caracter al arreglo de caracters
    this.name.set(''); //limpia el campo de nombre
    this.power.set(0); //limpia poder
  }
}
