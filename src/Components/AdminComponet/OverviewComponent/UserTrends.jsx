import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

const UserTrends = () => {
    // const [userStats, setUserStats] = useState([]); // State to hold user trends data

    // // Function to fetch user trends data
    // const fetchUserTrends = async () => {
    //     try {
    //         const response = await axios.get('/user-trends'); // Replace with your actual endpoint
    //         setUserStats(response.data); // Set the fetched data to state
    //     } catch (error) {
    //         console.error("Error fetching user trends data:", error);
    //     }
    // };

    // // Fetch data on component mount
    // useEffect(() => {
    //     fetchUserTrends();
    // }, []);

    const userStats = [
        { date: '2024-10-01', new_users: 15, active_users: 100 },
        { date: '2024-10-02', new_users: 20, active_users: 105 },
        { date: '2024-10-03', new_users: 30, active_users: 110 },
        { date: '2024-10-04', new_users: 25, active_users: 120 },
        { date: '2024-10-05', new_users: 40, active_users: 130 },
        { date: '2024-10-06', new_users: 10, active_users: 115 },
        { date: '2024-10-07', new_users: 50, active_users: 150 },
        { date: '2024-10-08', new_users: 35, active_users: 140 },
        { date: '2024-10-01', new_users: 15, active_users: 100 },
        { date: '2024-10-02', new_users: 20, active_users: 105 },
        { date: '2024-10-03', new_users: 30, active_users: 110 },
        { date: '2024-10-04', new_users: 25, active_users: 120 },
        { date: '2024-10-05', new_users: 40, active_users: 130 },
        { date: '2024-10-06', new_users: 10, active_users: 115 },
        { date: '2024-10-07', new_users: 50, active_users: 150 },
        { date: '2024-10-08', new_users: 35, active_users: 140 },
       
    ];

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="date" stroke="#8884d8" />
                    <YAxis stroke="#8884d8" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line type="monotone" dataKey="active_users" stroke="#8884d8" strokeWidth={3} dot={{ stroke: '#8884d8', strokeWidth: 2 }} />
                    <Line type="monotone" dataKey="new_users" stroke="#82ca9d" strokeWidth={3} dot={{ stroke: '#82ca9d', strokeWidth: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserTrends;
