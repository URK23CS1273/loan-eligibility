function checkEligibility() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const salary = parseFloat(document.getElementById("salary").value);
  const existingEmi = parseFloat(document.getElementById("existingEmi").value);
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const resultDiv = document.getElementById("result");

  // Validate all input fields
  if (!name || !age || !salary || !existingEmi || !loanAmount) {
    resultDiv.innerHTML = `<p class='not-eligible'>❌ All fields are required.</p>`;
    return;
  }

  if (age < 21 || age > 60) {
    resultDiv.innerHTML = `<p class='not-eligible'>❌ Age must be between 21 and 60.</p>`;
    return;
  }

  if (loanAmount > 10 * salary) {
    resultDiv.innerHTML = `<p class='not-eligible'>❌ Loan amount exceeds 10× monthly salary.</p>`;
    return;
  }

  const proposedEmi = loanAmount * 0.1; // Assume proposed EMI = 10% of loan
  const dti = ((existingEmi + proposedEmi) / salary) * 100;

  if (dti > 60) {
    resultDiv.innerHTML = `<p class='not-eligible'>❌ DTI too high (${dti.toFixed(2)}%).</p>`;
  } else {
    resultDiv.innerHTML = `<p class='eligible'>✅ ${name} is Eligible for the Loan!</p>`;
  }
}
