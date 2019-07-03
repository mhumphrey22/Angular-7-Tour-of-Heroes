import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//  Environment
import { environment } from '../environments/environment';

//  Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MessagesComponent } from './components/messages/messages.component';

//  Services
import { InMemoryDataService } from './services/InMemoryDataService/in-memory-data.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                FormsModule,
                HttpClientModule,
                HttpClientInMemoryWebApiModule.forRoot(
                    InMemoryDataService, { dataEncapsulation: false }
                )
            ],
            declarations: [
                AppComponent,
                DashboardComponent,
                HeroesComponent,
                HeroDetailComponent,
                HeroSearchComponent,
                MessagesComponent
            ],
        }).compileComponents();
    }));

    it('AppComponent should be created', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });

    it('Title should equal Tour of Heroes – Environment Name', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app.title).toEqual(`Tour of Heroes – ${ environment.name }`);
    });

});
