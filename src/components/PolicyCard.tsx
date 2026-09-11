import type { Policy } from "../types/Policy";

interface PolicyCardProps {
  policy: Policy;
}

function PolicyCard({ policy }: PolicyCardProps) {
  return (
    <article>
      <header>
        <h2>{policy.productName}</h2>
        <p>{policy.policyDescription}</p>
      </header>

      <div>
        <p>
          <strong>Startdatum</strong>
          <span>{policy.policyStartDate}</span>
        </p>

        <p>
          <strong>Försäkringsnummer</strong>
          <span>{policy.policyNumber}</span>
        </p>

        <p>
          <strong>Pris per månad</strong>
          <span>{policy.yearlyPrice / 12} kr</span>
        </p>
      </div>
    </article>
  );
}

export default PolicyCard;