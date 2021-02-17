import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService ) { //Es el primero en ejecutarse

  }

  ngOnInit(): void { //Se ejecuta cuando la página ya esta renderizada
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
