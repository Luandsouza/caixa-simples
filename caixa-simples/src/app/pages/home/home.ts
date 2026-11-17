import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Topbar } from '../../layout/topbar/topbar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Sidebar, Topbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
