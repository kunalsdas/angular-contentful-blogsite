import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AichatService {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  constructor(private http: HttpClient) { }

  generateText(prompt: string) {
    const body = {
      prompt: prompt,
      max_tokens: 1000,
      api_key: this.apiKey
    };
    return this.http.post(this.apiUrl, body);
  }
}