import { redirect } from 'next/navigation';

export default function Home() {
  // Instantly redirect any visitor on the root URL to the dashboard
  redirect('/dashboard');
}