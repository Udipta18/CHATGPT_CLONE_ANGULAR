import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGptServiceService {

  constructor(private httpclient:HttpClient) { }

  getAllOrders(chatReq:any) {
    return this.httpclient.post(`${environment.baseUrl}/api/v1/ChatGpt/send`,chatReq,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    })

  }
}
