import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {


  todos: Todo[] | undefined;
  constructor() {
    this.todos = [
      {
        sno: 1,
        desc: "Description",
        title: "this is title",
        active:true
      },
      {
        sno: 2,
        desc: "Description",
        title: "this is title 2",
        active:true
      },
      {
        sno: 3,
        desc: "Description",
        title: "this is title 3",
        active:true
      },
      
    ]
  }
}
