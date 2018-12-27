import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  // recipes = RECIPES;

  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
              .subscribe(recipes => this.recipes = recipes);
  }

}
