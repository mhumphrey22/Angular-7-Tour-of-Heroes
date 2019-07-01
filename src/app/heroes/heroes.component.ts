import { Component, OnInit } from '@angular/core';

//  Services
import { HeroService } from '../hero.service';

//  Interfaces
import { Hero } from '../hero.interface';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

    public heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
                                     .subscribe(heroes => this.heroes = heroes);
    }

}
