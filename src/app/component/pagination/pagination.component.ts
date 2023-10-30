import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() actualPage:number = 1;
  @Input() set perPage(valPerPage: any){
    this.amountPerPag = valPerPage;
    this.changeElementByAmountPages();
  }
  @Input() set collectionSize(valSize: any){
    this.amountElements = valSize;
    this.changeElementByAmountPages();
  }
  @Output() changePageEvent = new EventEmitter<number>();
  elements: Array<number> = [1,2];
  amountPages = 0;
  amountElements: number = 0;
  amountPerPag: number = 0;

  ngOnInit(){
    this.changePage(this.actualPage);
  }

  changePage(page:number){
    if(page > this.amountPages){
      page = this.amountPages;
    }
    this.actualPage = page;
    this.changePageEvent.emit(page);
    if(page == 1){
      this.changeElementsByPage(2);
      return;
    }

    if(page == this.amountPages){
      this.changeElementsByPage(page-1);
      return;
    }
    this.changeElementsByPage(page);
  }

  changeElementsByPage(page:number){
    if(this.amountPages < 3){
      return;
    }
    this.elements = [page-1,page,page+1];
  }

  changeElementByAmountPages(){
    this.amountPages = Math.ceil(this.amountElements / this.amountPerPag);
    if(this.amountPages <= 1){
      this.elements = [];
      return;
    }
    if(this.amountPages == 2){
      this.elements = [1,2];
      return;
    }
    this.elements = [1,2,3];
  }
}
