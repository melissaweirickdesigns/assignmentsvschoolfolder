import { useState } from "react";

export default function Departments() {

    const [operationsCount] = useState(3);
    const [accountingCount] = useState(0);
    const [customerServiceCount] = useState(1);
    const [wherehouseCount] = useState(1);
    const [developmentCount] = useState(1);
    const [marketingCount] = useState(1);
    const [salesCount] = useState(1);
    const [internationalCount] = useState(1);

    return (
        <>
            <div className="department-section">
                <h3>Departments:</h3>
                <div className="department-section-btns">
                    <button>Operations({operationsCount})</button>
                    <button>Accounting({accountingCount})</button>
                    <button>Customer Service({customerServiceCount})</button>
                    <button>Wherehouse({wherehouseCount})</button>
                    <button>Development({developmentCount})</button>
                    <button>Marketing({marketingCount})</button>
                    <button>Sales({salesCount})</button>
                    <button>International Shipping({internationalCount})</button>
                </div>
            </div>
        </>
    )
}