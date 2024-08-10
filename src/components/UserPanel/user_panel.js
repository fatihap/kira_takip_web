import React from 'react';
import './UserPanel.css';

function UserPanel() {
  return (
    <div className="container">
      <div className="sidebar">
        <div>
          <h2>Kira Takip</h2>
          <div className="sidebar-item"><span role="img" aria-label="home">🏠</span>Kiracılarım</div>
          <div className="sidebar-item"><span role="img" aria-label="homes">🏘️</span>Evlerim</div>
          <div className="sidebar-item"><span role="img" aria-label="messages">💬</span>Mesajlarım</div>
          <div className="sidebar-item"><span role="img" aria-label="notifications">🔔</span>Bildirimlerim</div>
          <div className="sidebar-item"><span role="img" aria-label="calendar">📅</span>Takvim</div>
          <div className="sidebar-item"><span role="img" aria-label="reports">📊</span>Raporlarım</div>
        </div>
        <button className="add-tenant-button">Kiracı Ekle</button>
        <div>
          <div className="sidebar-item"><span role="img" aria-label="user">👤</span>Ali Kavaklı</div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <h1 className="title">Kiracılarım</h1>
          <input className="search-input" placeholder="Kiracı arama..." />
        </div>
        <div className="card-grid">
          {/* Örnek Kartlar */}
          <div className="card">
            <div>
              <h3 className="card-title">Burak Kılıç</h3>
              <p className="card-subtitle">Ankara Çankaya İlkbahar Mahallesi Başkent Emlak Konutları</p>
              <div className="date-info">
                <span role="img" aria-label="calendar">📅</span>
                29.07.2023 - 29.07.2024
              </div>
            </div>
            <div className="card-footer">
              <span>12.000 ₺</span>
              <div className="payment-status completed">6/12</div>
            </div>
          </div>
          <div className="card">
            <div>
              <h3 className="card-title">Burak Kılıç</h3>
              <p className="card-subtitle">Ankara Çankaya İlkbahar Mahallesi Başkent Emlak Konutları</p>
              <div className="date-info">
                <span role="img" aria-label="calendar">📅</span>
                29.07.2023 - 29.07.2024
              </div>
            </div>
            <div className="card-footer">
              <span>12.000 $</span>
              <div className="payment-status completed">6/12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
