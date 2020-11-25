import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public newsService: NewsService) {
    
  }

  sectionsConfig = this.newsService.getConfig();
  sections =  this.newsService.getNews();

  ngOnInit() {
    console.log(this.sections);
  }
  //el.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1;
  getItems(e: any){
    if(e.detail.value != ""){
      this.sections = [];
      this.sections = this.newsService.getNewsByName(e.detail.value);
    }else{
      this.sections = [];
      this.sections =  this.newsService.getNews();
    }
    
  }

}
