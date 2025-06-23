import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
interface Fruit {
  id: string;
  name: string;
  color: string;
}


@Injectable({ providedIn: 'root' })
export class ResourceService {
  private readonly http = inject(HttpClient);
  get(pokemon: string): Observable<Fruit> {
    return this.http.get<Fruit>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  }
}
