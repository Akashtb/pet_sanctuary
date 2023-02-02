import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
getId:any;
updateForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudApi:CrudService
  ) {
    this.getId=this.activatedRoute.snapshot.paramMap.get('id');
    this.crudApi.getPet(this.getId).subscribe(res=>{
this.updateForm.setValue({
  breed:res["breed"],
  category:res["category"],
  avgprice:res["avgprice"],
  description:res["description"],
  image:res["image"]

})
    });
    this.updateForm=this.formBuilder.group({
      breed:[""],
      category:[""],
      avgprice:[""],
      description:[""],
      image:[""]
    })
   }

  ngOnInit(): void {
  }
  onUpdate(){
    this.crudApi.updatePet(this.getId,this.updateForm.value).subscribe(res=>{
      console.log("updated successfully");
      this.ngZone.run(()=>{
        this.router.navigateByUrl("/pet-detail")})
      
    },
    (err)=>{
      console.log(err);
      
    }
    )
  }

}
