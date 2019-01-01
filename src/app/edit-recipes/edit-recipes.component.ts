import { Component, OnInit, Input } from '@angular/core';
import { IRecipes} from '../recipes';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {
  @Input() recipe: IRecipes;

  constructor(private recipeComp: RecipeComponent) { }

  ngOnInit() {
  }

}
