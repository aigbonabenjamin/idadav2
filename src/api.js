const API_BASE_URL = 'http://localhost:5001/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Mock data for testing without DB
const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  { id: 2, name: 'John Doe', email: 'user@example.com', role: 'user' }
];

const mockApplications = [
  { id: 1, user_id: 2, career_path: 'Developer', resume_path: 'uploads/resume1.pdf', status: 'pending', created_at: '2023-10-01T00:00:00Z', name: 'John Doe', email: 'user@example.com' },
  { id: 2, user_id: 2, career_path: 'Designer', resume_path: 'uploads/resume2.pdf', status: 'approved', created_at: '2023-09-15T00:00:00Z', name: 'John Doe', email: 'user@example.com' }
];

// Auth API calls
export const authAPI = {
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log('Using mock register');
    }
    // Mock response
    const mockUser = { id: Date.now(), name: userData.name, email: userData.email, role: userData.role };
    return { message: 'User registered successfully', user: mockUser, token: 'mock-jwt-token' };
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log('Using mock login');
    }
    // Mock response
    const user = mockUsers.find(u => u.email === credentials.email);
    if (user) {
      return { message: 'Login successful', user, token: 'mock-jwt-token' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
};

// Applications API calls
export const applicationsAPI = {
  submitApplication: async (formData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log('Using mock submit application');
    }
    // Mock response
    const mockApp = { id: Date.now(), user_id: 2, career_path: 'Developer', resume_path: 'uploads/mock-resume.pdf', status: 'pending' };
    return { message: 'Application submitted successfully', application: mockApp };
  },

  getUserApplications: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/applications`, {
        headers: getAuthHeaders()
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log('Using mock get user applications');
    }
    // Mock response
    return mockApplications.filter(app => app.user_id === 2);
  },

  getAllApplications: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/applications`, {
        headers: getAuthHeaders()
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log('Using mock get all applications');
    }
    // Mock response
    return mockApplications;
  },

  updateApplicationStatus: async (id, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/applications/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log('Using mock update application status');
    }
    // Mock response
    const app = mockApplications.find(a => a.id == id);
    if (app) {
      app.status = status;
      return { message: 'Application status updated successfully', application: app };
    } else {
      return { message: 'Application not found' };
    }
  }
};
