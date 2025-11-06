import { useState } from "react";

const Form = () => {
    const [data, setData] = useState({
        username: "",
        city: "",
        email: "",
        age: "",
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username= ${data.username}, City = ${data.city}, Email = ${data.email}, Age = ${data.age}! `);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    User Form
                </h2>

                <input
                    name="username"
                    type="text"
                    value={data.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                <input
                    name="city"
                    type="text"
                    value={data.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                <input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                <input
                    name="age"
                    type="number"
                    value={data.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                <input
                    name="description"
                    type="text"
                    value={data.description}
                    onChange={handleChange}
                    placeholder="Enter your query"
                    required
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
