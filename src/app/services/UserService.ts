import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInfo } from '../models/contact-info.model';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createRegistration(data: ContactInfo, key: string): Observable<any> {
    const url = `${this.baseUrl}/registrations?key=${encodeURIComponent(key)}`;
    return this.http.post(url, data);
  }
}
