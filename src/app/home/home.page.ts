import { Component, OnInit } from '@angular/core';

interface SectionsI {
  header: {
    title: string
  }
  body: {
    img: string
    content: string
    imgSize?: number
    contentSize?: number
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }

  sections: Array<SectionsI> = [
    {
      header: {
        title: "Noticias"
      },
      body: {
        img: "https://picsum.photos/200/300?random=1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
        imgSize: 3,
        contentSize: 9
      }
    },
    {
      header: {
        title: "Salud"
      },
      body: {
        img: "https://picsum.photos/200/300?random=2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
