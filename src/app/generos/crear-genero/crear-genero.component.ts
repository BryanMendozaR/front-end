import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {parsearErroresAPI} from 'src/app/utilidades/utilidades';
import {GeneroCreacionDTO} from '../genero';
import {GenerosService} from '../services/Genero.Service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent implements OnInit {

  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService) { }

  ngOnInit(): void {
  }

  guardarCambios(genero: GeneroCreacionDTO): void {
    this.generosService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error));
  }

}
