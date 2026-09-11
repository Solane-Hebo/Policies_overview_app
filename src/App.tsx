import { useEffect, useState } from "react";
import type { Policy } from "./types/Policy";
import PolicyCard from "./components/PolicyCard";

function App() {
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    async function fetchPolicies() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/policies/List`
        );

        const result: Policy[] = await response.json();

        console.log("API response:", result);
        setPolicies(result);
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    }

    fetchPolicies();
  }, []);

  return (
    <>
      <h1>Mina försäkringar</h1>

      <div>
        {policies.map((policy) => (
          <PolicyCard
            key={policy.policyNumber}
            policy={policy}
          />
        ))}
      </div>
    </>
  );
}

export default App;