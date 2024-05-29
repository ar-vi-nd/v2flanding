import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LandingmidComponent } from './Components/landingmid/landingmid.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { FooterComponent } from './Components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LandingComponent,LandingmidComponent,CarouselComponent,NewsletterComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v2flanding';
}
