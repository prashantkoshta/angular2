import { Component, OnInit } from '@angular/core';
import { Hero  } from './hero.model';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'toh-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls:['heroes.component.css'],
    directives: [HeroComponent],
    providers:[HeroService]
})
export class HeroesComponent implements OnInit {
    heroes:Hero[];
    selectedHero:Hero;
    constructor(private heroService:HeroService) { }

    ngOnInit() {
        this.heroService.getHeros()
            .subscribe(heroes => this.heroes = heroes);
        
        //this.heroes = this.heroService.getHeros(); 
        /*this.heroes = [
            {'id':1,'name':'Roy'},
            {'id':2,'name':'Rohan'},
            {'id':3,'name':'Anita'}
        ];*/
     }

     onSelect(hero:Hero){
         this.selectedHero = hero;
     }

}

