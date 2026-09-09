// app/login/page.tsx
'use client'
import { useRouter } from 'navigation'; // or next/router

export default function LoginPage() {
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Gather email and password from state/refs
        const response = await fetch('http://your-backend-api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include' // CRITICAL for accepting HttpOnly cookies
        });

        if (response.ok) {
            router.push('/dashboard');
        } else {
            // Handle error state
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {/* Input fields for email and password */}
            <button type="submit">Login</button>
        </form>
    );
}