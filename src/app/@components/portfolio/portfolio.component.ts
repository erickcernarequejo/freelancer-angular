import { Component, OnInit } from '@angular/core';
import { IModal } from './../../@widgets/modal/modal.interface';

const description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, sint laudantium blanditiis, animi, ullam molestias similique magnam architecto officiis culpa eum voluptates odit aspernatur quam amet fugit dignissimos et autem.`;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  items: Array<IModal> = [];

  ngOnInit() {
    this.items.push({
      title: 'LOG CABIN',
      image : 'assets/img/portfolio/cabin.png',
      description
    });
    this.items.push({
      title: 'CAKE',
      image : 'assets/img/portfolio/cake.png',
      description
    });
    this.items.push({
      title: 'CIRCUS',
      image : 'assets/img/portfolio/circus.png',
      description
    });
    this.items.push({
      title: 'GAME',
      image : 'assets/img/portfolio/game.png',
      description
    });
    this.items.push({
      title: 'LOCKED SAFE',
      image : 'assets/img/portfolio/safe.png',
      description
    });
    this.items.push({
      title: 'YELLOW SUBMARINE',
      image : 'assets/img/portfolio/submarine.png',
      description
    });
  }

  

}
