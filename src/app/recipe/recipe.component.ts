import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe = RECIPES;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
