import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppErrorHandler } from '../common/app-error-handler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource){
    return this.http.post<any>(this.url, JSON.stringify(resource));
  }

  delete(id){
    return this.http.delete(this.url + '/' + id);
    }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
  }
}
