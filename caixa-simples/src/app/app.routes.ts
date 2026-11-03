import { Routes } from '@angular/router';
import { PgInicialComponent } from './pages/pg-inicial/pg-inicial';

export const routes: Routes = [
    {
        path: '',
        component: PgInicialComponent
    }, {
        path: "cadastro",
        loadComponent: () =>
            import(`./pages/cadastro/cadastro`).then(x => x.Cadastro)
    }, {
        path: "login",
        loadComponent: () =>
            import(`./pages/login/login`).then(x => x.Login)
    }, {
        path: "home",
        loadComponent:() =>
            import(`./pages/home/home`).then(x => x.Home)
    }
];


