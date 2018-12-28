import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule} from '@angular/forms';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesDetailsComponent,
    AddRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
