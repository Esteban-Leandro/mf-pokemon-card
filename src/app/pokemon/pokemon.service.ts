import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pokemon } from './pokemon';
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) { }

  getPokemon(context: string): Observable<Pokemon>{
    return this.http.get(environment.POKE_API_URL + context)
    .pipe(
      map((pokemon: any)=>{
        return pokemon
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(()=>error);
      }),
      timeout(5000)
    )
  }
}
