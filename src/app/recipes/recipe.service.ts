import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    new Recipe('Tasty Schnizel', 'This is a test description', 'http://images.kitchenpc.com/47b4b01ad36845c5a2d10b893b9fd33f.png',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
    ]),
    new Recipe('Big Fat Burger', 'This is another test description', 'http://images.kitchenpc.com/47b4b01ad36845c5a2d10b893b9fd33f.png',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}