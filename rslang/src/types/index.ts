export type InputType = 'password' | 'text' | 'email';


export interface IWord {
  "id": "string",
  "group": "number",
  "page": "number",
  "word": "string",
  "image": "string",
  "audio": "string",
  "audioMeaning": "string",
  "audioExample": "string",
  "textMeaning": "string",
  "textExample": "string",
  "transcription": "string",
  "wordTranslate": "string",
  "textMeaningTranslate": "string",
  "textExampleTranslate": "string"
}

export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface LoggedUser {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

