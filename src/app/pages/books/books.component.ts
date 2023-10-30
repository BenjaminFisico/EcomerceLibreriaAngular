import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book-service.service';
import { book } from 'src/app/Interface/bookStructure';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: book[] = [];
  page: number = 1;
  perPage: number = 10;
  categories: string[] = [];
  collectionSize: number = 0;
  
  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) {  
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.categories = this.getCategoriesOfParam(params['categories']);
      this.page = this.getPageOfParam(params['page']);
    });
    this.searchBooks();
  }

  getCategoriesOfParam(params:string){
    if(params){
      return params.split(',');
    }
    return [];
  }

  getPageOfParam(param:string){
    if(param){
      return this.page = parseInt(param);
    } else {
      return 1;
    }
  }

  changePage(page:number ){
    this.page = page;
    this.router.navigate(['/books'], {queryParams: {page: this.page,categories: this.categories.toString()}});
    this.searchBooks();
  }

  changeCategory(categories: string[]){
    this.page = 1;
    this.categories = categories;
    this.router.navigate(['/books'], {queryParams: {page: this.page,categories: this.categories.toString()}});
    this.searchBooks();
  }

  searchBooks(){
    this.collectionSize = this.bookService.getAllBooksCount(this.categories);
    this.books = this.bookService.getAllBooks(this.page, this.perPage, this.categories);
  }
  
}
