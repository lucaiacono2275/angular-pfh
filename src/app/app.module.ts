import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './core/interceptors';
import { AuthGuard} from './core/guards';


//import { HomeComponent } from './modules/home';
import { LoginComponent } from './modules/login';
import { RegisterComponent } from './modules/register';
import { AlertComponent } from './shared/components/alert';




import { SocialAuthService, SocialUserService } from './core/services';
import { UserResolver } from './core/resolvers';
import { SocialUserComponent } from './modules/social-user';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule // imports firebase/auth, only needed for auth features
    ],
    declarations: [
        AppComponent,
  //      HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        SocialUserComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        //fakeBackendProvider, // provider used to create fake backend
        SocialUserService,
        SocialAuthService,
        UserResolver,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
