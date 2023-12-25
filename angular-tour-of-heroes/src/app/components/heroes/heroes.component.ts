import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/models/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroeService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe(
      heroes => { this.heroes = heroes; }
    );
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
