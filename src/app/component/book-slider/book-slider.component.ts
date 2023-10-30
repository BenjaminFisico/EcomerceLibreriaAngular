import { Component, Input, OnInit } from '@angular/core';
import { book } from 'src/app/Interface/bookStructure';

@Component({
  selector: 'app-book-slider',
  templateUrl: './book-slider.component.html',
  styleUrls: ['./book-slider.component.css']
})
export class BookSliderComponent implements OnInit {
  @Input() containerID: string = '';
  @Input() slideBooks: book[] = [];
  sliderFirstPosition: number = 0;
  rightToAddPosition: number = 0;
  leftToAddPosition: number = 0;
  translateValue: number = 0;
  slideShow: book[] = [];
  slideShowTwo: book[] = [];
  moveEnabled: boolean = true;
  quantityMove: number = 0;

  ngOnInit(): void {
    this.slideShow = this.itemChangeRight();
    this.slideShowTwo = this.itemChangeRight();
    this.setQueantityMove();
    this.moveBlocks(-25, 0);
  }

  setQueantityMove(){
    let quantityNumber = document.getElementsByClassName('completeSliderBooks')[0].clientWidth ?? 0;
    this.quantityMove = (quantityNumber * 0.1) / 3;
    if(this.quantityMove > 25){
      this.quantityMove = 25;
    }
  }

  sliderNext(){
    if(this.moveEnabled){
      this.moveBlocks(-this.quantityMove, 0.5);
      console.log(this.quantityMove);
    }
  }

  sliderBack(){
    if(this.moveEnabled){
      this.moveBlocks(this.quantityMove, 0.5);
    }
  }
  
  moveBlocks(amount:number, transitionDuration: number){
    this.translateValue += amount;
    this.moveEnabled = false;
    document.getElementById("booksSectionOne")?.setAttribute("style", `translate: ${this.translateValue}%; transition-duration: ${transitionDuration}s`);
    document.getElementById("booksSectionTwo")?.setAttribute("style", `translate: ${this.translateValue}%; transition-duration: ${transitionDuration}s`);
    setTimeout(() => {
      this.moveEnabled = true;
      if(this.translateValue <= -125){
        this.maxRightReach();
      } else if(this.translateValue >= -20){
        this.maxLeftReach();
      }
    }, transitionDuration * 1000);
  }

  maxRightReach(){
    this.slideShow = this.slideShowTwo;
    this.sumLeftPosition(-11);
    this.slideShowTwo = this.itemChangeRight();
    this.moveBlocks(100, 0);
  }

  sumLeftPosition(amount:number){
    this.leftToAddPosition = this.rightToAddPosition + amount;
    while(this.leftToAddPosition < 0){
      this.leftToAddPosition += this.slideBooks.length;
    }
  }

  itemChangeRight(): book[]{
    let tempArray: book[] = [];
    for(let i=0; i < 10; i++){
      tempArray.push(this.slideBooks[this.rightToAddPosition]);
      if(this.rightToAddPosition == this.slideBooks.length-1){
        this.rightToAddPosition = 0;
      } else {
        this.rightToAddPosition++;
      }
    }
    return tempArray;
  }

  maxLeftReach(){
    this.slideShowTwo = this.slideShow;
    this.sumRightPosition(11);
    this.slideShow = this.itemChangeLeft();
    this.moveBlocks(-100, 0);
  }

  sumRightPosition(amount:number){
    this.rightToAddPosition = this.leftToAddPosition + amount;
    while(this.rightToAddPosition >= this.slideBooks.length){
      this.rightToAddPosition -= this.slideBooks.length;
    }
  }

  itemChangeLeft(): book[]{
    let tempArray: book[] = [];
    for(let i=0; i < 10; i++){
      tempArray.unshift(this.slideBooks[this.leftToAddPosition]);
      if(this.leftToAddPosition == 0){
        this.leftToAddPosition = this.slideBooks.length-1;
      } else {
        this.leftToAddPosition--;
      }
    }
    return tempArray;
  }

}
