(function () {
  var board = document.getElementById("project-board");
  if (!board) return;
  var buttons = board.querySelectorAll("[data-filter]");
  var cards = board.querySelectorAll("[data-tags]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var tag = button.getAttribute("data-filter");
      buttons.forEach(function (item) {
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-tags") || "").split("|");
        card.hidden = tag !== "*" && tags.indexOf(tag) === -1;
      });
    });
  });
})();
