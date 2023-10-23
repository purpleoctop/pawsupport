import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Animal } from 'src/app/models/animal';

@Injectable({
  providedIn: 'root',
})
export class HomelessAnimalsService {
  animalsRef!: AngularFireList<any>;
  animalRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create Animal
  AddAnimal(animal: Animal) {
    this.animalsRef.push({
      ...animal,
    });
  }
  // Fetch Single Animal Object
  GetAnimal(id: string) {
    this.animalRef = this.db.object('homeless-list/' + id);
    return this.animalRef;
  }
  // Fetch Animals List
  GetAnimalsList() {
    this.animalsRef = this.db.list('homeless-list');
    return this.animalsRef;
  }
  // Update Animal Object
  UpdateAnimal(animal: Animal) {
    this.animalRef.update({
      ...animal,
    });
  }
  // Delete Animal Object
  DeleteAnimal(id: string) {
    this.animalRef = this.db.object('homeless-list/' + id);
    this.animalRef.remove();
  }
}
