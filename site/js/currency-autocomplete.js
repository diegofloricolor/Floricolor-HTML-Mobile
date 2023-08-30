$(function () {
  var produtos = [

    // PRODUTOS
    { value: "Accordion Book", data: "accordion-book/" },
    { value: "Accordion Folio", data: "accordion-folio/" },
    { value: "Acrylic Collection", data: "/site/html/pages/products/01_collections/acrylic_collection.html" },
    
    { value: "Album de Pais", data: "album-pais/" },
    { value: "Parent Albums", data: "album-pais/" },
    { value: "Album de Padre", data: "album-pais/" },
    { value: "Album des Parents", data: "album-pais/" },

    { value: "Album Holder", data: "album-holder/" },    

    { value: "Alma Collection", data: "alma-collection/" },
    { value: "Antique Collection", data: "antique-collection/" },
    { value: "Art Book", data: "art-book/" },
    { value: "Art Deco Collection", data: "art-deco-collection/" },
    { value: "Auctor Collection", data: "auctor-collection/" },
    { value: "Baby & Kids Collection", data: "baby-kids-collection/" },
    { value: "Babyfolio", data: "babyfolio/" },
    
    { value: "Baralho de Cartas", data: "baralho-de-cartas/" },
    { value: "Deck of Cards", data: "baralho-de-cartas/" },
    { value: "Baraja de Cartas", data: "baralho-de-cartas/" },
    { value: "Jeu de Cartes", data: "baralho-de-cartas/" },

    { value: "Basic Collection", data: "basic-collection/" },
    { value: "Black Matte Collection", data: "black-matte-collection/" },
    { value: "Blossom Collection", data: "blossom-collection/" },
    { value: "Boite de Luxe", data: "boite-de-luxe/" },
    { value: "Bold Collection 150", data: "bold-collection-150/" },
    { value: "Bold Collection 25", data: "bold-collection-25/" },
    
    { value: "Botella USB Drive", data: "botella-usb-drive/" },
    { value: "Botella Clé USB", data: "botella-usb-drive/" },

    { value: "Boudoir Collection", data: "boudoir-collection/" },
    { value: "Boudoir Portfolio", data: "boudoir-portfolio/" },
    { value: "Boutique Book", data: "boutique-book/" },
    { value: "Boutique Portfolio", data: "boutique-portfolio/" },
    { value: "Boutique Portfolio Prints Holder", data: "boutique-portfolio-prints-holder/" },
    { value: "Boutique Prints", data: "boutique-prints/" },
    { value: "Cadee Box", data: "cadee-box/" },
    
    { value: "Calendário", data: "calendario/" },
    { value: "Calendar", data: "calendario/" },
    { value: "Calendario", data: "calendario/" },
    { value: "Calendrier", data: "calendario/" },   

    { value: "Contacto", data: "contacto/" },
    { value: "Contact", data: "contacto/" },
    { value: "Contacter", data: "contacto/" },

    { value: "Customized Collection", data: "customized-collection/" },

    { value: "Designs de Capa", data: "contacto/" },
    { value: "Cover Designs", data: "contacto/" },
    { value: "Designs de Portada", data: "contacto/" },
    { value: "Designs de Couvertures", data: "contacto/" },
    
    { value: "Desk Block", data: "desk-block/" },
    { value: "Dharka Collection", data: "dharka-collection/" },
    { value: "Duo Collection", data: "duo-collection/" },
    { value: "Eco Box", data: "eco-box/" },
    { value: "Eco Collection", data: "eco-collection/" },
    { value: "Eco Collection Kids", data: "eco-collection-kids/" },
    { value: "Eco Poster", data: "eco-poster/" },
    { value: "Eco Prints", data: "eco-prints/" },
    
    { value: "Envelopes", data: "envelopes/" },
    { value: "Sobres", data: "envelopes/" },
    { value: "Enveloppes", data: "envelopes/" },
    
    { value: "Express Prints", data: "express-print/" },
    { value: "Fine Prints", data: "fine-prints/" },
    { value: "Floribox", data: "floribox/" },
    { value: "Flyers", data: "flyers/" },
    { value: "Folio", data: "folio/" },
    { value: "Fusion Book", data: "fusion-book/" },
    { value: "Gift Book", data: "gift-book/" },
    { value: "Gift Note", data: "gift-note/" },

    { value: "Gilding", data: "gilding/" },

    { value: "Guardas Personalizadas", data: "guardas-personalizadas/" },
    { value: "Customized Fly Pages", data: "guardas-personalizadas/" },    
    { value: "Garde Personnalisés", data: "guardas-personalizadas/" },

    { value: "Guest Box", data: "guest-box/" },
    { value: "HD Metal Print", data: "hdmetalprint/" },
    { value: "Japanese Collection", data: "japanese-collection/" },
    { value: "Jenn Bruno Smith Collection", data: "jenn-bruno-smith-collection/" },
    { value: "Kant Collection", data: "kant-collection/" },
    { value: "Kraft Book", data: "kraft-book/" },
    { value: "Kuno Box Mat", data: "kuno-box-mat/" },
    { value: "Kuno Wood Box", data: "kuno-wood-box/" },
    { value: "Leather Canvas", data: "leather-canvas/" },
    { value: "Libretto", data: "libretto/" },
    { value: "Livre Plat", data: "livre-plat/" },

    { value: "Marcador de Livros", data: "marcador-de-livros/" },
    { value: "Bookmarker", data: "marcador-de-livros/" },
    { value: "Marcapáginas", data: "marcador-de-livros/" },
    { value: "Marque-page", data: "marcador-de-livros/" },

    { value: "Mask Wallet", data: "mask-wallet/" },
    { value: "Mensam Frame", data: "mensam-frame/" },
    { value: "Mini Album Combo", data: "mini-album-combo/" },
    { value: "Mini Libro", data: "mini-libro/" },
    { value: "Minimalis Collection", data: "minimalis-collection/" },
    
    { value: "Molduras", data: "molduras/" },
    { value: "Frames", data: "molduras/" },    
    { value: "Cadres Photos", data: "molduras/" },

    { value: "Mostruário de Materiais", data: "mostruario-materiais/" },
    { value: "Sample Materials", data: "mostruario-materiais/" },
    { value: "Muestrario de materiales", data: "mostruario-materiais/" },
    { value: "Échantillons de matériaux", data: "mostruario-materiais/" },

    { value: "Mostruário de Papéis", data: "mostruario-de-papeis/" },
    { value: "Sample Papers", data: "mostruario-de-papeis/" },
    { value: "Vitrina de papel", data: "mostruario-de-papeis/" },
    { value: "Vitrine du Papier", data: "mostruario-de-papeis/" },
    
    { value: "Objet d'Art", data: "objet-dart/" },
    { value: "Parma Collection", data: "parma-collection/" },
    { value: "Passepartout", data: "passepartout/" },
    { value: "Photo Folder", data: "photo-folder/" },
    { value: "Photobook", data: "photobook/" },
    { value: "Photobox", data: "photobox/" },
    { value: "Pocket Book", data: "pocket-book/" },
    { value: "Portfolio Mat", data: "portfolio-mat/" },
    { value: "Premium Wood Box", data: "premium-wood-box/" },
    { value: "Prints Wood Box", data: "prints-wood-box/" },
    { value: "Promo Pocket Book", data: "promo-pocket-book/" },
    { value: "Puer Collection", data: "puer-collection/" },
    
    { value: "Recordatórios", data: "recordatorios/" },
    { value: "Photo Cards", data: "recordatorios/" },    
    { value: "Faire-Part", data: "recordatorios/" },

    { value: "Retro Collection", data: "retro-collection/" },
    { value: "Retro Dibond Prints", data: "retro-dibond-prints/" },
    { value: "Retro PVC Prints", data: "retro-pvc-prints/" },
    { value: "Retro Wood Prints", data: "retro-wood-prints/" },

    { value: "Revistas", data: "revistas/" },
    { value: "Magazines", data: "revistas/" },

    { value: "Round Box for Books", data: "round-box-for-books/" },
    { value: "Round Box for Prints", data: "round-box-for-prints/" },

    { value: "Sacos de Pano", data: "sacos-de-pano/" },
    { value: "Cloth Sleeve", data: "sacos-de-pano/" },
    { value: "Bolsa de Tela", data: "sacos-de-pano/" },
    { value: "Sac en Tissu", data: "sacos-de-pano/" },

    { value: "Show Box", data: "show-box/" },
    { value: "Smart Book", data: "smart-book/" },
    { value: "Smart Box", data: "smart-box/" },
    { value: "Smart Box for Prints", data: "smart-box-for-prints/" },
    { value: "Stickers", data: "stickers/" },
    { value: "Story Collection", data: "story-collection/" },
    { value: "Studio Collection", data: "studio-collection/" },

    { value: "Telas", data: "telas/" },
    { value: "Canvas", data: "telas/" },
    { value: "Toiles", data: "telas/" },
      
    { value: "The Concept Collection", data: "the-concept-collection/" },
    { value: "Touch Collection", data: "touch-collection/" },
    { value: "Vintage Collection", data: "vintage-collection/" },
    { value: "Volluto Collection", data: "volluto-collection/" },
    { value: "Wood Accordion", data: "accordion-folio-wood/" },
    { value: "Wood Block", data: "wood-block/" },
    { value: "Wood Box", data: "wood-box/" },
    { value: "Wood Collage", data: "wood-collage/" },
    { value: "Wood Collection", data: "wood-collection/" },
    { value: "Wooden VISA USB Drive", data: "wooden-visa-usb-drive/" },


    // OUTRAS PÁGINAS
    
    // AJUDA
    // { value: "Ajuda", data: "ajuda/" },
    // { value: "Help", data: "ajuda/" },
    // { value: "Ayuda", data: "ajuda/" },
    // { value: "Aider", data: "ajuda/" },

    // CATEGORIAS
    // { value: "Albuns", data: "albuns/" },
    // { value: "Albums", data: "albuns/" },

    // { value: "Coleções", data: "colecoes/" },
    // { value: "Collections", data: "colecoes/" },
    // { value: "Colecciones", data: "colecoes/" },

    // { value: "Decoração", data: "decoracao/" },
    // { value: "Decoration", data: "decoracao/" },
    // { value: "Decoración", data: "decoracao/" },
    // { value: "Décoration", data: "decoracao/" },

    // { value: "Lembranças", data: "lembrancas/" },
    // { value: "Souvenirs", data: "lembrancas/" },
    // { value: "Recuerdos", data: "lembrancas/" },

    // { value: "Livros", data: "livros/" },
    // { value: "Books", data: "livros/" },
    // { value: "Libros", data: "livros/" },
    // { value: "Livres", data: "livros/" },

    // { value: "Produtos", data: "produtos/" },
    // { value: "Products", data: "produtos/" },
    // { value: "Productos", data: "produtos/" },
    // { value: "Produits", data: "produtos/" },    

    // EMPRESA
    // { value: "Empresa", data: "empresa/" },
    // { value: "Company", data: "empresa/" },
    // { value: "Entreprise", data: "empresa/" },
    
    // POLÍTICAS
    // { value: "Política de Mostruário", data: "politica-de-mostruario/" },
    // { value: "Sample Policy", data: "politica-de-mostruario/" },
    // { value: "Política de Muestrario", data: "politica-de-mostruario/" },
    // { value: "Politique des Vitrines", data: "politica-de-mostruario/" },

    // { value: "Política de Privacidade", data: "politica-de-privacidade/" },
    // { value: "Privacy Policy", data: "politica-de-privacidade/" },
    // { value: "Política de Privacidad", data: "politica-de-privacidade/" },
    // { value: "Politique de Confidentialité", data: "politica-de-privacidade/" },

    // { value: "Termos e Condições", data: "termos-condicoes/" },
    // { value: "Terms and Conditions", data: "termos-condicoes/" },
    // { value: "Términos y Condiciones", data: "termos-condicoes/" },
    // { value: "Termes et Conditions", data: "termos-condicoes/" },

  ];

  // $("#autocomplete").autocomplete({
  //   lookup: produtos,
  //   onSelect: function (suggestion) {     
  //     // Pega a URL atual
  //     currentURL = window.location.href;

  //     // Divide a URL em partes e coloca em um array
  //     arrCurrentURL = currentURL.split("/");

  //     // Língua padrão do site - PT
  //     currentLanguage = "";

  //     switch(arrCurrentURL[3]) {
  //       case 'es':
  //         currentLanguage = "es/";
  //         break;
  //       case 'en':          
  //         currentLanguage = "en/";
  //         break;
  //       case 'fr':
  //         currentLanguage = "fr/";
  //         break;                  
  //     }

  //     window.location.href = window.location.protocol + "//" + window.location.hostname + "/" + currentLanguage + suggestion.data;
  //   },
  // });

  // setup autocomplete function pulling from currencies[] array

  $('#autocomplete').autocomplete({
    lookup: produtos,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
  });

});
