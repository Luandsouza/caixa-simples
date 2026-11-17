import { Component } from '@angular/core';
import { LucideBell } from '@lucide/angular';

@Component({
  selector: 'app-topbar',
  imports: [LucideBell],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  dataAtual = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}






// dataAtual = new Intl.DateTimeFormat('pt-BR', {
//     weekday: 'long',
//     day: '2-digit',
//     month: 'long',
//     year: 'numeric',
//   }).format(new Date());


