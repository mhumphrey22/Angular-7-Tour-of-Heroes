import { Component, OnInit } from '@angular/core';

//  Services
import { HeroService } from '../hero.service';

//  Interfaces
import { Hero } from '../hero.interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
                                     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

}
