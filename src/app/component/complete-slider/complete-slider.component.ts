import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-slider',
  templateUrl: './complete-slider.component.html',
  styleUrls: ['./complete-slider.component.css']
})
export class CompleteSliderComponent{

  @Input() containerID: string = '';
  @Input() slideshow: string[] = [];
  sliderPosition: number = 0;

  sliderBack(){
    if(this.sliderPosition <= 0){
      this.sliderPosition = this.slideshow.length-1;
    } else {
      this.sliderPosition -= 1;
    }
    this.changeSliderByPosition();
  }

  sliderNext(){
    if(this.sliderPosition >= this.slideshow.length-1){
      this.sliderPosition = 0;
    }else{
      this.sliderPosition += 1;
    }
    this.changeSliderByPosition();
  }

  sliderChangePositionButton(position:number){
    this.sliderPosition = position;
    this.changeSliderByPosition();
  }

  changeSliderByPosition(){
    let container = document.getElementById(this.containerID);
    if(container){
      container.scrollLeft = container.clientWidth * this.sliderPosition;
    }
  }

}
