import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(public newsService: NewsService) { }

  news: any;

  ngOnInit() {
    this.getNew();
  }

  getNew(){
    const query = window.location.pathname.split('/');
    console.log(query);

    // const idSection: number = parseInt(query[2]);
    const idNew: number = parseInt(query[3]);
    
    this.news = this.newsService.getNewsById(idNew);
  }

}
