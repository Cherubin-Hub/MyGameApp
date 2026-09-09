'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Reset error state on new submission
        
        try {
            // Call your Node.js backend running on port 8080
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                // CRITICAL: Tells the browser to accept the HttpOnly cookie
                credentials: 'include' 
            });

            if (response.ok) {
                // If login is successful, Next.js router takes them to the protected dashboard
                router.push('/dashboard');
            } else {
                // Parse the error message sent from your AuthController
                const data = await response.json();
                setError(data.error || "Login failed");
            }
        } catch (err) {
            setError("Could not connect to the server.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                
                {error && (
                    <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm text-center">
                        {error}
                    </div>
                )}
                
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            required
                            className="mt-1 w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            required
                            className="mt-1 w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition mt-2"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}