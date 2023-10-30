import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from 'src/app/Interface/bookStructure';
import { BookService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book: book = {id:-1,title:'',author:'',imgPath:'',pages:0,categories:[]}
  bookAlreadyInCart: boolean = false;
  constructor(private activatedRoute:ActivatedRoute,
    private bookService:BookService,
    private router:Router) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params=>{
      this.book = this.bookService.getBookById(Number(params.get('id')));
    });
    this.isBookInCart();
  }

  isBookInCart(){
    this.bookAlreadyInCart = this.bookService.isBookInCart(this.book.id);
  }

  addBookToCart(){
    let response = this.bookService.addBookToCart(this.book.id);
    if(response){
      if(response == 'book added to cart'){
        this.router.navigateByUrl('/shoppingCart');
      } else {
        alert(response);
      }
    } else {
      alert('Error al añadir el libro al carrito');
    }
  }

  buyBook(){
    alert(`Gracias por comprar ${this.book.title}`);
    alert(`esto es una simulación, no se realizan ventas`);
  }

}
