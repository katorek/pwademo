import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = {
    '_embedded' : {
      'meals' : [ {
        'name' : 'Burger',
        'description' : 'Opis burgera',
        'weight' : 122.3,
        'price' : 10.5,
        '_links' : {
          'meals' : {
            'href' : 'http://localhost:8080/api/meals'
          },
          'self' : {
            'href' : 'http://localhost:8080/api/meals/1'
          }
        }
      }, {
        'name' : 'Tortilla',
        'description' : 'Tortilla pszenna',
        'weight' : 100.2,
        'price' : 15.99,
        '_links' : {
          'meals' : {
            'href' : 'http://localhost:8080/api/meals'
          },
          'self' : {
            'href' : 'http://localhost:8080/api/meals/2'
          }
        }
      }, {
        'name' : 'Frytki',
        'description' : 'Małe frytki',
        'weight' : 50.0,
        'price' : 4.0,
        '_links' : {
          'meals' : {
            'href' : 'http://localhost:8080/api/meals'
          },
          'self' : {
            'href' : 'http://localhost:8080/api/meals/3'
          }
        }
      } ]
    },
    '_links' : {
      'self' : {
        'href' : 'http://localhost:8080/api/meals'
      }
    }
  };

  

  constructor() { }

  ngOnInit() { 
  }

}
