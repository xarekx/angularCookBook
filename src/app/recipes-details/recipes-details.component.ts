import { Component, OnInit, Input } from '@angular/core';
import { IRecipes } from '../recipes';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe: IRecipes;

  constructor() { }

  ngOnInit() {
  }

}
