import { Injectable } from '@angular/core';
import { BOOKS } from '../config/AllBookData';
import { book } from '../Interface/bookStructure';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAllBooksCount(categories: string[] = []){
    return this.getAllBooks(1, BOOKS.length, categories).length;
  }

  getAllBooks(page: number, perPage: number, categories: string[] = []){
    let books: book[] = [];
    if(categories.length > 0){
      for(let category of categories){
        let booksFilterByCategory = BOOKS.filter(book => book.categories.includes(category));
        for(let bookFilter of booksFilterByCategory){
          if(!books.includes(bookFilter)){
            books.push(bookFilter);
          }
        }
      }
    } else {
      books = BOOKS;
    }
    
    return books.slice((page-1)*perPage, page*perPage);
  }

  getAllBooksByCategory(category: string){
    return BOOKS.filter(book => book.categories.includes(category));
  }

  getBookById(id: number):book{
    return BOOKS.find(book => book.id === id) ?? { id: -1, title: '', author: '', imgPath: '', pages: 0, categories: [] };
  }

  getNewsBooks(){
    return BOOKS.splice(0,8);
  }

  getBookInCart(): book[] {
    let idsBook = this.getIdsBookInCart();
    let booksInCartObjects: book[] = [];
    for(let id of idsBook){
      let book = this.getBookById(Number(id));
      if(book.id != -1){
        booksInCartObjects.push(book);
      }
    }
    return booksInCartObjects;
  }

  addBookToCart(bookID: number):string{
    let idsBook = this.getIdsBookInCart();
    if(idsBook.includes(bookID.toString())){
      return 'book already in cart';
    }

    if(!this.isBookExists(bookID)){
      return 'book not found';
    }
    
    let stringBooksInCart = localStorage.getItem('cart');
    stringBooksInCart = stringBooksInCart ? stringBooksInCart + '-' + bookID.toString() : bookID.toString();
    localStorage.setItem('cart', stringBooksInCart);
    return 'book added to cart';
  }

  removeBookFromCart(bookID: number){
    let idsBook = this.getIdsBookInCart();
    let idIndex = idsBook.indexOf(bookID.toString());
    idsBook.splice(idIndex, 1);
    
    if(idsBook.length > 0){
    localStorage.setItem('cart', idsBook.join('-'));
    } else {
    localStorage.removeItem('cart');
    }
  }

  isBookInCart(bookID: number): boolean{
    let idsBook = this.getIdsBookInCart(); 
    return idsBook.includes(bookID.toString());
  }

  getIdsBookInCart(): string[]{
    let stringBooksInCart = localStorage.getItem('cart');
    let idsBook = stringBooksInCart?.split('-') ?? [];
    return idsBook;
  }

  isBookExists( bookID:number ) : boolean{
    let book = this.getBookById(bookID);
    return book.id != -1;
  }

}
