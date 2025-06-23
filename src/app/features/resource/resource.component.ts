import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ResourceService } from './resource.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  imports: [JsonPipe],
  styleUrl: './resource.component.scss',
})
export class ResourceComponent {
  private readonly resourceService = inject(ResourceService);
  readonly pokemon = signal<string>('ditto');

  readonly pokemonResource = resource({
    request: this.pokemon,
    loader: async (params) => {
      const pokemon = params.request;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {signal: params.abortSignal});
      return await response.json();
    }
  });

  readonly pokemonResource$ = rxResource({
    request: this.pokemon,
    loader: (params) => this.resourceService.get(params.request)
  })

  updatePokemonState(pokemon: string): void {
    this.pokemonResource.update(() => (pokemon))
  }

  updatePokemonParam(pokemon: string): void {
    this.pokemon.set(pokemon);
  }

  reloadPokemon(): void {
    this.pokemonResource.reload();
  }
}
