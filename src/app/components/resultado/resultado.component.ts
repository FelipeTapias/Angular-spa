import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  heroes:any[] = [];
  termino: string;

  constructor( private activatedRouter: ActivatedRoute,
              private _heroeService: HeroesService ) {

   }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroes = this._heroeService.buscarHeroes( params['termino'] );
        // console.log(this.heroes);
      });
  }

}
