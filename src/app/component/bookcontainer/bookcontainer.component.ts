import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { book } from 'src/app/Interface/bookStructure';

@Component({
  selector: 'app-bookcontainer',
  templateUrl: './bookcontainer.component.html',
  styleUrls: ['./bookcontainer.component.css']
})
export class BookcontainerComponent {
  @Input() tittle: string = '';
  @Input() author: string = '';
  @Input() book: book = {id:0,title:'',author:'',imgPath:'',pages:0,categories:[]};

  constructor() {
    if(this.tittle != ''){
      this.book.title = this.tittle;
    }
    if(this.author != ''){
      this.book.author = this.author;
    }
  }

}
