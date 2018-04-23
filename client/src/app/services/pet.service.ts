import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable()
export class PetService {

  constructor(private http:HttpClient) { 

  }
  all(cb) {
    this.http.get("/pets")
    .subscribe(data=>cb(data));
  }
  create(pet, cb) { 
    this.http.post("/pets", pet) 
    .subscribe(data=>cb(data)); 
  }   
  find(id, cb) {
    this.http.get("/pets/"+id)
    .subscribe(data=>cb(data));
  }
  update(pet, cb) { 
    this.http.put("/pets/"+pet._id, pet) 
    .subscribe(data=>cb(data)); 
  } 
  like(pet, cb) {
    this.http.put("/pets/like/"+pet._id, pet) 
    .subscribe(data=>cb(data)); 
  } 
  destroy(pet, cb) {
    this.http.delete("/pets/"+pet._id)
    .subscribe(data=>cb(data));
  }
}
