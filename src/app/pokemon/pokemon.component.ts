import { Component, Input, OnChanges, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';



import { Pokemon } from './pokemon';
import { MS_POKEMON_API_CONTEXT, replacePath } from './pokemon.mappers';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonComponent implements OnChanges {
  @Input()
  public name: string ='charizard';

  public pokemon!: Pokemon;
  public pokemonSubscription!: Subscription;

  public pokemonStatMap: Map<string, string> = new Map([
    ['hp','HP'],
    ['attack','Ataque'],
    ['defense','Defensa'],
    ['special-attack','Atq. Especial'],
    ['special-defense','Def. Especial'],
    ['speed','velocidad'],
  ])

  constructor(
    public pokemonService: PokemonService
  ) { }

  async renderPokemon(){
    const context = MS_POKEMON_API_CONTEXT.POKEMON + replacePath(MS_POKEMON_API_CONTEXT.POKEMON_NAME, this.name)
    const pokemon = await this.pokemonService.getPokemon(context).toPromise();
    if(!pokemon)throw new Error("pokmon is null");
    
    this.pokemon = pokemon
  }


  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    console.log('ngOnChanges(changes')
    await this.renderPokemon();

  }


}
