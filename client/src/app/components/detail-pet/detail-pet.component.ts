import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.css']
})
export class DetailPetComponent implements OnInit {
  private pet: any;
  private likebutton: any;
  private petId: any;
  constructor(private route:ActivatedRoute, private router: Router, private petServ: PetService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.petId = params['id']);
    this.show();
    this.likebutton = true;
  }
  show() {
    this.petServ.find(this.petId, (data)=>{
      this.pet = data[0];
    });
  }
  like() {
    this.petServ.like(this.pet, (data)=>{ 
      this.show();
      this.likebutton = false;
    });
  }
  adopt() {
    this.petServ.destroy(this.pet, (data)=>{ 
      this.router.navigate(["/"]);  
    });
  }
}
