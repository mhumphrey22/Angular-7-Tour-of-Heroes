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

    public getHeroes(): void {
        this.heroService.getHeroes()
                                     .subscribe(heroes => this.heroes = heroes);
    }

    public add(name: string): void {
        name = name.trim();

        if (!name) { return; }

        this.heroService.addHero({ name } as Hero)
                                     .subscribe(hero => {
                                         this.heroes.push(hero);
                                     });
    }

    public delete(hero: Hero): void {
        this.heroes = this.heroes.filter(x => x !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }

}
