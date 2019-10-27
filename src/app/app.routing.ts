import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './modules/home';
import { LoginComponent } from './modules/login';
import { SocialUserComponent } from './modules/social-user';
import { RegisterComponent } from './modules/register';
import { AuthGuard } from './core/guards';
import { UserResolver } from './core/resolvers';


const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full'}, 
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    { path: 'user', component: SocialUserComponent,  resolve: { data: UserResolver}}
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { useHash: false });