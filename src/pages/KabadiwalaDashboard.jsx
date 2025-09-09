import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import "./KabadiwalaDashboard.css";

const KabadiwalaDashboard = () => {
  return (
    <div className="dashboard-containerbuddy">
      <aside className="sidebarbuddy">
        <h2>Scrap Buddy</h2>
        <ul> {/* Sidebar Navigation */}
          <li><Link to="#">Dashboard</Link></li>
          <li><Link to="#">Assigned Pickups</Link></li>
          <li><Link to="#">Enter Final Price</Link></li>
          <li><Link to="#">Earnings</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-contentbuddy">
        <h1>Scrap Buddy Dashboard</h1>
        
        <StatCard title="Today's Stats"> {/* Quick Stats */}
          <p>Pickups Today: <strong>3</strong> | Today's Earnings: <strong>₹450</strong> | Rating: <strong>4.8/5</strong></p>
        </StatCard>

        <StatCard title="Assigned Pickups"> {/* Assigned Pickups Table */}
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Scrap Type</th>
                <th>AI Estimate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123, Green Park, Delhi</td>
                <td>Plastic Bottles</td>
                <td>₹80 - ₹120</td>
                <td><button className="btn btn-primarybuddy">Accept</button></td>
              </tr>
               <tr>
                <td>456, Vasant Kunj, Delhi</td>
                <td>Old Clothes</td>
                <td>₹150 - ₹200</td>
                <td><button className="btn btn-primarybuddy">Accept</button></td>
              </tr>
            </tbody>
          </table>
        </StatCard>
        
        <StatCard title="Enter Final Price for Pickup #1024"> {/* Final Price Form */}
           <form>
              <p>AI Estimate for #1024: <strong>₹140 - ₹170</strong></p>
              <input type="number" placeholder="Enter Final Weight (kg)" />
              <select>
                  <option>Good Condition</option>
                  <option>Mixed Condition</option>
              </select>
              <input type="number" placeholder="Enter Final Price (₹)" required />
              <button type="submit" className="btn btn-primarybuddy">Confirm Final Price</button>
          </form>
        </StatCard>
      </main>
    </div>
  );
};

export default KabadiwalaDashboard;