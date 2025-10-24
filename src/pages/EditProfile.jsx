import React, { useContext, useState, useEffect } from 'react'
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router';

function EditProfile() {

    useEffect(()=>{
    
            document.title = "Edit Profile - PlayOn";
        },[]);
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const from = "/profile";
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateProfile(
                user,
                {
                    displayName: name,
                    photoURL: photoURL
                }
            );
            navigate(from, { replace: true });
        } catch (error) {
            alert(`Error: ${error}`)
        }

    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="w-full mt-11 mb-11 max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                    Edit Profile — {user?.displayName || "Guest"}
                </h1>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="fullname"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Full Name
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Example Name"
                            required
                            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="photoURL"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Photo URL
                        </label>
                        <input
                            id="photoURL"
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="https://example.com/photo.jpg"
                            required
                            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EditProfile;
