export const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">MyGameApp Admin</h1>
            {/* You can add a user profile dropdown or logout button here later */}
            <div>Profile</div>
        </header>
    );
};