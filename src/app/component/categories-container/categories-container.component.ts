import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.css']
})
export class CategoriesContainerComponent {

  @Input() categories: string[] = ["Novela contemporánea", "Novela Historica", "Novela literaria", "Novela negra", "Novela romántica", "Poesía", "Teatro", "Ciencia ficción", "Fantasía" , "Cómic y manga", "Para padres", "Juvenil", "Infantil", "Sobre bebés", "Actualidad", "Economía", "Empresa", "Arte", "Ciencia", "Ciencias humanas y sociales", "Esoterismo", "Filosofia", "Historia", "Psicología", "Religión", "Historia del arte", "Cocina", "Autoayuda", "Estilo de vida", "Humor", "Viajes", "Agendas", "Calendarios"];
  @Output() changeCategoryEvent = new EventEmitter<string[]>();
  selectedCategories: string[] = [];

  constructor(private activatedRoute: ActivatedRoute) {  
}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCategories = this.getCategoriesOfParams(params['categories']);
    })
  }

  getCategoriesOfParams(param:string):string[]{
    if(param){
      return param.split(',');
    }
    return [];
  }

  toogleSelectCategory( name:string){
    if(this.selectedCategories.includes(name)){
      this.selectedCategories = this.selectedCategories.filter(category => category !== name);
    }else{
      this.selectedCategories.push(name);
    }
    this.changeCategoryEvent.emit(this.selectedCategories);
  }

  categoryIsSelected( name:string):boolean{
    return this.selectedCategories.includes(name);
  }

  unSelectAll(){
    this.selectedCategories = [];
    this.changeCategoryEvent.emit(this.selectedCategories);
  }
}
