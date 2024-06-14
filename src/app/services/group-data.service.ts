import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class GroupDataService {
    private apiUrl = 'http://localhost:3000/groups';
    groups: any[] = [];

    constructor(private http: HttpClient) { }

    addGroup(newGroup: any): void {
        this.http.post<any>(this.apiUrl, newGroup).subscribe(() => {});
    }

    removeGroup(groupId: number): void {

        this.http.delete(`${this.apiUrl}/${(groupId)}`).subscribe(() => {
            this.groups = this.groups.filter(group => group.id !== groupId);
        })
    }

    editGroup(newGroup: any, id: number) {
        this.http.put(`${this.apiUrl}/${(id)}`, newGroup).subscribe(() => {         
        })
    }

    getGroups(): void {
        this.http.get<any[]>(this.apiUrl).subscribe(groups => {
            this.groups = groups;
        });
    }
}


