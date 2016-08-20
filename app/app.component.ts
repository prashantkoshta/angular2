import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <toh-heroes></toh-heroes>
    `,
    directives:[HeroesComponent]
})
export class AppComponent {
    title:String = "Now Learning Angular2"
 }
