import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentserviceService {
  private apiUrl ="http://localhost:8080/"

  constructor(private http:HttpClient){}

}
