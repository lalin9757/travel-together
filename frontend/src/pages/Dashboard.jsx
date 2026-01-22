import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { UserGroupIcon, ChatBubbleLeftRightIcon, CalendarIcon, MapIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back, {user?.first_name || user?.username}!
                </h1>
                <p className="text-gray-600 mt-2">
                    Ready for your next adventure? Find travel buddies and plan your next trip.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <UserGroupIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Joined Groups</p>
                            <p className="text-2xl font-bold">3</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <ChatBubbleLeftRightIcon className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Unread Messages</p>
                            <p className="text-2xl font-bold">12</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center">
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <CalendarIcon className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Upcoming Trips</p>
                            <p className="text-2xl font-bold">2</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <MapIcon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Countries Visited</p>
                            <p className="text-2xl font-bold">5</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <Link to="/groups/create" className="block w-full btn-primary text-center">
                            Create New Group
                        </Link>
                        <Link to="/groups" className="block w-full bg-gray-100 text-gray-800 hover:bg-gray-200 text-center py-2 px-4 rounded-lg transition">
                            Browse Groups
                        </Link>
                        <Link to="/profile/edit" className="block w-full bg-gray-100 text-gray-800 hover:bg-gray-200 text-center py-2 px-4 rounded-lg transition">
                            Edit Profile
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">Your Groups</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4 py-2">
                            <h3 className="font-medium">Bangladesh Adventure</h3>
                            <p className="text-sm text-gray-500">12 members • Starts: 15 March</p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4 py-2">
                            <h3 className="font-medium">Beach Lovers Goa</h3>
                            <p className="text-sm text-gray-500">8 members • Starts: 22 March</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4 py-2">
                            <h3 className="font-medium">Mountain Trekkers</h3>
                            <p className="text-sm text-gray-500">6 members • Starts: 5 April</p>
                        </div>
                    </div>
                    <Link to="/groups" className="block text-center text-primary hover:text-blue-600 mt-4">
                        View all groups →
                    </Link>
                </div>
            </div>

            {/* Upcoming Trips */}
            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Upcoming Trips</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3">Destination</th>
                                <th className="text-left py-3">Dates</th>
                                <th className="text-left py-3">Group</th>
                                <th className="text-left py-3">Status</th>
                                <th className="text-left py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-3">Cox's Bazar, Bangladesh</td>
                                <td className="py-3">Mar 15-20, 2024</td>
                                <td className="py-3">Bangladesh Adventure</td>
                                <td className="py-3">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                        Confirmed
                                    </span>
                                </td>
                                <td className="py-3">
                                    <button className="text-primary hover:text-blue-600 text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3">Goa, India</td>
                                <td className="py-3">Mar 22-28, 2024</td>
                                <td className="py-3">Beach Lovers Goa</td>
                                <td className="py-3">
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                        Planning
                                    </span>
                                </td>
                                <td className="py-3">
                                    <button className="text-primary hover:text-blue-600 text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;