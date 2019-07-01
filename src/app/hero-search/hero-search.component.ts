import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//  Services
import { HeroService } from '../hero.service';

//  Interfaces
import { Hero } from '../hero.interface';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss']
})

export class HeroSearchComponent implements OnInit {

    public heroes$: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
            //  Wait 300ms after each keystroke
            debounceTime(300),

            //  Ignore new term if its the same as the last term
            distinctUntilChanged(),

            //  Switch to new search observable each tim ethe term changes
            switchMap((term: string) => this.heroService.searchHeroes(term))
        );
    }

    //  Push a search term into the Observable stream.
    public search(term: string): void {
        this.searchTerms.next(term);
    }

}
