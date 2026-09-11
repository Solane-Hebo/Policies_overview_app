import "./FilterPanel.css";

interface FilterPanelProps {
  products: string[];
  selectedProducts: string[];
  selectedStatuses: string[];
  onProductChange: (product: string) => void;
  onStatusChange: (status: string) => void;
  onApply: () => void;
  onClose: () => void;
}

function FilterPanel({
  products,
  selectedProducts,
  selectedStatuses,
  onProductChange,
  onStatusChange,
  onApply,
  onClose,
}: FilterPanelProps) {
  return (
    <aside className="filter-panel">
      <div className="filter-panel__header">
        <h2>Filtrera</h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Stäng filter"
        >
          ×
        </button>
      </div>

      <div className="filter-panel__section">
        <h3>Typ av försäkring</h3>

        {products.map((product) => (
          <label key={product}>
            <input
              type="checkbox"
              checked={selectedProducts.includes(product)}
              onChange={() => onProductChange(product)}
            />
            {product}
          </label>
        ))}
      </div>

      <div className="filter-panel__section">
        <h3>Status</h3>

        <label>
          <input
            type="checkbox"
            checked={selectedStatuses.includes("Active")}
            onChange={() => onStatusChange("Active")}
          />
          Aktiva försäkringar
        </label>

        <label>
          <input
            type="checkbox"
            checked={selectedStatuses.includes("Inactive")}
            onChange={() => onStatusChange("Inactive")}
          />
          Avslutade försäkringar
        </label>
      </div>

      <button
        type="button"
        onClick={onApply}
      >
        Visa försäkringar
      </button>
    </aside>
  );
}

export default FilterPanel;