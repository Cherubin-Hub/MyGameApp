// components/DashboardLayout.tsx
export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout-container">
            <Header />
            <div className="content-wrapper">
                <Sidebar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
}