import { Component } from '@angular/core';
import { book } from 'src/app/Interface/bookStructure';
import { BookService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  booksInCart: book[] = [];

  constructor( private bookService:BookService ){}

  ngOnInit(){
    this.booksInCart = this.bookService.getBookInCart();
  }

  removeBookFromCart(bookID: number){
    this.bookService.removeBookFromCart(bookID);
    this.booksInCart = this.bookService.getBookInCart();
  }

  buyBooks(){
    alert('Esto es solo una simulación, no se realizan ventas');
  }

}
