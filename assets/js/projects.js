(function () {
  var board = document.getElementById("project-board");
  if (!board) return;
  var buttons = board.querySelectorAll("[data-filter]");
  var cards = board.querySelectorAll("[data-tags]");

  function apply(tag) {
    buttons.forEach(function (item) {
      item.setAttribute("aria-pressed", item.getAttribute("data-filter") === tag ? "true" : "false");
    });
    cards.forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split("|");
      card.hidden = tag !== "*" && tags.indexOf(tag) === -1;
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var tag = button.getAttribute("data-filter");
      apply(tag);
      var url = new URL(window.location.href);
      if (tag === "*") { url.searchParams.delete("tag"); } else { url.searchParams.set("tag", tag); }
      window.history.replaceState(null, "", url.toString());
    });
  });

  // Allow deep links such as /projects/?tag=AI%20for%20the%20Grid
  var wanted = new URLSearchParams(window.location.search).get("tag");
  if (wanted) {
    var match = Array.prototype.some.call(buttons, function (b) { return b.getAttribute("data-filter") === wanted; });
    if (match) apply(wanted);
  }
})();
