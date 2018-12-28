import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IRecipes } from './recipes';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = 'http://angularproject.getsandbox.com/users';
  constructor(private http: HttpClient) { }

  getData(): Observable<IRecipes[]> {
    console.log(this.http.get(this.url));
    return this.http.get<IRecipes[]>(this.url);
  }
  postData() {
    this.http.post(this.url,
      { id: 8,
        name: 'kwas',
        ingredients: 'kwas',
        description: 'kwas',
        price: 15})
        .subscribe((data: any) => {
        console.log(data);
        }
      );
  }

}
