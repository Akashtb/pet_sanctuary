import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  Pets:any=[];
  constructor(private crudApi:CrudService) { }

  ngOnInit(): void {
    this.crudApi.getPets().subscribe(res=>{
      console.log(res);
      this.Pets=res;
      
    })
  }
  delete(id:any,i:any){
    console.log(id);
    if(window.confirm("are you sure want to delete")){
      this.crudApi.deletePet(id).subscribe(res=>{
        this.Pets.splice(i, 1);
      })

    }
    
  }

}
