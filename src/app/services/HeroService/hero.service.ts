import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//  Services
import { MessageService } from '../MessageService/message.service';

//  Interfaces
import { Hero } from '../../models/hero.interface';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class HeroService {

    private heroesUrl = 'https://localhost:44309/api/heroes';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    public getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
                                   .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
    }

    public getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.get<Hero>(url)
                                   .pipe(catchError(this.handleError<Hero>(`getHero Id: ${id}`)));
    }

    public saveHero (hero: Hero): Observable<Hero> {
        const url = this.heroesUrl + '/saveHero';

        return this.http.post<Hero>(url, hero, httpOptions)
                                    .pipe(catchError(this.handleError<Hero>('saveHero')));
    }

    public deleteHero(hero: Hero): Observable<any> {
        const url = this.heroesUrl + '/deleteHero';

        return this.http.post<Hero>(url, hero, httpOptions)
                                  .pipe(catchError(this.handleError<Hero>('deleteHero')));
    }

    public searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) { return of ([]); }

        const url = `${ this.heroesUrl }/search/${ term }`;

        return this.http.get<Hero[]>(url)
                                  .pipe(catchError(this.handleError<Hero[]>('searchHeroes', [])));
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
}
