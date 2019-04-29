import {Resource} from 'angular4-hal';

export class Meal extends Resource {
  id: number;

  avgWeight: number;
  carbs: number;
  carbs100: number;
  carbsRWS: number;
  carbsSugar: number;
  carbsSugar100: number;
  carbsSugarRWS: number;
  category: string;
  energy100kJ: number;
  energy100kcal: number;
  energyRWS: number;
  energykJ: number;
  energykcal: number;
  fat: number;
  fat100: number;
  fatAcid: number;
  fatAcid100: number;
  fatAcidRWS: number;
  fatRWS: number;
  fiber: number;
  fiber100: number;
  name: string;
  protein: number;
  protein100: number;
  proteinRWS: number;
  salt: number;
  salt100: number;
  saltRWS: number;

  links: Link[]
}

export class Link {
  href: string;
  rel: string;
  method: string;
}

