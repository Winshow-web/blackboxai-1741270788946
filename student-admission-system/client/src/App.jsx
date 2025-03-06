import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminLogin from './pages/auth/AdminLogin';

// Dashboard Pages
import StudentDashboard from './pages/dashboard/StudentDashboard';
import AgentDashboard from './pages/dashboard/AgentDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';

// Other Pages
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              {/* Student Routes */}
              <Route 
                path="/dashboard/student" 
                element={<StudentDashboard />} 
              />
              
              {/* Agent Routes */}
              <Route 
                path="/dashboard/agent" 
                element={<AgentDashboard />} 
              />
              
              {/* Admin Routes */}
              <Route 
                path="/dashboard/admin" 
                element={<AdminDashboard />} 
              />

              {/* Default Dashboard Route */}
              <Route 
                path="/dashboard" 
                element={<DashboardRouter />} 
              />
            </Route>
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

// Helper component to route to the correct dashboard based on user role
function DashboardRouter() {
  const { user } = useAuth();
  
  switch (user?.role) {
    case 'student':
      return <StudentDashboard />;
    case 'agent':
      return <AgentDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return <Navigate to="/login" />;
  }
}

export default App;
