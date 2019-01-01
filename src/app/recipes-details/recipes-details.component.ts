import { Component, OnInit, Input, Output } from '@angular/core';
import { IRecipes } from '../recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe: IRecipes;
  enableEdit = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  deleteData(name) {
    this.recipeService.deleteData(name);
  }

  changeHTML() {
    this.enableEdit = true;
  }
  changeData(oldName, newName, newIngr, newDesc, newPrice, oldId) {
    this.recipeService.changeData(oldName, newName, newIngr, newDesc, newPrice, oldId);
    // console.log(oldName, newName, newIngr, newDesc, newPrice);
  }
}
