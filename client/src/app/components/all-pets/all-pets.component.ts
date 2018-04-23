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
      for(let x=1; x<this.pets.length; x++) { //sort by type
        let a = this.pets[x].type
        let b = this.pets[x-1].type
        this.pets.sort(function(a, b){
          var typeA=a.type.toLowerCase(), typeB=b.type.toLowerCase()
          if (typeA < typeB) //sort string ascending
              return -1 
          if (typeA > typeB)
              return 1
          return 0 //default return value (no sorting)
        })
      }
      this.pets = this.pets.sort();
    });
  }
}
