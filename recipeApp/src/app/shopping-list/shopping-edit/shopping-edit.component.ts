import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  newIngredient: Ingredient;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
  	this.newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  	console.log(this.newIngredient);
  	this.newIngredientAdded.emit(this.newIngredient);
  }

}
