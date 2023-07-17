// Used on anfrage.html
function initCalculator() {
  const valueInput = document.querySelector("input[name='Gesamtwert']");
  const priceElement = document.querySelector("[data-name='price']");
  const personalOfferDisclaimer = document.querySelector(
    "[data-name='personal']"
  );
  const discountSection = document.querySelector(
    "[data-name='discount-section']"
  );
  const priceSection = document.querySelector("[data-name='price-section']");
  const insuranceButtons = document.querySelectorAll(
    "input[name='Versicherung']"
  );
  const intervalButtons = document.querySelectorAll("input[name='Zahlung']");
  const coverageSection = document.querySelector(
    "[data-name='coverage-section']"
  );

  const sinfonimaWording = document.querySelector(
    "[data-name='sinfonima-wording']"
  );
  const iamsoundWording = document.querySelector(
    "[data-name='iamsound-wording']"
  );

  const discountCodeInput = document.querySelector(
    "[data-name='discount-code']"
  );
  const discountPriceElement = document.querySelector(
    "[data-name='discount-price']"
  );

  const listDisclaimerElement = document.querySelector(
    "[data-name='list-disclaimer']"
  );
  const nextDisclaimerElement = document.querySelector(
    "[data-name='next-disclaimer']"
  );

  let interval;
  let insurance;
  let value;
  let calculatedPrice;
  let discountPrice;
  let coverage;
  let enteredCode;

  coverageSection.style.display = "none";
  discountSection.style.display = "none";
  discountCodeInput.addEventListener("keyup", calculatePrice);
  valueInput.addEventListener("keyup", calculatePrice);
  intervalButtons.forEach((el) => el.addEventListener("click", calculatePrice));
  insuranceButtons.forEach((el) =>
    el.addEventListener("click", calculatePrice)
  );
  coverageSection.addEventListener("click", calculatePrice);

  function calculatePrice() {
    interval = document.querySelector("input[name='Zahlung']:checked")?.value;
    insurance = document.querySelector(
      "input[name='Versicherung']:checked"
    )?.value;
    value = parseInt(valueInput.value);
    coverage = document.querySelector("input[name='Deckung']:checked")?.value;
    enteredCode = discountCodeInput?.value;
    const code = "tzouitxbq21"; // Obfuscated using obfuscateString function below: synthswap10

    // Show / hide "Instrumente" vs Equipment
    if (insurance === "IM SOUND") {
      sinfonimaWording.style.display = "none";
      iamsoundWording.style.display = "inline";
      discountSection.style.display = "block";
    } else {
      sinfonimaWording.style.display = "inline";
      iamsoundWording.style.display = "none";
      discountSection.style.display = "none";
    }

    // Return if there is no value, no interval, no insurance or sinfonima is selected
    if (!value || value === 0 || !interval || !insurance) {
      priceSection.style.display = "none";
      personalOfferDisclaimer.style.display = "none";
      coverageSection.style.display = "none";
      return;
    }
    priceSection.style.display = "block";

    // Sinfonima pauschal Preis
    if ((value <= 3000) & (insurance === "SINFONIMA")) {
      calculatedPrice = 53.55;
      personalOfferDisclaimer.style.display = "none";
      coverageSection.style.display = "none";
    } else if (value < 40000 && insurance === "IM SOUND") {
      // Regular calculation
      calculatedPrice = value * 0.01785;

      // If IM SOUND over 20000€
      if (value >= 20000) {
        // Show option for stationär
        coverageSection.style.display = "block";

        // Only stationär
        if (coverage === "Stationaer") {
          calculatedPrice = value * 0.00714;
        }
      } else {
        coverageSection.style.display = "none";
      }

      // If price is lower than minimum set minimum
      calculatedPrice = Math.max(calculatedPrice, 71.4);
      personalOfferDisclaimer.style.display = "none";
    } else if (
      (value >= 40000 && insurance === "IM SOUND") ||
      (value > 3000 && insurance === "SINFONIMA")
    ) {
      // Hide pricesection and show personal offer disclaimer
      priceSection.style.display = "none";
      coverageSection.style.display = "none";
      personalOfferDisclaimer.style.display = "block";
    }

    let obfuscatedCode = obfuscateString(enteredCode.toLowerCase());
    // If the discount code is correct
    if (obfuscatedCode === code && insurance === "IM SOUND") {
      document.querySelector("input[value='Jaehrlich']").checked = true;
      updateCustomRadioAppearence();
      intervalButtons.forEach((button) => (button.disabled = true));
      interval = "Jährlich";
      discountPrice = value * 0.016065;
      // Set minimum price
      discountPrice < 23.8 && (discountPrice = 23.8);
      discountPriceElement.innerHTML = formatToGerman(discountPrice) + " €";
      discountPriceElement.style.display = "block";
      // Set price in HTML
      priceElement.innerHTML = formatToGerman(calculatedPrice) + " €";
      priceElement.style.textDecoration = "line-through";
      priceElement.style.opacity = "0.5";
    } else {
      intervalButtons.forEach((button) => (button.disabled = false));
      priceElement.style.textDecoration = "none";
      priceElement.style.opacity = "1";
      discountPriceElement.style.display = "none";
      discountPrice = null;
    }

    // Divide to monlthy price for montly payment and add 5%
    if (interval === "Monatlich" && !intervalButtons[0].disabled) {
      calculatedPrice = (calculatedPrice / 12) * 1.05;
    }

    // Round to 2 decimal points
    calculatedPrice = Math.round(calculatedPrice * 100) / 100;

    // Function to format number to german
    function formatToGerman(number) {
      return number.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    // Function obfuscate code
    function obfuscateString(inputString) {
      let obfuscatedString = "";
      for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);
        obfuscatedString += String.fromCharCode(charCode + 1);
      }
      return obfuscatedString;
    }

    // Set price in HTML
    priceElement.innerHTML = formatToGerman(calculatedPrice) + " €";

    // Full online process possible
    const onlineflowItems = document.querySelectorAll("[data-flow='online']");
    const requestflowItems = document.querySelectorAll("[data-flow='request']");
    const flowInput = document.querySelector("input[name='flow']");
    let beitragInput = document.querySelector("input[name='Beitrag']");
    // Get the form element
    const formElement = document.querySelector("form");

    // Show elements and hide others
    if (value < 20000 && insurance === "IM SOUND") {
      onlineflowItems.forEach((item) => (item.style.display = "block"));
      requestflowItems.forEach((item) => (item.style.display = "none"));
      console.log("full online");

      // Set to online flow
      function createFlowInput() {
        if (flowInput) return;
        // Create the input element
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("name", "flow");
        inputElement.setAttribute("value", "online");
        inputElement.classList.add("hide");

        // Append the input element to the form
        formElement.appendChild(inputElement);
      }
      createFlowInput();
      let finalPrice = discountPrice ? discountPrice : calculatedPrice;

      function createBeitragInput() {
        if (beitragInput) return;
        // Create the input element
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("name", "Beitrag");
        inputElement.setAttribute("value", formatToGerman(finalPrice) + " €");
        inputElement.classList.add("hide");

        // Append the input element to the form
        formElement.appendChild(inputElement);
        beitragInput = document.querySelector("input[name='Beitrag']");
      }
      createBeitragInput();
      beitragInput.setAttribute("value", formatToGerman(finalPrice) + " €");

      if (value > 10000) {
        listDisclaimerElement.style.display = "block";
        nextDisclaimerElement.style.display = "none";
      } else {
        listDisclaimerElement.style.display = "none";
        nextDisclaimerElement.style.display = "block";
      }
    } else {
      flowInput && flowInput.remove();
      beitragInput && beitragInput.remove();
      // Hide all elements exclusive to full online funnel
      requestflowItems.forEach((item) => (item.style.display = "block"));
      onlineflowItems.forEach((item) => (item.style.display = "none"));
      listDisclaimerElement.style.display = "none";
      nextDisclaimerElement.style.display = "none";
      // proberaumDetailsElement.style.display = "none";
    }

    //End of full online Process
  }

  // Get all custom radio buttons
  let customRadioButton = document.querySelectorAll(".w-radio-input");

  function updateCustomRadioAppearence() {
    // Update the checked ones with webflow classes
    customRadioButton.forEach((el) =>
      el.nextSibling.checked == true
        ? el.classList.add("w--redirected-checked")
        : el.classList.remove("w--redirected-checked")
    );
  }
  updateCustomRadioAppearence();

  // Run calculator once to show price in case data was loaded from localStorage
  calculatePrice();
}
document.addEventListener("DOMContentLoaded", initCalculator);
