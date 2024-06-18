import { Link } from "react-router-dom";

const NotFound = () => {
    const backgroundStyle = {
        backgroundImage: 'url("/frontend-gofit/src/assets/Logo.png")'
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-cover bg-center" style={backgroundStyle}>
            <div className="text-center p-6 bg-white bg-opacity-95 rounded-xl shadow-2xl">
                <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Not Found!</h1>
                <p className="mb-4">Oops! Looks like you took a wrong turn on your fitness journey.</p>
                <p className="text-lg text-gray-700 mb-8">Do not worry, lets get back on track!</p>
                <Link to="/" className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ease-in-out">
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
