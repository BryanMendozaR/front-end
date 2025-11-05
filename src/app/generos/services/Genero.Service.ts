import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {GeneroCreacionDTO} from '../genero';
import {GeneroDTO} from '../interfaces/genero.interface';

@Injectable({
    providedIn: 'root'
})
export class GenerosService {

    constructor(private http: HttpClient) { }
    private apiUrl = environment.apiUrl + 'Generos';

    public ObtenerTodos(): Observable<GeneroDTO[]> {
        return this.http.get<GeneroDTO[]>(this.apiUrl);
    }

    public crear(genero: GeneroCreacionDTO) {
        return this.http.post(this.apiUrl, genero);
    }

}