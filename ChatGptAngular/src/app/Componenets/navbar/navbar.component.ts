import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChatGptServiceService } from 'src/app/services/chat-gpt-service.service';
import { Request } from 'src/app/models/Request';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchText:string='';

  response:any
 
   req:Request

   target:boolean=false
   button:boolean=true
  

  constructor(private chatService:ChatGptServiceService) { }

  ngOnInit(): void {
  }

  submit(){

  
    if(this.searchText==''){
      Swal.fire(
        'OOPS',
        'I think u forgot to put your Question on search box :)',
        'error'
      )
      return
      
    }

    console.log('end')
   this.button=false
   // console.log(this.searchText)
    let b=this.searchText
    //console.log(b)
    this.req=new Request(b)
    
    //console.log(this.req)
    this.chatService.getAllOrders(this.req).subscribe({
      next: (data) =>{
       // console.log(data)
        //this.target=false
        this.response=data
        //console.log(this.response)
      },
      error:(error) =>{
        this.target=true
        console.log(error)
        this.response=error.error.text
        
      },
      complete:() =>{
        
      }
    })

    //console.log("done")
     
  }

  reset(){
    this.target=false
    this.button=true
    this.searchText=''
  }

}
