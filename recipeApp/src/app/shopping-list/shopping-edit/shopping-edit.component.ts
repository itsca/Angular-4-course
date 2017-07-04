import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  //newIngredient: Ingredient;
  //Oldway//@Output() newIngredientAdded = new EventEmitter<Ingredient>();
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
  	this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
  	//Oldway//this.newIngredientAdded.emit(this.newIngredient);
  }

}
