import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  data: any[] = [];
  nuevoProducto:any={};


  constructor( private apiService: ApiService){}


  ngOnInit() : void {
    this.llenarData()
  }

  llenarData() {
    this.apiService.getData().subscribe( data =>{
      this.data=data;
      console.log(this.data);
    })
  }


  agregar(){
    name:"lola"
  }


}
