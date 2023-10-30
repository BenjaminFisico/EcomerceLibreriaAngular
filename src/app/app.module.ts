import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookdetailComponent } from './pages/bookdetail/bookdetail.component';
import { AboutComponent } from './pages/about/about.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CategoriesContainerComponent } from './component/categories-container/categories-container.component';
import { PageFooterComponent } from './component/page-footer/page-footer.component';
import { CompleteSliderComponent } from './component/complete-slider/complete-slider.component';
import { BookcontainerComponent } from './component/bookcontainer/bookcontainer.component';
import { BookSliderComponent } from './component/book-slider/book-slider.component';
import { TitlesListComponent } from './component/titles-list/titles-list.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    HomeComponent,
    BooksComponent,
    BookdetailComponent,
    AboutComponent,
    ShoppingCartComponent,
    CategoriesContainerComponent,
    PageFooterComponent,
    CompleteSliderComponent,
    BookcontainerComponent,
    BookSliderComponent,
    TitlesListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
