import { Component } from '@angular/core';
import {CarouselComponent} from "../carousel-component/carousel.component";

@Component({
  selector: 'landing-home',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
