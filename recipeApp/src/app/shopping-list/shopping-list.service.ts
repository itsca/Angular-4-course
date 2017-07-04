import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

	constructor() { }

	getIngredients(){
		return this.ingredients.slice();
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}	

	addIngredient(newIngredient: Ingredient) {
		this.ingredients.push(newIngredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(newIngredients: Ingredient[]) {
		/*for (let ingredient of newIngredients) {
	  		this.addIngredient(ingredient);
	  	}*/
	  	this.ingredients.push(...newIngredients); //... ES6 spread operator to push all of ingredients one by one.
	  	this.ingredientsChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number , newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}


}
