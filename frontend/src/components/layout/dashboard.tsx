import { Header } from './header';
import { Footer } from './footer';
import { Sidebar } from './sidebar';

// The layout accepts 'children' (the page content)
export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            
            <div className="flex-1 flex flex-col">
                <Header />
                
                {/* Main Content Area */}
                <main className="flex-1 p-6">
                    {children}
                </main>
                
                <Footer />
            </div>
        </div>
    );
};