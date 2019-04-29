import {Injectable} from '@angular/core';
import {Meal} from "./meal";
import {HttpbaseService} from "../http/httpbase.service";

@Injectable()
export class MealService extends HttpbaseService {

  fireRequest(meal: Meal, method: string) {
    const links = meal.links
      ? meal.links.find(x => x.method === method)
      : null;
    switch (method) {
      case 'DELETE': {
        return super.delete(links.href);
      }
      case 'POST': {
        return super.add<Meal>(meal);
      }
      case 'PUT': {
        return super.update<Meal>(links.href, meal);
      }
      default: {
        console.log(`${links.method} not found!!!`);
        break;
      }
    }
  }
}
