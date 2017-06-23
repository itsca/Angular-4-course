import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

	constructor() { }

	getIngredients(){
		return this.ingredients.slice();
	}

	addIngredient(newIngredient: Ingredient) {
		this.ingredients.push(newIngredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredients(newIngredients: Ingredient[]) {
		/*for (let ingredient of newIngredients) {
	  		this.addIngredient(ingredient);
	  	}*/
	  	this.ingredients.push(...newIngredients); //... ES6 spread operator to push all of ingredients one by one.
	  	this.ingredientsChanged.emit(this.ingredients.slice());
	}

}
