import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private url = 'http://localhost:8000/api/categories/'

  getCategory():Observable<any[]> { 
    return this.http.get<any[]>(this.url)
  }

  set(category: any): Observable<any> {
    console.log(category)
    return this.http.post<any>(this.url, category, this.httpHeaders)
  }

  setSubCategory(subcat): Observable<any> {
    return this.http.post<any>(this.url+'subcategory/', subcat, this.httpHeaders)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }

  deleteSub(id): Observable<any> {
    return this.http.post<any>(this.url + 'subcategory/', {name: id}, this.httpHeaders)
  }
}
