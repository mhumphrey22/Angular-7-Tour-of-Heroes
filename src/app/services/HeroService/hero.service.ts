import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//  Services
import { MessageService } from '../MessageService/message.service';

//  Interfaces
import { Hero } from '../../models/hero.interface';
import { HEROES } from '../../data/mock-heroes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    public getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
                        tap(_ => this.log('Fetched Heroes')),
                        catchError(this.handleError<Hero[]>('getHeroes', []))
                    );
    }

    public getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.get<Hero>(url).pipe(
                        tap(_ => this.log(`Fetched Hero Id: ${id}`)),
                        catchError(this.handleError<Hero>(`getHero Id: ${id}`))
                    );
    }

    public updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
                        tap(_ => this.log(`updateHero Id: ${hero.id}`)),
                        catchError(this.handleError<any>('updateHero'))
                   );
    }

    public addHero (hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
                        tap((newHero: Hero) => this.log(`addHero Id: ${newHero.id}`)),
                        catchError(this.handleError<Hero>('addHero'))
                    );
    }

    public deleteHero(hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete<Hero>(url, httpOptions).pipe(
                        tap(_ => this.log(`deleteHero Id: ${id}`)),
                        catchError(this.handleError<Hero>('deleteHero'))
                    );
    }

    public searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) { return of ([]); }

        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
                        tap(_ => this.log(`searchHeroes Term: ${term}`)),
                        catchError(this.handleError<Hero[]>('searchHeroes', []))
                    );
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
