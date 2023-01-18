import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule {
  constructor(
    private injector: Injector,
  ) { }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
    const pokemonElement = createCustomElement(PokemonComponent, {injector: this.injector});
    customElements.define('app-pokemon', pokemonElement);
  }

}
