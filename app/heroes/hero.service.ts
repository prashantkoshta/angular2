import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

    constructor(private http:Http) { }
    getHeros(){
        return this.http.get('app/heroes.json')
            .map((res: Response) => res.json());
        /*return [
            {'id':1,'name':'Roy'},
            {'id':2,'name':'Rohan'},
            {'id':3,'name':'Anita'},
            {'id':4,'name':'Mike'}
        ];*/
    }
}

