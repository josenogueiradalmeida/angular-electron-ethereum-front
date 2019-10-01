import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Web3 from 'web3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    
  }

  lala() {
    console.log('oi')
    const web3 = new Web3('ws://localhost:9545');
    console.log(web3)
    //let retorno = this.http.get<Object>("http://localhost:9090/api/read")    
    //console.log(retorno)
  }
}
