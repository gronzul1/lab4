import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class AppComponent implements OnInit {

    servername: string;

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
        this.getHostname();
    }

    getHostname() {
        this.httpClient.get('assets/hostname.txt', { responseType: 'text' })
            .subscribe(data => {
                this.servername = data;
            });
    }
}
