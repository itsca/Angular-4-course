import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: "", redirectTo: '/recipes', pathMatch: 'full' },
  { path: "recipes", component: RecipesComponent },
  { path: "shopping-list", component: ShoppingListComponent },
  /*{path: 'not-found', component: , data: {message: 'Page not Found'} },*/
  {path: '**', redirectTo: '/recipes' },
];


@NgModule({
	imports: [
    RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})


export class AppRoutingModule { 

}
