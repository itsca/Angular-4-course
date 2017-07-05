import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
	onRecipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe("Test Recipe",
		"This is a test recipe",
		"http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
		[new Ingredient("Chicken", 1), new Ingredient("Peal Tomatoes", 5), new Ingredient("Garlic", 5)]),
		new Recipe("Test Recipe 2",
		"This is another test recipe",
		"http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg",
		[new Ingredient("Wonton Wraps", 20), new Ingredient("Meat", 1), new Ingredient("Soy Sauce", 1)])
	];
	constructor(private shoppingListService: ShoppingListService) { }
	
	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index : number) {
		return this.recipes[index];
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.onRecipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.onRecipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.onRecipesChanged.next(this.recipes.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}




}
