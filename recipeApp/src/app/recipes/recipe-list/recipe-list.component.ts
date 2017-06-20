import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe("Test Recipe", "This is a test recipe", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
		new Recipe("Test Recipe 2", "This is another test recipe", "http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg")
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
  	this.recipeWasSelected.emit(recipe);
  }

}
