import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pg-inicial',
  imports: [FormsModule, RouterLink],
  templateUrl: './pg-inicial.html',
  styleUrl: './pg-inicial.css',
})
export class PgInicialComponent {
}

// constructor(private router: Router) {}