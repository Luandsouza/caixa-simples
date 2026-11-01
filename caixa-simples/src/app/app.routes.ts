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
    }
];



//  {
//         path: "cursos/cadastrar",
//         loadComponent: () =>
//             import(`./pages/cursos/cadastro/cadastro`).then(x => x.CursoCadastroComponent)
//     },