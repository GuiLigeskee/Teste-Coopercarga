import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sportFilter, setSportFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao carregar os dados:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "all" || product.type === filter;
    const matchesSize =
      sizeFilter === "all" || product.available_sizes.includes(sizeFilter);
    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesSport = sportFilter === "all" || product.sport === sportFilter;

    return matchesCategory && matchesSize && matchesPrice && matchesSport;
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-lg-none text-center mb-3">
          <button
            className="btn btn-dark"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
          </button>
        </div>

        <div
          className={`col-lg-3 col-12 p-4 ${
            showFilters ? "d-block" : "d-none d-lg-block"
          }`}
        >
          <Filter
            filter={filter}
            setFilter={setFilter}
            sizeFilter={sizeFilter}
            setSizeFilter={setSizeFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sportFilter={sportFilter}
            setSportFilter={setSportFilter}
          />
        </div>

        <div className="col-lg-9 col-12 p-4">
          {filteredProducts.length > 0 ? (
            <div className="row">
              {filteredProducts.map((product) => (
                <div className="col-md-4 mb-4" key={product.name}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h3>Nenhum produto encontrado.</h3>
              <p>Por favor, ajuste os filtros e tente novamente.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
