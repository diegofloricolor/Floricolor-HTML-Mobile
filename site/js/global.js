// Fixa a barra do Header quando rola a página para baixo
var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("includedContent-header").style.top = "0px";
  } else {
    document.getElementById("includedContent-header").style.top = "-200px";
  }

  prevScrollpos = currentScrollPos;
}

// Função para incluir os módulos nas páginas
$(document).ready(function () {
  // Função para incluir os módulos
  function includeModules() {
    $.ajax({
      url: "/site/html/modules/modules.json", // Caminho para o arquivo JSON
      async: false,
      dataType: "json",
      success: function (data) {
        data.modules.forEach(module => {
          $("#" + module.id).load(module.file);
        });
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.error(xhr.status);
        console.error(thrownError);
      }
    });
  }

  // Chama a função para incluir os módulos
  includeModules();
});

// Função para troca de idiomas nas páginas
var language = [];
var arrLanguageFolder = [];

function getLanguage(arrLanguageFolder) {
  localStorage.getItem("language") == null ? setLanguage("en") : false;

  $(".lng").each(function () {
    folder = $(this).data("folder");

    if (arrLanguageFolder !== undefined && !arrLanguageFolder.includes(folder))
      arrLanguageFolder.push(folder);
  });

  arrLanguageFolder.forEach((folder) => {
    if (arrLanguageFolder !== undefined && !arrLanguageFolder.includes(folder))
      arrLanguageFolder.push(folder);

    $.ajax({
      // Colocar o caminho do folder no data-folder do elemento
      url:
        "/language/" + folder + "/" + localStorage.getItem("language") + ".json",
      dataType: "json",
      async: false,
      dataType: "json",
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      },
      success: function (lang) {
        language[folder] = lang;
      },
    });
  });
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  getLanguage(arrLanguageFolder);
  refreshLanguage();
}

function refreshLanguage() {
  $(".lng_html").each(function () {
    folder = $(this).data("folder");
    tag = $(this).data("tag");

    $(this).html(language[folder][tag]);
  });

  $(".lng_src").each(function () {
    folder = $(this).data("folder");
    tag = $(this).data("tag");

    $(this).attr("src", language[folder][tag]);
  });
}

// Troca o idioma das imagens do menu
function changeLanguage(lang) {
  setLanguage(lang); // Define o idioma selecionado
  // Carrega o arquivo JSON das imagens do menu para o idioma selecionado
  $.ajax({
    url: "/site/images/01_menu/" + lang + ".json", // Substitua pelo caminho correto
    dataType: "json",
    async: false,
    success: function (menuImages) {
      // Atualiza as imagens do menu conforme os dados do JSON
      updateMenuImages(menuImages);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.error(xhr.status);
      console.error(thrownError);
    }
  });
}

// Atualiza as imagens do menu
function updateMenuImages(menuImages) {
  const menuItems = document.querySelectorAll('.menuItem');
  const imageElement = document.querySelector('.imgMenu');

  menuItems.forEach(item => {
    item.addEventListener('mouseover', function () {
      const menuItemClass = this.classList[1];

      const menuItemInfo = menuImages.menuItems.find(item => item.class === menuItemClass);

      if (menuItemInfo) {
        imageElement.src = menuItemInfo.imageURL;
      }
    });
  });
}

$(document).ready(function () {
  getLanguage(arrLanguageFolder);
  refreshLanguage();
});
