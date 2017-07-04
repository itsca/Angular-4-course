import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;

  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  //newIngredient: Ingredient;
  //Oldway//@Output() newIngredientAdded = new EventEmitter<Ingredient>();
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subcription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if ( this.editMode ) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    }
    this.editMode = false;
    form.reset();
  	//Oldway//this.newIngredientAdded.emit(this.newIngredient);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
