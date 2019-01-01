import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IRecipes } from './recipes';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = 'http://angularproject.getsandbox.com/recipes';
  body = {};
  constructor(private http: HttpClient) { }

  getData(): Observable<IRecipes[]> {
    console.log(this.http.get(this.url));
    return this.http.get<IRecipes[]>(this.url);
  }
  postData(name, ingredients, description, price) {
    this.http.post(this.url,
      { id: 8,
        name: name,
        ingredients: ingredients,
        description: description,
        price: price})
        .subscribe((data: any) => {
        console.log(data);
        }
      );
  }
  deleteData(name) {
    this.http.delete((this.url + '/' + name)).subscribe((data: any) => {
      console.log(data);
    });
  }
  changeData(oldname, newname, newIngr, newDesc, newPrice, oldId) {
    this.body = {
      id: oldId,
      name : newname,
      ingredients : newIngr,
      description : newDesc,
      price : newPrice,
    };
    console.log(this.body);
    // console.log(oldname, newname, newIngr, newDesc, newPrice);
    this.http.put((this.url + '/' + oldname), this.body ).subscribe((data: any) => {
      console.log(data);
    });
  }

}
