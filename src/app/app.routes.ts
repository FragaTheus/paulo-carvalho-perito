import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/seo/layout-component/layout-component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/seo/inicio-page-component/inicio-page-component').then(
            (m) => m.InicioPageComponent,
          ),
      },
      {
        path: 'advogados',
        loadComponent: () =>
          import('./features/seo/advogados-page-component/advogados-page-component').then(
            (m) => m.AdvogadosPageComponent,
          ),
      },
      {
        path: 'empresas',
        loadComponent: () =>
          import('./features/seo/empresas-page-component/empresas-page-component').then(
            (m) => m.EmpresasPageComponent,
          ),
      },
      {
        path: 'insalubridade',
        loadComponent: () =>
          import('./features/seo/insalubridade-page-component/insalubridade-page-component').then(
            (m) => m.InsalubridadePageComponent,
          ),
      },
      {
        path: 'periculosidade',
        loadComponent: () =>
          import('./features/seo/periculosidade-page-component/periculosidade-page-component').then(
            (m) => m.PericulosidadePageComponent,
          ),
      },
      {
        path: 'acidente-de-trabalho',
        loadComponent: () =>
          import('./features/seo/acidente-de-trabalho-page-component/acidente-de-trabalho-page-component').then(
            (m) => m.AcidenteDeTrabalhoPageComponent,
          ),
      },
    ],
  },
];
