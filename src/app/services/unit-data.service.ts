import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UnitDataService {
    private apiUrl = 'http://localhost:3000/unities';
    unities: any[] = [];

    constructor(private http: HttpClient) { }

    addUnit(newUnit: any): void {
        this.http.post<any>(this.apiUrl, newUnit).subscribe(() => {});
    }

    removeUnit(unitId: number): void {

        this.http.delete(`${this.apiUrl}/${(unitId)}`).subscribe(() => {
            this.unities = this.unities.filter(unit => unit.id !== unitId);
        })
    }

    editUnit(newUnit: any, id: number) {
        this.http.put(`${this.apiUrl}/${(id)}`, newUnit).subscribe(() => {         
        })
    }

    getUnities(): void {
        this.http.get<any[]>(this.apiUrl).subscribe(unities => {
            this.unities = unities;
        });
    }
}


