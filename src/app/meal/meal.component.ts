import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatSelectChange, MatSort, MatTableDataSource} from '@angular/material';
import {MealService} from "./meal.service";
import {Meal} from "./meal";
import {FormControl} from "@angular/forms";
import {PartialObserver} from "rxjs";

@Component({
  selector: 'app-meal',
  providers: [],
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','avgWeight'];

  allMeals: Meal[];
  dataSource = new MatTableDataSource<Meal>();
  categories = new FormControl();

  categoryList: string[] = [''];
  selected: string[] = [''];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  // @Output()
  // selectionChange: EventEmitter<MatSelectChange>;

  constructor(private mealService: MealService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getMeals();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  categoryListChanged(event: MatSelectChange) {
    this.dataSource.data = this.allMeals.filter(meal => event.value.includes(meal.category));
  }

  getMeals() {
    this.mealService.getAll<Meal[]>()
      .subscribe((result: any) => {
        this.allMeals = result.body._embedded.meals;
        this.allMeals.forEach(meal => {
          if (meal.name.indexOf('/') > 0)
            meal.name = meal.name.substring(0, meal.name.indexOf('/'));
          if(meal.category.indexOf('/') > 0)
            meal.category = meal.category.substring(0, meal.category.indexOf('/'));
        });
        this.categoryList = Array.from(new Set(this.allMeals.map(it => it.category)));
        this.categories.setValue(this.categoryList);
        this.selected = this.categoryList;
        this.dataSource.data = this.allMeals;
      });
  }

}
