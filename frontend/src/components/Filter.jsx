import React from "react";

const Filter = ({
  filter,
  setFilter,
  sizeFilter,
  setSizeFilter,
  priceRange,
  setPriceRange,
  sportFilter,
  setSportFilter,
}) => {
  const categories = ["all", "Camiseta", "Regata", "Calção", "Acessório"];
  const sizes = ["all", "P", "M", "G", "GG", "XPP", "39", "44"];
  const priceRanges = [
    { label: "Todos", min: 0, max: Infinity },
    { label: "Até R$ 100", min: 0, max: 100 },
    { label: "R$ 100 - R$ 300", min: 100, max: 300 },
    { label: "Acima de R$ 300", min: 300, max: Infinity },
  ];
  const sports = ["all", "Futebol", "Basquete", "Corrida"];

  // Função para resetar todos os filtros
  const resetFilters = () => {
    setFilter("all");
    setSizeFilter("all");
    setPriceRange({ min: 0, max: Infinity });
    setSportFilter("all");
  };

  return (
    <div className="filter-section">
      <h4 className="filter-title">Filtrar por:</h4>
      <div className="filter-group">
        <label className="filter-label">Categoria:</label>
        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Tamanho:</label>
        <select
          className="filter-select"
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
        >
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Faixa de Preço:</label>
        <select
          className="filter-select"
          value={priceRanges.findIndex(
            (range) =>
              range.min === priceRange.min && range.max === priceRange.max
          )}
          onChange={(e) => setPriceRange(priceRanges[e.target.value])}
        >
          {priceRanges.map((range, index) => (
            <option key={index} value={index}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Esporte:</label>
        <select
          className="filter-select"
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
        >
          {sports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

      {/* Botão para resetar os filtros */}
      <button className="filter-reset-button" onClick={resetFilters}>
        Resetar Filtros
      </button>
    </div>
  );
};

export default Filter;
