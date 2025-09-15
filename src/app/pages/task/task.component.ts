import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from '@angular/common'; 
@Component({
   templateUrl: './task.component.html',
   styleUrl: './task.component.css',
   imports: [UpperCasePipe], 
})

export class TaskComponent {
   name = signal('IronMan')
   age = signal(45)

   taskDescription = computed(() => {
      const description = `${this.name()} - ${this.age()}`;
      return description;
   })

   capitalizedName = computed(() => this.name().toUpperCase());

   getTaskDescription() {
      return `${this.name()} - ${this.age()}`;
   }

   changetask() {
      this.name.set('Spidserman')
      this.age.set(22)

   }

   changeAge() {
      this.age.set(60)
   }

   resetTask() {
      this.name.set('Ironman')
      this.age.set(45)
   }
}