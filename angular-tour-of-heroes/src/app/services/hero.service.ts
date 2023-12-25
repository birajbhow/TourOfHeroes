import { Injectable } from '@angular/core';
import { HEROES } from '../models/mock-heroes';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number) {
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
