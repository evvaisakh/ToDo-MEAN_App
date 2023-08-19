import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tasks: any = [];

  ngOnInit() {
    this.http.get('http://localhost:3000/').subscribe((task) => {
      this.tasks = task;
      console.log(task);
    });
  }

  constructor(private http: HttpClient) { }


  onAddTask(newTask: HTMLInputElement) {
    this.http.post('http://localhost:3000/task', { task: newTask.value }).subscribe((task) => {


      this.http.get('http://localhost:3000/').subscribe((task) => {
        this.tasks = task;
        console.log(task);
      });

      newTask.value = '';

      console.log(task);
    });
  }

  onDelete(id: string) {
    this.http.post('http://localhost:3000/task/delete', { id: id }).subscribe((task) => {

      this.http.get('http://localhost:3000/').subscribe((task) => {
        this.tasks = task;
        console.log(task);
      });

      console.log(task);
    });
  }

  markTask(id: any) {
    this.http.post('http://localhost:3000/task/mark', { id: id }).subscribe((task) => {

      this.http.get('http://localhost:3000/').subscribe((task) => {
        this.tasks = task;
        console.log(task);
      });

      console.log(task);
    });
  }



  showAll() {
    this.http.get('http://localhost:3000/').subscribe((task) => {
      this.tasks = task;
      console.log(task);
    });
  }

  completed() {
    this.http.get('http://localhost:3000/complete').subscribe((task) => {
      this.tasks = task;
      console.log(task);
    });
  }

  noCompleted() {
    this.http.get('http://localhost:3000/notcomplete').subscribe((task) => {
      this.tasks = task;

      console.log(task);
    });
  }
}
