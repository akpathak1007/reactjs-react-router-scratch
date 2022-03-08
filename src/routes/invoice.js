import { useParams } from "react-router-dom";
import { getInvoiceById } from "../data";

export default () => {
  let params = useParams();
  const invoiceId = parseInt(params.invoiceId);
  const invoice = getInvoiceById(invoiceId);
  return (
    <div className="mx-3">
      <h2>Due Total: {  invoice.amount  }</h2>
      <p>{invoice.name} : {invoice.name } </p>
      <p>Due Date: {invoice.due}</p>
    </div>
  );
};
