import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public get(slug: string) {
    return this.http.get<any>(slug);
  }

  public post(slug: string, postData: any) {
    return this.http.post<any>(slug, postData);
  }

  public delete(slug: string) {
    return this.http.delete<any>(slug);
  }

  public deleteWithParams(slug: string, params: any) {
    return this.http.delete<any>(slug, { params: params });
  }

  public patch(slug: string, postData: any) {
    return this.http.patch<any>(slug, postData);
  }
}
