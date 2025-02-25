import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo ao Marketplace</h1>
          <p className="hero-subtitle">
            Explore nossa coleção de produtos incríveis!
          </p>
          <Link to="/produtos" className="hero-button">
            Ver Produtos
          </Link>
        </div>
      </section>

      {/* Destaques */}
      <section className="highlights-section">
        <div className="highlight-card">
          <div className="highlight-icon">🎯</div>
          <h3>Produtos Exclusivos</h3>
          <p>Encontre itens únicos e de alta qualidade.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🚀</div>
          <h3>Entrega Rápida</h3>
          <p>Receba seus pedidos no conforto da sua casa.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">💎</div>
          <h3>Garantia de Qualidade</h3>
          <p>Produtos selecionados com cuidado para você.</p>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="cta-section">
        <h2>Pronto para começar?</h2>
        <Link to="/produtos" className="cta-button">
          Explorar Produtos
        </Link>
      </section>
    </div>
  );
};

export default Home;
