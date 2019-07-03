import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//  Used to mock Routing
import { RouterTestingModule } from '@angular/router/testing';

//  Components
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

//  Service
import { HeroService } from '../../services/HeroService/hero.service';


describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                DashboardComponent,
                HeroSearchComponent
            ],
            providers: [
                HeroService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
