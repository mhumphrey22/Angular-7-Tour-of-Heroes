import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

//  Services
import { HeroService } from '../../services/HeroService/hero.service';

//  Model
import { Hero } from '../../models/hero.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public headerTitle = `Tour of Heroes – ${ environment.name }`;

    public searchControl = new FormControl();
    public heroes: Hero[];
    public filteredHeroes: Observable<Hero[]>;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        //  Base Hero Set
        this.heroService.getHeroes()
            .subscribe((heroes) =>  {
                this.heroes = heroes;

                //  Filtered Set
                this.filteredHeroes = this.searchControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => typeof value === 'string' ? value : value.name),
                        map(name => name ? this.filter(name) : this.heroes.slice())
                    );
            });
    }

    public displayWith(hero?: Hero) {
        return hero ? hero.name : undefined;
    }

    private filter(value: string): Hero[] {
        const filterValue = value.toLowerCase(); 

        return this.heroes.filter(hero => hero.name.toLowerCase().includes(filterValue));
    }

}
