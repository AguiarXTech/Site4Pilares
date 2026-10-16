// 4 Pilares — interações da página inicial
(function () {
  "use strict";

  // ---------- Menu mobile ----------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Fecha ao clicar em um link do menu
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    // Fecha com Esc e devolve o foco ao botão
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Garante estado limpo ao passar para o layout desktop
    window.matchMedia("(min-width: 960px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  // ---------- Ano no rodapé ----------
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // ---------- Validação simples do formulário ----------
  // Sem backend ainda: valida no cliente e exibe feedback.
  var form = document.querySelector(".form");
  if (form) {
    var status = form.querySelector(".form__status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var firstInvalid = null;

      Array.prototype.forEach.call(form.elements, function (field) {
        if (!field.willValidate) return;
        var valid = field.checkValidity() && field.value.trim() !== "";
        field.setAttribute("aria-invalid", String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        status.className = "form__status is-error";
        status.textContent = "Preencha todos os campos corretamente.";
        firstInvalid.focus();
        return;
      }

      status.className = "form__status is-success";
      status.textContent = "Mensagem enviada! Em breve entraremos em contato.";
      form.reset();
    });
  }
})();
