import type { Policy } from "../../types/Policy";
import "./PolicyCard.css";

interface PolicyCardProps {
  policy: Policy;
}

function PolicyCard({ policy }: PolicyCardProps) {
  const monthlyPrice = policy.yearlyPrice / 12;

  return (
    <article className="policy-card">
      <header className="policy-card__header">
       {policy.policyStatus === "Inactive" && (
       <span className="policy-card__status">
         Din försäkring har avslutats
       </span>
       )}

       <h2 className="policy-card__title">{policy.productName}</h2>

       <p className="policy-card__description">
        {policy.policyDescription}
       </p>
      </header>

      <div className="policy-card__body">
        <div className="policy-card__row">
          <strong>Startdatum</strong>
          <span>{policy.policyStartDate}</span>
        </div>

        <div className="policy-card__row">
          <strong>Försäkringsnummer</strong>
          <span>{policy.policyNumber}</span>
        </div>

        <div className="policy-card__row">
          <strong>Pris per månad</strong>
          <span>{monthlyPrice} kr</span>
        </div>
      </div>
    </article>
  );
}

export default PolicyCard;