import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCityList(
    ordering: string,
    search?: string

  ): Observable<APIResponse<City>>{
    let params = new HttpParams().set('ordering', ordering);

    if (search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<City>>(`${env.BASE_URL}/cities`,{
      params: params,
    });

  }
}
