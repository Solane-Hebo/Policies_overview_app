import { useEffect, useState, useRef } from "react";
import type { Policy } from "./types/Policy";
import PolicyCard from "./components/policyCard/PolicyCard";
import FilterPanel from "./components/filterPanel/FilterPanel";
import "./App.css";

function App() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterPanelRef = useRef<HTMLDivElement | null>(null);

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [appliedProducts, setAppliedProducts] = useState<string[]>([]);
  const [appliedStatuses, setAppliedStatuses] = useState<string[]>([]);

  const filteredPolicies = policies.filter((policy) => {
    const matchesProduct =
      appliedProducts.length === 0 ||
      appliedProducts.includes(policy.productName);

    const matchesStatus =
      appliedStatuses.length === 0 ||
      appliedStatuses.includes(policy.policyStatus);

    return matchesProduct && matchesStatus;
  });

   const productOptions = [
  ...new Set(policies.map((policy) => policy.productName)),
];

  useEffect(() => {
    async function fetchPolicies() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/policies/List`
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta försäkringarna.");
        }

        const result: Policy[] = await response.json();

        console.log("API response:", result);
        setPolicies(result);
      } catch (error) {
        console.error("Error fetching policies:", error);
        setError("Något gick fel när försäkringarna hämtades.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPolicies();
  }, []);

  useEffect(() => {
  if (isFilterOpen && window.innerWidth <= 760) {
    filterPanelRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [isFilterOpen]);

  function handleProductChange(product: string) {
  setSelectedProducts((current) =>
    current.includes(product)
      ? current.filter((item) => item !== product)
      : [...current, product]
  );
}

function handleStatusChange(status: string) {
  setSelectedStatuses((current) =>
    current.includes(status)
      ? current.filter((item) => item !== status)
      : [...current, status]
  );
}

function handleApplyFilters() {
  setAppliedProducts(selectedProducts);
  setAppliedStatuses(selectedStatuses);
  setIsFilterOpen(false);
}

function handleOpenFilter() {
  setIsFilterOpen(true);
}

 return (
  <main className="page">
    <div className="page__content">
      <h1 className="page__title">Mina Försäkringar</h1>

      <div className="overview-layout">
        <section className="overview-main">
          <div className="overview-toolbar">
            <span></span>

            <button
              className="filter-button"
              type="button"
              onClick={handleOpenFilter}
            >
              Filtrera
            </button>
          </div>

          {isLoading && <p>Laddar försäkringar...</p>}

          {error && <p>{error}</p>}

          {!isLoading && !error && filteredPolicies.length === 0 && (
            <p>Inga försäkringar hittades.</p>
          )}

          {!isLoading && !error && filteredPolicies.length > 0 && (
            <div className="policy-list">
              {filteredPolicies.map((policy) => (
                <PolicyCard
                  key={policy.policyNumber}
                  policy={policy}
                />
              ))}
            </div>
          )}
        </section>

        {isFilterOpen && (
  <div ref={filterPanelRef} className="filter-panel-wrapper">
    <FilterPanel
      products={productOptions}
      selectedProducts={selectedProducts}
      selectedStatuses={selectedStatuses}
      onProductChange={handleProductChange}
      onStatusChange={handleStatusChange}
      onApply={handleApplyFilters}
      onClose={() => setIsFilterOpen(false)}
    />
  </div>
)}
      </div>
    </div>
  </main>
);
}

export default App;