import { Recipe } from './common/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get('http://starlord.hackerearth.com/recipe',{headers:{'Access-Control-Allow-Origin': "*"}});
  }

  getParticularRecipe() {
    return this.http.get('http://starlord.hackerearth.com/recipe',{headers:{'Access-Control-Allow-Origin': "*"}}).toPromise();
  }
}
