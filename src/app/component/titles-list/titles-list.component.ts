import { Component } from '@angular/core';

@Component({
  selector: 'app-titles-list',
  templateUrl: './titles-list.component.html',
  styleUrls: ['./titles-list.component.css']
})
export class TitlesListComponent {

  titlesList: string[] = ["libro 1", "libro 2", "libro 3", "libro 4", "libro 5", "libro 6", "libro 7", "libro 8", "libro 9", "libro 10"];
  columns: Array<string[]> = [];
  rowCount = 5;

  ngOnInit(): void {
    this.separateListInColumns();
  }

  separateListInColumns(): void {
    this.columns = [];
    for (let i = 0; i < this.titlesList.length; i += this.rowCount) {
      this.columns.push(this.titlesList.slice(i, i + this.rowCount));
    }
    console.log(this.columns);
  }


}
