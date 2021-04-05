import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
// import { AuthGuard } from './auth/auth.guard';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    data: { animation: 'home' }
  },
  // Uncomment to load remote microfrontend route from angular:
  // *) Static Federation from Webpack - comment below
  // **) Dynamic Federation from Angular - uncomment below
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        // **)*) Load remote entry at bootstrap - comment below
        // remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
        .then(m => m.FlightsModule),
    data: { animation: 'flights' }
  },

  // *) Static Federation from Webpack - uncomment below
  // **) Dynamic Federation from Angular - comment below
  // Dynamic imports via lazy loading of modules
  // {
  //   path: 'flights',
  //   loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  // },

  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //   canLoad: [AuthGuard]
  // },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: 'not-found' }
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

