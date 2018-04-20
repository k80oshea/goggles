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
  constructor(private route:ActivatedRoute, private router: Router, private petServ: PetService) { }

  ngOnInit() {
    this.show();
  }
  show() {
    this.petServ.find(this.route.params._value.id, (data)=>{
      this.pet = data[0];
    });
  }
  like() {
    this.petServ.like(this.pet, (data)=>{ 
      this.show();
    });
  }
  adopt() {
    this.petServ.destroy(this.pet, (data)=>{ 
      this.router.navigate(["/"]);  
    });
  }
}
