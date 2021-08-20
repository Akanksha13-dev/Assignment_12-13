import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
getCustomers():Observable<any> {
    return this.http.get(baseUrl);
    
}
getCustomer(id:string):Observable<any> {
  return this.http.get(`${baseUrl}/${id}`);
  
}

 deleteCustomer(id: string):Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
   
}
 editCustomer(id: string, object: any):Observable<any> {
   //object contain customer (include users) so, we need to filter out only customer data for update in customer table.
   const customer={
     id:object.id,
     name:object.name,
     address:object.address,
     website:object.website,
   }
  return this.http.put(`${baseUrl}/${id}`, customer);

    
}
 addCustomer(object:any):Observable<any> {

  return this.http.post(baseUrl, object);
}
}


