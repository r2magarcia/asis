import { Injectable } from '@angular/core';
import { title } from 'process';
import { element } from 'protractor';

interface NewsI {

  header: {
    id: number
    title: string
    categories: Array<string>
  }
  body: {
    img: string
    content: string
    imgSize?: number
    contentSize?: number
  }

}

interface SectionsI {
  id: number,
  title: string,
  news: Array<NewsI>
  icon?: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  sectionsConfig = {
    imgSize: 5,
    contentSize: 7
  }
  
  sections: Array<SectionsI> = [
    
    {
      id: 1, 
      title: "Noticias Academicas", 
      icon: "medkit-outline",
      news: [
      {
        header: {
          id: 1,
          title: "Lorep ipsum",
          categories: ["Covid-19", "salud"]
        },

        body: {
          img: "https://picsum.photos/500/400?random=1",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          // preview:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",

        }
      },

      {
        header: {
          id: 2,
          title: "otra noticia academica",
          categories: ["Noticia", "General"]
        },

        body: {
          img: "https://picsum.photos/500/400?random=2",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          // preview:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        }
      }
    ]},

    {
      id: 2, 
      title: "Noticias Generales", 
      icon: "bag-handle-outline",
      news: [
        {
          header: {
            id: 3,
            title: "Otro titulo de noticia",
            categories: ["Ciudad", "Nose"]
          },

          body: {
            img: "https://picsum.photos/500/400?random=3",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            // preview:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          }
        }
      ]
    }
  ]

  getNews(){
    return this.sections;
  }

  getConfig(){
    return this.sectionsConfig;
  }

  getNewsById(id: number): NewsI{

    let newww: Array<NewsI> = [];

    this.sections.forEach(el => {
      el.news.forEach(element => {
        if(element.header.id == id){
          newww.push(element);
        }
      });
    })

    return newww[0];

  }

  getNewsByName(search: string): Array<SectionsI>{
    let sec: Array<SectionsI> = [];
    let newww: Array<NewsI> = [];
    let newispushed:boolean=false;
    //el.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1;
    this.sections.forEach(element => {
      newww = [];
      element.news.forEach(neww => {
        newispushed=false;
        neww.header.categories.map(el => {
          if(el.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1 && !newispushed){
            newww.push(neww);
            newispushed=true;
          };
        })
      });
      if(newww.length>0){
        sec.push({
          id: element.id,
          title: element.title,
          news: newww
        })
        console.log(sec);
      }
    });
    return sec;
  }

//   pokemons.filter(function(el) {
//     return el.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1;
// })

}
