import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.scss']
})
export class FiltroPeliculasComponent implements OnInit {
  form: FormGroup;
  peliculas = [
    {
      titulo: 'Iron-man',
      enCines: false,
      proximoEstreno: true,
      genero: [1, 2],
      poster: "https://m.media-amazon.com/images/I/715JlS9KHkL._AC_SL1500_.jpg"
    },
    {
      titulo: 'Cell',
      enCines: true,
      genero: [1],
      proximoEstreno: false,
      poster: "https://cdn1.totalcommerce.cloud/linalca/web_content/assets/funcionespc.webp"
    },
    {
      titulo: 'Rocky',
      enCines: false,
      genero: [3, 4],
      proximoEstreno: false,
      poster: "https://cdn1.totalcommerce.cloud/linalca/web_content/assets/funcionespc.webp"
    }
  ]

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Comedia' },
    { id: 4, nombre: 'Terror' }
  ];

  peliculasOrigina = this.peliculas;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximoEstrenos: false,
    enCines: false,
  }


  constructor(private formBuilder: FormBuilder, private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOrigina;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaUrl();
      });

  }

  private leerValoresUrl() {
    this.activateRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if (params.titulo) {
        objeto.titulo = params.titulo;
      }
      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }
      if (params.proximoEstrenos) {
        objeto.proximoEstrenos = params.proximoEstrenos;
      }
      if (params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaUrl() {
    var queryString = [];
    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }
    if (valoresFormulario.generoId != 0) {
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }
    if (valoresFormulario.proximoEstrenos) {
      queryString.push(`proximoEstrenos=${valoresFormulario.proximoEstrenos}`);
    }
    if (valoresFormulario.enCines) {
      queryString.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'));
  }

  buscarPeliculas(peli: any) {
    if (peli.titulo) {
      this.peliculas = this.peliculas.filter(peliculas => peliculas.titulo.indexOf(peli.titulo) != -1);
    }

    if (peli.generoId) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.genero.indexOf(peli.generoId) != -1);
    }

    if (peli.proximoEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximoEstreno === true);
    }

    if (peli.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines === true);
    }
  }

  limpiar(): void {
    this.form.patchValue(this.formularioOriginal);
  }

}
