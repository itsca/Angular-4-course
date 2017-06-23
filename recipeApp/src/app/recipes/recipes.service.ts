import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe("Test Recipe", "This is a test recipe", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
		new Recipe("Test Recipe 2", "This is another test recipe", "http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg")
	];
	constructor() { }
	
	getRecipes() {
		return this.recipes.slice();
	}
}
