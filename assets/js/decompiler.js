/* ==========================================================================
   NESADIV — FORENSIC CTC DECOMPILER ENGINE (TAX YEAR 2026-27 NEW REGIME)
   ========================================================================== */

window.ndDecompileCTC = function (input) {
  const headlineCTC = Math.max(0, Number(input.headlineCTC) || 0);
  const variablePay = Math.max(0, Number(input.variablePay) || 0);
  const esopAnnual = Math.max(0, Number(input.esopAnnual) || 0);
  const joiningBonus = Math.max(0, Number(input.joiningBonus) || 0);
  const employerPF = Math.max(0, Number(input.employerPF) || 0);
  const gratuity = Math.max(0, Number(input.gratuity) || 0);
  const insurance = Math.max(0, Number(input.insurance) || 0);
  const employeePF = Math.max(0, Number(input.employeePF) || 0);
  const profTaxAnnual = Number(input.profTaxAnnual ?? 2400);

  // 1. Phantom / Non-Monthly-Cash Components
  const phantomTotal = variablePay + esopAnnual + joiningBonus + employerPF + gratuity + insurance;

  // 2. Fixed Gross Salary (Guaranteed Annual Cash before Tax & Employee PF)
  const fixedGrossAnnual = Math.max(0, headlineCTC - phantomTotal);

  // 3. Taxable Income (Tax Year 2026-27 New Tax Regime — ₹75,000 Standard Deduction)
  const standardDeduction = 75000;
  const taxableIncome = Math.max(0, fixedGrossAnnual - standardDeduction);

  // 4. Slab Tax Computation (New Tax Regime 2026-27)
  function computeSlabTax(income) {
    let tax = 0;
    if (income > 2400000) tax += (income - 2400000) * 0.30;
    if (income > 2000000) tax += (Math.min(income, 2400000) - 2000000) * 0.25;
    if (income > 1600000) tax += (Math.min(income, 2000000) - 1600000) * 0.20;
    if (income > 1200000) tax += (Math.min(income, 1600000) - 1200000) * 0.15;
    if (income > 800000)  tax += (Math.min(income, 1200000) - 800000) * 0.10;
    if (income > 400000)  tax += (Math.min(income, 800000) - 400000) * 0.05;
    return tax;
  }

  let baseTax = computeSlabTax(taxableIncome);

  // Section 87A Rebate & Marginal Relief (Nil tax up to ₹12,00,000 taxable income)
  if (taxableIncome <= 1200000) {
    baseTax = 0;
  } else {
    const excessOver12L = taxableIncome - 1200000;
    if (baseTax > excessOver12L) {
      baseTax = excessOver12L;
    }
  }

  // Surcharge (New Regime caps at 25%)
  let surchargeRate = 0;
  if (taxableIncome > 20000000) surchargeRate = 0.25;
  else if (taxableIncome > 10000000) surchargeRate = 0.15;
  else if (taxableIncome > 5000000) surchargeRate = 0.10;

  const surcharge = baseTax * surchargeRate;
  const cess = (baseTax + surcharge) * 0.04;
  const annualIncomeTax = Math.round(baseTax + surcharge + cess);

  // 5. True Net Take-Home (Guaranteed Monthly Liquidity)
  const annualNetInHand = Math.max(0, fixedGrossAnnual - annualIncomeTax - employeePF - profTaxAnnual);
  const monthlyNetInHand = Math.round(annualNetInHand / 12);
  const monthlyGrossFixed = Math.round(fixedGrossAnnual / 12);
  const monthlyTax = Math.round(annualIncomeTax / 12);
  const monthlyEmployeePF = Math.round(employeePF / 12);
  const monthlyProfTax = Math.round(profTaxAnnual / 12);

  // 6. Forensic Ratios
  const headlineMonthly = headlineCTC > 0 ? Math.round(headlineCTC / 12) : 0;
  const liquidityRatio = headlineCTC > 0 ? Math.round((annualNetInHand / headlineCTC) * 100) : 0;
  const phantomRatio = headlineCTC > 0 ? Math.round((phantomTotal / headlineCTC) * 100) : 0;

  return {
    headlineCTC,
    headlineMonthly,
    phantomTotal,
    phantomRatio,
    fixedGrossAnnual,
    monthlyGrossFixed,
    taxableIncome,
    annualIncomeTax,
    monthlyTax,
    monthlyEmployeePF,
    monthlyProfTax,
    annualNetInHand,
    monthlyNetInHand,
    liquidityRatio,
  };
};

window.ndFormatINR = function (num) {
  return '₹' + Math.round(num || 0).toLocaleString('en-IN');
};
