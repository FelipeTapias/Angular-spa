import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  //Es el primero en ejecutarse
  constructor( private _heroesService: HeroesService ,
               private router: Router ) {

  }

  ngOnInit(): void { //Se ejecuta cuando la página ya esta renderizada
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
