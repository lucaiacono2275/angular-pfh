import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: any;

    constructor(private router: Router) {
   
    }

    logout() {
        this.router.navigate(['/login']);
    }
}
