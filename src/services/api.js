const BASE_URL = 'http://localhost:3000/api'; // API'nizin URL'sini buraya yazın

export const authAPI = {
    login: async (email, password) => {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error('Login failed');
        }
        
        return response.json();
    },

    register: async (email, password) => {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        return response.json();
    },
};