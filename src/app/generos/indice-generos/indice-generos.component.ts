import {Component, OnInit} from '@angular/core';
import {GeneroDTO} from '../interfaces/genero.interface';
import {GenerosService} from '../services/Genero.Service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.scss']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generoService: GenerosService) { }

  generos: GeneroDTO[];
  columnasAMostar = ['id', 'nombre', 'acciones'];

  ngOnInit(): void {
    this.generoService.ObtenerTodos()
      .subscribe(generos => {
        this.generos = generos;
        console.log(this.generos);
      }, error => console.log(error));
  }

}
