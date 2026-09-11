import { useEffect, useState } from "react";
import type { Policy } from "./types/Policy";
import PolicyCard from "./components/PolicyCard";

function App() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

return (
  <main className="page">
    <div className="page__content">
      <h1 className="page__title">Mina försäkringar</h1>

      {isLoading && <p>Laddar försäkringar...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && policies.length === 0 && (
        <p>Inga försäkringar hittades.</p>
      )}

      {!isLoading && !error && policies.length > 0 && (
        <div className="policy-list">
          {policies.map((policy) => (
            <PolicyCard
              key={policy.policyNumber}
              policy={policy}
            />
          ))}
        </div>
      )}
    </div>
  </main>
);

}

export default App;