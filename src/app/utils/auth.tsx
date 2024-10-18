import { useState } from "react";

 
interface Credentials {
  login: string;
  password: string;
}
 
interface CredentialRegister{
  login: string,
  password: string,
  role: string,
  name?: string,
  telefone?: string,
}


export interface User {
  id: string;
  login: string;
  username?: string;
  name?: string;
  password: string;
  photo: string | null;
  role?: string
  telefone?: string | null;
  comentarios?: Comment[];
  roteiro?: any;
  state?: boolean
}
 
interface Recover{
  login: string
}


const API = 'https://9212-200-148-158-242.ngrok-free.app';

const defaultHeaders = {
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "application/json", 
};

const Textheaders = {
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "application/json", 
};

 
 const [token, setToken] = useState<string | null>('');

 const HeaderAuth = (token: string | null) => ({
  'ngrok-skip-browser-warning': '69420',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
  });

  const HeaderAuth1 = (token: string | null) => ({
    'ngrok-skip-browser-warning': '69420',
    'Content-Type': 'text/plain',
    Authorization: `Bearer ${token}`,
    });
export const loginRequest = async (credentials: Credentials) => {
    const response = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: defaultHeaders,

      body: JSON.stringify(credentials)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
 
    const data = await response.json();
   
    return data;
  };
 
  export const RegisterRequest = async (credentials: CredentialRegister ) => {
    const response = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers:defaultHeaders,
      body: JSON.stringify(credentials)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
  };
 
  export const logout = () => {
  
  };
 
  export const SendPassword = async (email: String) => {
    const response = await fetch(`${API}/auth/send-password`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({ login: email})
    });
 
    if (!response.ok) {
      throw new Error('Password recovery failed');
    }
 
    return response.json();
  };


  export const fetchUserDetails = async (token: string) => {
    const response = await fetch(`${API}/auth/user`, {
      method: 'GET',
      headers: HeaderAuth(token),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do usuário');
    }
  
    return response.json();
  };
  
  export const UpdateUserDetails = async (token: string) => {
    const response = await fetch(`${API}/auth/user`, {
      method: 'PUT',
      headers: HeaderAuth(token),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do usuário');
    }
  
    return response.json();
  };