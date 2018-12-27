import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipe';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getRecipes(): Observable<Recipe[]> {
    return of (RECIPES);
  }

  constructor() { }
}
