import { FoodService } from './../services/food/food.service';
import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void
  {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['searchTerm'].toLowerCase()));

      else if(params['tag1'])
      {
        this.foods = this.foodService.getAllFoodsByTag(params['tag1']);
      }
      
      else
      this.foods = this.foodService.getAll();
    })

  }

}
