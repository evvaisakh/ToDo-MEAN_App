import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output()todoAdded = new EventEmitter();

task:string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  
  handleSubmit =(f: NgForm)=>{
  
    this.todoAdded.emit({task: f.value.task, complete:false});
    this.task="";
  }
}
