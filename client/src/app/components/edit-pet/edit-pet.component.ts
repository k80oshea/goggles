import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  private editPet: any;
  private errors: any;
  private nodups: any;
  private petId: any;
  constructor(private route:ActivatedRoute, private router: Router, private petServ: PetService) { 

  }

  ngOnInit() {
    this.find();
    this.route.params.subscribe((params: Params) => this.petId = params['id']);
  }
  find(){
    this.petServ.find(this.petId, (data)=>{
      this.editPet = data[0];
    });
  }
  edit() {
    this.editPet._id = this.petId;
    this.petServ.update(this.editPet, (data)=>{ 
      if(data.errors) {
        this.editPet = { name: this.editPet.name, type: this.editPet.type, desc: this.editPet.desc, skills: this.editPet.skills };
        this.errors = data.errors;
        if(data.errors.code==11000) {
          this.nodups = "This pet name is already in use at the shelter.";
        }      
      }
      else {
        this.router.navigate(["/details/"+this.petId]);        
      }
    });
  }
}
