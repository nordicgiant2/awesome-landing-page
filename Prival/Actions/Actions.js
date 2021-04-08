const Nav = document.querySelector(".Nav");

Nav.addEventListener("click", function(e) {
  event.preventDefault();
  if (e.target && e.target.nodeName === "A") {
    if (e.target.innerText === "Home") {
      document.querySelector(".Hero").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (e.target.innerText === "Works") {
      document.querySelector(".Grid").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (e.target.innerText === "About") {
      document.querySelector(".About").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (e.target.innerText === "Contact") {
      document.querySelector(".CTA").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  }
});
