import { Component } from '@angular/core';
import { Products } from './products/products';
import { RouterOutlet } from '@angular/router';
import { Users } from './components/users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Products,RouterOutlet,Users],
  templateUrl: './app.html',
})
export class App {}
