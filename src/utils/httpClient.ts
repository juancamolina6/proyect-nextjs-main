import {environment} from "@app/constants/app";

export class HttpClient {

    private static token: string = environment.token;
    private static url_base:  string = environment.apiUrl;
    static async get(url: string) {
        const response = await fetch(this.url_base + url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token,
                },
            });
        const data = await response.json();
        return data;
    }
    static async post(url: string, body: any) {
        const response = await fetch(this.url_base + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

}