const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  ADMIN_LOGIN: `${API_BASE_URL}/auth/admin/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,

  // Student endpoints
  STUDENT_PROFILE: `${API_BASE_URL}/students/profile`,
  STUDENT_APPLICATIONS: `${API_BASE_URL}/students/applications`,
  
  // Agent endpoints
  AGENT_PROFILE: `${API_BASE_URL}/agents/profile`,
  AGENT_STUDENTS: `${API_BASE_URL}/agents/students`,
  
  // Admin endpoints
  ADMIN_DASHBOARD: `${API_BASE_URL}/admin/dashboard`,
  ADMIN_USERS: `${API_BASE_URL}/admin/users`,
  ADMIN_APPLICATIONS: `${API_BASE_URL}/admin/applications`,
};

export const axiosConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export default API_ENDPOINTS;
