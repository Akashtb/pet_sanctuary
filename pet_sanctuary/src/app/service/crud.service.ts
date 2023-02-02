import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Pet } from './pet';


@Injectable({
  providedIn: 'root'
})

export class CrudService {
  REST_API:string="http://localhost:8000/api"
  //set Http header
  httpHeaders=new HttpHeaders().set('Content-Type','application/json')
  constructor(private httpClient:HttpClient) { }
   // add recorders
   AddPet(data:Pet):Observable<any>{
    let API_URL=`${this.REST_API}/add-pet`
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
    
  }
  getPets(){
    return this.httpClient.get(`${this.REST_API}`)
  }
  getPet(id:any):Observable<any>{
    let API_URL=`${this.REST_API}/read-pet/${id}`;
    return this.httpClient.get(API_URL , {headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }), 
    catchError(this.handleError)
    )
  }    
  updatePet(id:any,data:any):Observable<any>{
  let API_URL=`${this.REST_API}/update-pet/${id}`;
  return this.httpClient.put(API_URL,data ,{headers:this.httpHeaders}).pipe(
    catchError(this.handleError)
  )
  }

  deletePet(id:any):Observable<any>{
    let API_URL=`${this.REST_API}/delete-pet/${id}`;
    return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
    }
   handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;

    }else{
      errorMessage=`Error Code:${error.status}/nMessage:${error.message}`;

    }
    console.log(errorMessage);
    return throwError(errorMessage)
    
   }

}
