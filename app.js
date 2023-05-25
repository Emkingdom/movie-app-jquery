$(function () {
  $("form button").on("click", function (e) {
    e.preventDefault();
    const MOVIE_DESCRIPTION = `Movie tilte: ${$(
      "#movie-title"
    ).val()} Movie rate : ${$("#movie-rate").val()}/10`;
    const DELTE_ME = " DELETE";
    let ul = $("ul");
    const li = $("<li>", {
      text: MOVIE_DESCRIPTION,
    });

    li.append($("<span>", { text: DELTE_ME }));
    ul.append(li);
  });

  $("ul").on("click", "li span", function () {
    $(this).parent().remove();
  });
});
