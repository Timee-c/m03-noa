import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SubGroupDataService {
    private apiUrl = 'http://localhost:3000/subgroups';
    subGroups: any[] = [];

    constructor(private http: HttpClient) { }

    addSubGroup(newSubGroup: any): void {
        this.http.post<any>(this.apiUrl, newSubGroup).subscribe(() => {});
    }

    removeSubGroup(subGroupId: number): void {
        this.http.delete(`${this.apiUrl}/${(subGroupId)}`).subscribe(() => {
            this.subGroups = this.subGroups.filter(subGroup => subGroup.id !== subGroupId);
        })
    }

    editSubGroup(newSubGroup: any, id: number) {
        this.http.put(`${this.apiUrl}/${(id)}`, newSubGroup).subscribe(() => {         
        })
    }

    getSubGroups(): void {
        this.http.get<any[]>(this.apiUrl).subscribe(subGroups => {
            this.subGroups = subGroups;
        });
    }
}


