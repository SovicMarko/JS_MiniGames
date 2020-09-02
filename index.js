var json = [
    {
        "naziv": "Selektor Piva",
        "opis": "Pronadjite pravu kombinaciju 4 gajbe piva, ukoliko Tim Lider zakljuci da je pivo pravilno selektovano, mozda dobijete 'free beer' :) ",
        "pravila": "Klikom na jednu od ponudjenih opcija vrsi se izbor kombinacije, zeleni krugovi oznacavaju izbor koji je na mestu, zuti krugovi izbor koji je ispravan ali nije na mestu",
        "adresa": "BeerSelector/start.html",
        "slika": "img/selector.png"
    }, {
        "naziv": "2048",
        "opis": "Spajanjem istih cifara cilj je da se postigne sto veci stepen broja 2. Osnovni cilj je doci do broja 2048, ali tu nije kraj igre",
        "pravila": "Koriscenjem tastera 'w','s','d','a', pomerajte brojeve gore, dole, desno i levo",
        "adresa": "2048/index.html",
        "slika": "img/2048.png"
    }, {
        "naziv": "Šah",
        "opis": "Verzija svima poznate igre, u kojoj nema protivnika, jedini protivnik ste sami sebi. Velemajstori kazu da se šah najbolje uči u borbi sa sobom",
        "pravila": "Klikom na figuru, dobijate mogućnost da se krecete na jednom od mogućih polja prema pravilima šaha, koje detaljno mozete naci na <a href='https://sr.wikipedia.org/wiki/Правила_шаха'>ovoj</a> adresi",
        "adresa": "Chess/index.html",
        "slika": "img/chess.png"
    }, {
        "naziv": "Simon",
        "opis": "Testirajte svoje pamcenje i postignite sto veci broj u duzini niza pogođene kombinacije. Cetiri date boje blinkaju po odredjenom nasumicnom redosledu koji je svaki put sve duzi, na sve brzi nacin u svakom krugu",
        "pravila": "Ponovite datu kombinaciju klikom na boje, pre toga kliknite za početak kruga",
        "adresa": "Simon/index.html",
        "slika": "img/simon.png"
    }, {
        "naziv": "Minoloviac",
        "opis": "Legendarna igrica vašeg detinjstva za koju nikada niste znali funkcioniše",
        "pravila": "Klikom na polje, ukoliko imate srece i nema mine na njemu, dobićete broj mina koje se nalaze u poljima koji ga okružuju",
        "adresa": "MinesWeeper/index.html",
        "slika": "img/mines.png"
    }
]



console.log(json);


var app = document.getElementById('app');
for (let i = 0; i < json.length; i++) {
    app.innerHTML += `<div class="kartica" ><a href="${json[i].adresa}">` +
        `<img src="${json[i].slika}"/></a>` +
        `<h3>${json[i].naziv}</h3>` +
        `<p><i>${json[i].opis}</i></p>` +
        `<p><b>PRAVILA</b> ${json[i].pravila}</p></div>`;
} app.innerHTML += "<div id='clear'></div><hr>";


