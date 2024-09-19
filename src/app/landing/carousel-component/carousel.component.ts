import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'landing-carousel-component',
  templateUrl: './carousel.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    '/image/cartagena-home-1.jpg',
    '/image/cartagena-home-2.jpg',
    '/image/cartagena-home-3.jpg',
    '/image/cartagena-home-4.jpg'
  ];
  currentImageIndex = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.updateImage();
    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
      this.updateImage();
    }, 5000);
  }

  updateImage() {
    const images = this.el.nativeElement.querySelectorAll('img');
    images.forEach((img: HTMLElement, index: number) => {
      if (index === this.currentImageIndex) {
        this.renderer.addClass(img, 'active');
      } else {
        this.renderer.removeClass(img, 'active');
      }
    });
  }

  get currentImage() {
    return this.images[this.currentImageIndex];
  }
}
