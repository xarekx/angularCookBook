import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { RecipeComponent} from './recipe/recipe.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';

const routes: Routes = [
  {path: 'recipe', component: RecipeComponent },
  {path: 'add-recipes', component: AddRecipesComponent},
  {path: 'edit-recipes', component: EditRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  , CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
