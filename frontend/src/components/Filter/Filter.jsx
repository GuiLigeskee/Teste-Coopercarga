import React from "react";
import "./Filter.css";

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
  const categories = [
    "Todos",
    "Camiseta",
    "Regata",
    "Jaqueta",
    "Calção",
    "Acessório",
    "Calçado",
  ];
  const sizes = ["Todos", "P", "M", "G", "GG", "XPP"];
  const priceRanges = [
    { label: "Todos", min: 0, max: Infinity },
    { label: "Até R$ 100,00", min: 0, max: 100 },
    { label: "R$ 100,00 - R$ 200,00", min: 100, max: 200 },
    { label: "R$ 200,00 - R$ 300,00", min: 200, max: 300 },
    { label: "R$ 300,00 - R$ 400,00", min: 300, max: 400 },
    { label: "R$ 400,00 - R$ 500,00", min: 400, max: 500 },
    { label: "Acima de R$ 500,00", min: 500, max: Infinity },
  ];
  const sports = ["Todos", "Futebol", "Basquete", "Corrida"];

  const resetFilters = () => {
    setFilter("Todos");
    setSizeFilter("Todos");
    setPriceRange({ min: 0, max: Infinity });
    setSportFilter("Todos");
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

      <button className="filter-reset-button" onClick={resetFilters}>
        Limpar Filtros
      </button>
    </div>
  );
};

export default Filter;
