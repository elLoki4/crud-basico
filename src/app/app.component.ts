import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { PlaceService } from './service/place.service';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private placesService: PlaceService) {}

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    this.employeeArray.push(this.selectedEmployee);

    this.selectedEmployee = new Employee();
    const response = this.placesService.addEmployee(this.selectedEmployee);
    console.log(response);
  }
  delectedEmployee() {
    if (confirm('are you sure you want to delete it?')) {
      this.employeeArray = this.employeeArray.filter(
        (x) => x != this.selectedEmployee
      );
    }
    this.selectedEmployee = new Employee();
  }
  
  
  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }
  employeeArray: Employee[] = [
    {
      name: 'Ryan',
      country: 'USA',
    },
    {
      name: 'Angelica',
      country: 'ARGENTINA',
    },
    {
      name: 'Mariana',
      country: 'JAPON',
    },
  ];
}
