import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCourse from './pages/AddCourse';
import Speakers from './pages/Speakers';
import BankDetails from './pages/BankDetails';
import Courses from './pages/Courses';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Support from './pages/Support';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />

                    {/* Protected Routes */}
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/add-course" element={
                        <ProtectedRoute>
                            <AddCourse />
                        </ProtectedRoute>
                    } />
                    <Route path="/speakers" element={
                        <ProtectedRoute>
                            <Speakers />
                        </ProtectedRoute>
                    } />
                    <Route path="/bank-details" element={
                        <ProtectedRoute>
                            <BankDetails />
                        </ProtectedRoute>
                    } />
                    <Route path="/courses" element={
                        <ProtectedRoute>
                            <Courses />
                        </ProtectedRoute>
                    } />
                    <Route path="/payments" element={
                        <ProtectedRoute>
                            <Payments />
                        </ProtectedRoute>
                    } />
                    <Route path="/analytics" element={
                        <ProtectedRoute>
                            <Analytics />
                        </ProtectedRoute>
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } />
                    <Route path="/support" element={
                        <ProtectedRoute>
                            <Support />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
