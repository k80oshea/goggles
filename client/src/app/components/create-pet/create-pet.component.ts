import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  private newPet: any;
  private errors: [];
  private nodups: any;
  constructor(private route:ActivatedRoute, private router: Router, private petServ: PetService) { }

  ngOnInit() {
    this.newPet = { 
      name: "",
      type: "",
      desc: "",
      skills: []
    };
  }

  create() { 
    this.petServ.create(this.newPet, (data)=>{ 
      if(data.errors) {
        this.newPet = { name: this.newPet.name, type: this.newPet.type, desc: this.newPet.desc, skills: this.newPet.skills };
        this.errors = data;
        if(data.errors.code==11000) {
          this.nodups = "This pet name is already in use at the shelter.";
        }
      }
      else {
        this.router.navigate(["/"]);
      }
    });
  }
}
