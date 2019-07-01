import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

 // Services
 import { HeroService } from '../hero.service';

 //  Interfaces
import { Hero } from '../hero.interface';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;


    constructor(
        private heroService: HeroService,
        private location: Location,
        private router: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        //  The Javascript (+) operator converts the string to a number.
        const id = +this.router.snapshot.paramMap.get('id');

        this.heroService.getHero(id)
                                     .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
