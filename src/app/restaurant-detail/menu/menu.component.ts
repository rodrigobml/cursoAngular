import { RestaurantsService } from './../../restaurants/restaurant.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>
  

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
