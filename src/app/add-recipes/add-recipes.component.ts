import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent implements OnInit {

    nazwa: String;
    skladniki: String;
    przygotowanie: String;
    kwota: Number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  postData(name, ingr , desc, price: number) {
    this.recipeService.postData(name, ingr, desc, price);
  }

}
