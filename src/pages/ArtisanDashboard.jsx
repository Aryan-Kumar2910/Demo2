import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import "./ArtisanDashboard.css";

const ArtisanDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Artisan Panel</h2>
        <ul> {/* Sidebar Navigation */}
          <li><Link to="#">Dashboard</Link></li>
          <li><Link to="#">Available Scrap</Link></li>
          <li><Link to="#">Upload Products</Link></li>
          <li><Link to="#">My Sales</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Artisan Dashboard</h1>
        
        <StatCard title="Available Scrap Nearby"> {/* Available Scrap Table */}
          <table>
            <thead>
              <tr>
                <th>Scrap Type</th>
                <th>Quantity (Approx)</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wood Planks</td>
                <td>15 kg</td>
                <td>Green Park Hub</td>
                <td><button className="btn btn-secondary">Request</button></td>
              </tr>
              <tr>
                <td>Glass Bottles</td>
                <td>25 kg</td>
                <td>Hauz Khas Hub</td>
                <td><button className="btn btn-secondary">Request</button></td>
              </tr>
            </tbody>
          </table>
        </StatCard>
        
        <StatCard title="Upload New Product"> {/* Upload Product Form */}
          <form>
            <label>Product Image:</label>
            <input type="file" />
            <label>Product Name:</label>
            <input type="text" placeholder="e.g., Handmade Tote Bag" />
            <label>Price (₹):</label>
            <input type="number" placeholder="Enter Price" />
            <label>Description:</label>
            <textarea placeholder="Product Description"></textarea>
            <label>Scrap Material Used:</label>
            <input type="text" placeholder="e.g., Scrap Fabric, Old Jeans" />
            <label>Category:</label>
            <select>
              <option>Decor</option>
              <option>Furniture</option>
              <option>Bags</option>
              <option>Accessories</option>
            </select>
            <button type="submit" className="btn btn-primary">Upload Product</button>
          </form>
        </StatCard>
      </main>
    </div>
  );
};

export default ArtisanDashboard;