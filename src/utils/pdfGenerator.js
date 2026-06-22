import jsPDF from "jspdf";

export const generatePDF = (comparison) => {
  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text(
    "LoanWise AI Report",
    20,
    20
  );

  doc.setFontSize(12);

  let y = 40;

  comparison.loans.forEach(
    (loan, index) => {
      doc.text(
        `Loan ${index + 1}`,
        20,
        y
      );

      y += 10;

      doc.text(
        `Amount: ₹${loan.amount}`,
        20,
        y
      );

      y += 10;

      doc.text(
        `Rate: ${loan.rate}%`,
        20,
        y
      );

      y += 10;

      doc.text(
        `EMI: ₹${loan.emi.toFixed(
          0
        )}`,
        20,
        y
      );

      y += 20;
    }
  );

  doc.save(
    "loan-report.pdf"
  );
};