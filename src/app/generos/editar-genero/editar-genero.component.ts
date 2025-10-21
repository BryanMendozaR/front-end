import { Component, OnInit } from '@angular/core';
import { GeneroCreacionDTO } from '../genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(genero: GeneroCreacionDTO) {
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
