import { Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { dragonBallService } from "../../services/dragonball.service"

@Component({
  selector: 'dragonballSuper',
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  styleUrls: ['./dragonball-super.css'],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuper {
  public dragonBallService = inject(dragonBallService);


}

