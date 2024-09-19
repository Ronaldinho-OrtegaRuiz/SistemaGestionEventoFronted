import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {OnInit} from "@angular/core";
import {initFlowbite} from "flowbite";
import {HomeComponent} from "./landing/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SistemaGestionEventoFrontend';

  ngOnInit(): void {
    initFlowbite();
  }
}

