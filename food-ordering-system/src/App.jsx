import React, { useState } from 'react';

// --- STYLES ---
// Consistent with our tavern aesthetic
const theme = {
  bg: '#1e1e24',
  panel: '#2b2b36',
  text: '#f5f6fa',
  gold: '#e1b12c',
  accent: '#e84118',
  magic: '#9c88ff', // New magical accent color for charity
  border: '2px solid #9c88ff',
  font: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
};

const CharityBoard = () => {
  // --- STATE ---
  // Tracking the community goal and recent donations
  const [currentFund, setCurrentFund] = useState(1450);
  const fundGoal = 5000;
  
  const [recentDonors, setRecentDonors] = useState([
    { name: 'Sir Galahad', amount: 50, message: 'For the frontier villages!' },
    { name: 'Mystic Elara', amount: 15, message: 'Blessings of light.' },
    { name: 'Anonymous Rogue', amount: 100, message: 'Keep the change.' }
  ]);

  // --- EVENTS ---
  const handleDonate = (amount, tierName) => {
    // 1. Increase the total fund
    setCurrentFund(prev => prev + amount);
    
    // 2. Add the user to the top of the recent donors list
    const newDonor = { 
      name: 'Local Hero (You)', 
      amount: amount, 
      message: `Sponsored a ${tierName}!` 
    };
    setRecentDonors([newDonor, ...recentDonors].slice(0, 5)); // Keep only the top 5
    
    alert(`Thank you! Your donation of $${amount} has been added to the Guild's Relief Fund.`);
  };

  // Calculate percentage for the progress bar
  const progressPercentage = Math.min((currentFund / fundGoal) * 100, 100);

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, padding: '30px', fontFamily: theme.font, borderRadius: '10px', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* HEADER SECTION */}
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: theme.magic, textTransform: 'uppercase', letterSpacing: '2px', borderBottom: `1px solid ${theme.magic}`, paddingBottom: '10px' }}>
          The Guild's Relief Fund
        </h1>
        <p style={{ color: '#aaa', fontStyle: 'italic' }}>"No villager goes hungry under our watch."</p>
      </header>

      {/* COMMUNITY QUEST PROGRESS BAR */}
      <div style={{ backgroundColor: theme.panel, padding: '20px', borderRadius: '8px', border: theme.border, marginBottom: '30px', boxShadow: '0 0 15px rgba(156, 136, 255, 0.2)' }}>
        <h2 style={{ margin: '0 0 15px 0', color: theme.text, fontSize: '1.2rem' }}>Current Campaign: Rebuilding the Eastern Outpost</h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>Current Provisions: <strong style={{ color: theme.gold }}>${currentFund}</strong></span>
          <span>Goal: ${fundGoal}</span>
        </div>
        
        <div style={{ width: '100%', backgroundColor: '#000', height: '25px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #555' }}>
          <div style={{ 
            width: `${progressPercentage}%`, 
            backgroundColor: theme.magic, 
            height: '100%', 
            transition: 'width 0.8s ease-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '0.8rem'
          }}>
            {progressPercentage.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* DONATION TIERS */}
      <h3 style={{ color: theme.gold, marginBottom: '15px' }}>Sponsor a Meal:</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '40px' }}>
        
        <div style={{ backgroundColor: theme.panel, padding: '15px', borderRadius: '8px', textAlign: 'center', border: '1px solid #444' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#aaa' }}>Traveler's Ration</h4>
          <p style={{ margin: '0 0 15px 0', fontSize: '1.5rem', color: theme.gold }}>$5.00</p>
          <button onClick={() => handleDonate(5, "Traveler's Ration")} style={{ backgroundColor: theme.magic, color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>Donate</button>
        </div>

        <div style={{ backgroundColor: theme.panel, padding: '15px', borderRadius: '8px', textAlign: 'center', border: `1px solid ${theme.magic}` }}>
          <h4 style={{ margin: '0 0 10px 0', color: theme.magic }}>Hearty Tavern Stew</h4>
          <p style={{ margin: '0 0 15px 0', fontSize: '1.5rem', color: theme.gold }}>$15.00</p>
          <button onClick={() => handleDonate(15, "Hearty Tavern Stew")} style={{ backgroundColor: theme.magic, color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>Donate</button>
        </div>

        <div style={{ backgroundColor: theme.panel, padding: '15px', borderRadius: '8px', textAlign: 'center', border: '1px solid #444' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#e1b12c' }}>Hero's Feast</h4>
          <p style={{ margin: '0 0 15px 0', fontSize: '1.5rem', color: theme.gold }}>$50.00</p>
          <button onClick={() => handleDonate(50, "Hero's Feast")} style={{ backgroundColor: theme.magic, color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>Donate</button>
        </div>

      </div>

      {/* RECENT DONORS LEDGER */}
      <div style={{ backgroundColor: theme.panel, padding: '20px', borderRadius: '8px', border: '1px solid #444' }}>
        <h3 style={{ color: theme.gold, margin: '0 0 15px 0' }}>Recent Benefactors</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {recentDonors.map((donor, index) => (
            <li key={index} style={{ borderBottom: index !== recentDonors.length - 1 ? '1px dashed #555' : 'none', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ color: theme.text }}>{donor.name}</strong>
                <p style={{ margin: '5px 0 0 0', color: '#aaa', fontSize: '0.9rem', fontStyle: 'italic' }}>"{donor.message}"</p>
              </div>
              <span style={{ color: theme.gold, fontWeight: 'bold' }}>+${donor.amount}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CharityBoard;
