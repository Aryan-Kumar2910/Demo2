import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import "./UserDashboard.css";

const UserDashboard = () => {
  const [aiOutput, setAiOutput] = useState('');
  
  
  const handleAiAnalysis = () => {
    setAiOutput('Analyzing image... Please wait.');
    setTimeout(() => {
      const val1 = Math.floor(Math.random() * 50) + 10;
      const val2 = val1 + Math.floor(Math.random() * 50) + 10;
      setAiOutput(`Estimated Value Range: ₹${val1} - ₹${val2}`);
    }, 2000);
  };

  return (
  
    <div className="dashboard-containeruser">
      <aside className="sidebaruser">
        <h2>User Panel</h2>
        <ul>
          <li><Link to="/dashboard/user">Sell Scrap</Link></li>
          <li><Link to="/dashboard/user/overview">Dashboard</Link></li>
           <li><Link to="/leaderboard">🏆 Leaderboard</Link></li>
          <li><Link to="#">My Transactions</Link></li>
          <li><Link to="#">Rewards</Link></li>
          <li><Link to="/marketplace">Eco Bazaar</Link></li>
            
          <li><Link to="/">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-contentuser">
        <h1>User Dashboard</h1>

        <div className="rank-widgetuser">
          <div className="rank-infouser">
            <p>Your Rank</p>
            <h3>#3</h3>
          </div>
          <div className="rank-tieruser">
            <p>Current Tier</p>
            <h3>Recycle Hero</h3>
          </div>
          <div className="rank-pointsuser">
            <p>Total EcoPoints</p>
            <h3>12,800</h3>
          </div>
        </div>

        <StatCard title="Quick Stats">
          <p>Total Scrap Sold: <strong>15 kg</strong> | Rewards Earned: <strong>350 EcoCoins</strong></p>
        </StatCard>
        
        
      </main>
    </div>
  );
};

export default UserDashboard;