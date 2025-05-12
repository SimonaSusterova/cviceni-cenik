const selectPlan = (planNumber) => {
  document.querySelector('#plan1').classList.remove('plan--selected');
  document.querySelector('#plan2').classList.remove('plan--selected');
  document.querySelector('#plan3').classList.remove('plan--selected');

  const selectedPlanElm = document.querySelector(`#plan${planNumber}`);
  selectedPlanElm.classList.add('plan--selected');
};

// Ověření, že když funkci zavolám dvakrát, zůstane vybraný jen poslední plán.
selectPlan(1);
selectPlan(3);

//Alternativní řešení – zapamatujeme si, který plán je vybraný, a než vybereme nový plán, zrušíme výběr jenom toho jednoho dříve vybraného plánu. Je potřeba vypořádat se i s tím, že na začátku není vybrán žádný plán.

let selectedPlanNumber;
const selectPlan = (planNumber) => {
  if (selectedPlanNumber !== undefined) {
    document
      .querySelector(`#plan${selectedPlanNumber}`)
      .classList.remove('plan--selected');
  }

  const selectedPlanElm = document.querySelector(`#plan${planNumber}`);
  selectedPlanElm.classList.add('plan--selected');
  selectedPlanNumber = planNumber;
};

// Ověření, že když funkci zavolám dvakrát, zůstane vybraný jen poslední plán.
selectPlan(3);
selectPlan(2);