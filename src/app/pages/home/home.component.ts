import { Component } from '@angular/core';
import { book } from 'src/app/Interface/bookStructure';
import { BookService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newsBooks: book[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.newsBooks = this.bookService.getNewsBooks();
  }
  
}
