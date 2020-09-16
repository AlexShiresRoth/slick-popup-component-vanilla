console.clear();
(() => {
  const selectors = {
    pBar: document.querySelector(".progress-bar"),
    fill: document.querySelectorAll(".fill"),
    regLbls: document.querySelectorAll(".register"),
    offrLbls: document.querySelectorAll(".offers"),
    shipLbls: document.querySelectorAll(".shipping"),
  };

  let fillAmt = 0;
  setInterval(() => {
    selectors.fill.forEach(
      (fill) => (fillAmt = fill.getBoundingClientRect().width)
    );
    console.log(selectors.fill);

    if (fillAmt > 0) {
      selectors.regLbls.forEach((lbl) => {
        lbl.style.color = "var(--brand-main)";
      });
    }
    if (fillAmt >= 50) {
      selectors.offrLbls.forEach((lbl) => {
        lbl.style.color = "var(--brand-main)";
      });
    }
    if (fillAmt >= 90) {
      selectors.shipLbls.forEach((lbl) => {
        lbl.style.color = "var(--brand-main)";
      });
    }
    console.log(selectors.offrLbls);
  }, 1000);
})();
