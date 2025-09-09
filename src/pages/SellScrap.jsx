// src/pages/SellScrap.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBox, FaTshirt, FaDesktop, FaFileAlt } from 'react-icons/fa';
// --- ✨ Use this corrected import block ✨ ---
import { FaRecycle, FaLaptop, FaQuestionCircle } from 'react-icons/fa';
import { MdKitchen, MdBlender } from 'react-icons/md'; // Added MdBlender
import StatCard from '../components/StatCard';
import './SellScrap.css'; // We'll create this CSS file next

// --- The Form for Step 2 ---
const ScrapDetailsForm = ({ category, onBack }) => {
  const [aiOutput, setAiOutput] = useState('');

  const handleAiAnalysis = () => {
    setAiOutput('Analyzing...');
    setTimeout(() => {
      const val1 = Math.floor(Math.random() * 50) + 10;
      const val2 = val1 + Math.floor(Math.random() * 50) + 10;
      setAiOutput(`Estimated Value: ₹${val1} - ₹${val2}`);
    }, 2000);
  };

  return (
    <div>
      <button onClick={onBack} className="back-button">
        <FaArrowLeft /> Back to Categories
      </button>
      <h3 className="form-title">Enter Details for: <strong>{category.name}</strong></h3>
      <form>
        <label>1. Upload an image of your scrap:</label>
        <input type="file" />
        <label>2. Enter approximate weight (in kg):</label>
        <input type="number" placeholder="e.g., 5" />
        <label>3. Add a short description (optional):</label>
        <textarea placeholder="e.g., Mix of plastic bottles and containers"></textarea>
        
        <button type="button" className="btn btn-secondary" onClick={handleAiAnalysis}>Get AI Estimated Value</button>

        {aiOutput && (
          <div className="ai-output-container">
            <div className="ai-result">{aiOutput}</div>
            <button type="submit" className="btn btn-primary">Request Kabadiwala Pickup</button>
          </div>
        )}
      </form>
    </div>
  );
};

// --- The Category Selector for Step 1 ---
const CategorySelector = ({ onSelectCategory }) => {
const categories = [
  { name: 'Normal Recyclables', icon: <FaRecycle /> },
  { name: 'Large Appliances', icon: <MdKitchen /> },
  { name: 'Small Appliances', icon: <MdBlender /> }, // --- ✨ Fixed Icon ✨ ---
  { name: 'Mobiles & Computers', icon: <FaLaptop /> },
  { name: 'Others', icon: <FaQuestionCircle /> }
];

  return (
    <div>
      <h2>What type of scrap are you selling?</h2>
      <div className="category-grid">
        {categories.map(cat => (
          <div key={cat.name} className="category-card-sell" onClick={() => onSelectCategory(cat)}>
            <div className="category-icon">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- The Main Component ---
const SellScrap = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>User Panel</h2>
        <ul>
          {/* --- UPDATED LINKS --- */}
          <li><Link to="/dashboard/user/overview">Dashboard</Link></li>
          <li><Link to="/dashboard/user" className="active">Sell Scrap</Link></li>
          <li><Link to="/leaderboard">🏆 Leaderboard</Link></li>
          <li><Link to="#">My Transactions</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Sell Your Scrap</h1>
        <StatCard>
          {selectedCategory ? (
            <ScrapDetailsForm category={selectedCategory} onBack={() => setSelectedCategory(null)} />
          ) : (
            <CategorySelector onSelectCategory={setSelectedCategory} />
          )}
        </StatCard>
      </main>
    </div>
  );
};

export default SellScrap;