import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  private pets: any;

  constructor(private route:ActivatedRoute, private router: Router, private petServ: PetService) { 
    
  }

  ngOnInit() {
    this.all();
  }
  all() {
    this.petServ.all(data=>{
      this.pets = data;
    });
  }
}
