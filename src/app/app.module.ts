import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CrearActorComponent} from './actores/crear-actor/crear-actor.component';
import {EditarActorComponent} from './actores/editar-actor/editar-actor.component';
import {FormularioActoresComponent} from './actores/formulario-actores/formulario-actores.component';
import {IndiceActoresComponent} from './actores/indice-actores/indice-actores.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrearCinesComponent} from './cines/crear-cines/crear-cines.component';
import {IndiceCinesComponent} from './cines/indice-cines/indice-cines.component';
import {CrearGeneroComponent} from './generos/crear-genero/crear-genero.component';
import {EditarGeneroComponent} from './generos/editar-genero/editar-genero.component';
import {FormularioGeneroComponent} from './generos/formulario-genero/formulario-genero.component';
import {IndiceGenerosComponent} from './generos/indice-generos/indice-generos.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MaterialModule} from './material/material.module';
import {MenuComponent} from './menu/menu.component';
import {CrearPeliculaComponent} from './peliculas/crear-pelicula/crear-pelicula.component';
import {FiltroPeliculasComponent} from './peliculas/filtro-peliculas/filtro-peliculas.component';
import {ListadoPeliculasComponent} from './peliculas/listado-peliculas/listado-peliculas.component';
import {InputImgComponent} from './utilidades/input-img/input-img.component';
import {ListadoGenericoComponent} from './utilidades/listado-generico/listado-generico.component';
import {RatingComponent} from './utilidades/rating/rating.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCinesComponent,
    IndiceCinesComponent,
    FormularioGeneroComponent,
    EditarGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    EditarActorComponent,
    InputImgComponent,
    MostrarErroresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
