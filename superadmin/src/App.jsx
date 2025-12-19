import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Organizers } from './pages/Organizers';
import { OrganizerDetail } from './pages/OrganizerDetail';
import AddCourse from './pages/AddCourse';
import { Layout } from './components/Layout';
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
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </ProtectedRoute>
                    } />
                    <Route path="/organizers" element={
                        <ProtectedRoute>
                            <Layout>
                                <Organizers />
                            </Layout>
                        </ProtectedRoute>
                    } />
                    <Route path="/organizers/:id" element={
                        <ProtectedRoute>
                            <Layout>
                                <OrganizerDetail />
                            </Layout>
                        </ProtectedRoute>
                    } />
                    <Route path="/create-course" element={
                        <ProtectedRoute>
                            <AddCourse />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
