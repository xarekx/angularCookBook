import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { IRecipes} from '../recipes';
import { RecipesDetailsComponent } from '../recipes-details/recipes-details.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: IRecipes;
  recipes = [];

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
    this.recipeService.getData().subscribe(data => {this.recipes = data; console.log(data); });
  }

  onSelect(recipe: IRecipes): void {
    this.selectedRecipe = recipe;
  }


}
