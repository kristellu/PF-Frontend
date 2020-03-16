import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudiosComponent } from './pages/studios/studios.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { GamesComponent } from './components/games/games.component';
import { ErrorComponent } from './pages/error/error.component';
import { SectionComponent } from './components/sections/section/section.component';
import { ItemDirective } from './directives/item.directive';
import { SectionImgBgComponent } from './components/sections/section-img-bg/section-img-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    StudiosComponent,
    TestimoniosComponent,
    GamesComponent,
    ContactComponent,
    EventsComponent,
    ErrorComponent,
    SectionComponent,
    ItemDirective,
    SectionImgBgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
