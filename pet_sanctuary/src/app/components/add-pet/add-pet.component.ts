import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  petForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private ngZone: NgZone, private crudService: CrudService) {
    this.petForm = this.formBuilder.group({
      breed: [""],
      category: [""],
      avgprice: [""],
      description: [""],
      image: [""]

    })
  }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.crudService.AddPet(this.petForm.value).subscribe(() => {
      console.log("data addded successfull");
      this.ngZone.run(() =>
        this.router.navigateByUrl('/pet-detail'))
    }, (err) => {
      console.log(err);

    });

  }
}
