import { Component } from '@angular/core';
import Typed from 'typed.js';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor() {}
 
  ngOnInit() {
    const options = {
      strings: ['Programador', 'Desenvolvedor'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 const typed = new Typed('.typed-element', options);
  }
}
