import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  constructor(private firestore: Firestore) {}
  addEmployee(employee: Employee) {
    const employeeRef = collection(this.firestore, 'employee');
    return addDoc(employeeRef, employee);
  }
}
