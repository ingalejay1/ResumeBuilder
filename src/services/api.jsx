import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const { data } = await axios.post('http://localhost:5000/api/auth/refresh-token', { token: refreshToken });
                localStorage.setItem('token', data.token);
                API.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                return API(originalRequest);
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const createResume = (resumeData) => API.post('/resumes', resumeData);
export const fetchResumes = () => API.get('/resumes'); // Ensure this matches the import in ResumeList.jsx
export const updateResume = (id, resumeData) => API.put(`/resumes/${id}`, resumeData);
export const deleteResume = (id) => API.delete(`/resumes/${id}`);
