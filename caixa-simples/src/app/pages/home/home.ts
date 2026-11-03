import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
