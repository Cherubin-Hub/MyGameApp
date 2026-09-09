import { DashboardLayout } from '@/components/layout/dashboard';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard!</h2>
            <p className="text-gray-600">This content is securely injected into the center of the layout.</p>
        </DashboardLayout>
    );
}