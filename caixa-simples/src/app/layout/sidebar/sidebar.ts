import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import {
  LucideSearch,
  LucideLayoutDashboard,
  LucideArrowLeftRight,
  LucideWallet,
  LucideTags,
  LucideChartNoAxesCombined,
  LucideSettings,
  LucideLogOut,
  LucideMenu,
} from '@lucide/angular';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive,LucideSearch,
  LucideLayoutDashboard,
  LucideArrowLeftRight,
  LucideWallet,
  LucideTags,
  LucideChartNoAxesCombined,
  LucideSettings,
  LucideLogOut,
  LucideMenu,],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private router: Router) {}

sair() {
  this.router.navigate(['/']);
}

  recolhido: boolean = false;
  menuItems = [
    {
      label: 'Visão geral',
      route: '/home',
      icon: 'layout-dashboard',
    },
    {
      label: 'Movimentações',
      route: '/movimentacao',
      icon: 'arrow-left-right',
    },
    {
      label: 'Contas',
      route: '/contas',
      icon: 'wallet',
    },
    {
      label: 'Categorias',
      route: '/categorias',
      icon: 'tags',
    },
    {
      label: 'Relatórios',
      route: '/relatorio',
      icon: 'chart-no-axes-combined',
    },
    {
      label: 'Configurações',
      route: '/configuracao',
      icon: 'settings',
    },

  ];
}


