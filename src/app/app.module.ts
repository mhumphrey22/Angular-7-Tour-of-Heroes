import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//  Modules
import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  Routing
import { AppRoutingModule } from './app-routing.module';

//  Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MessagesComponent } from './components/messages/messages.component';
// import { NavigateBackComponent } from './components/navigate-back/navigate-back.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        MessagesComponent,
        HeaderComponent,
        // NavigateBackComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        AngularMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
