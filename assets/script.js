(function () {
  fetch("data.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var commandant = data.commandant || {};
      var deputy = data.deputy || {};
      document.getElementById("commandant-name").textContent = commandant.name || "Pending name";
      document.getElementById("commandant-summary").textContent = commandant.summary || "Pending summary";
      document.getElementById("deputy-name").textContent = deputy.name || "Pending name";
      document.getElementById("deputy-summary").textContent = deputy.summary || "Pending summary";
    })
    .catch(function () {
      // Keep default placeholders on load failure.
    });
})();
