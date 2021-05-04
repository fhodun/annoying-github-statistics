(function () {
  let stupid_statistics = document.querySelector(
    ".js-yearly-contributions"
  );
  console.log(stupid_statistics);
  if (!stupid_statistics) {
    throw new Error("statistics not detected!");
  }
  stupid_statistics.style.display = "none";
})();

