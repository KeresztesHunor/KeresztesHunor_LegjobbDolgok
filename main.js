window.addEventListener("load", init)

const objList = [
    {
        nev: "Zoé",
        mondat: "Befejeztem tegnap a szobám kifestését!",
    },
    {
        nev: "Kornél",
        mondat: "Finom volt a gyros ebéd.",
    },
    {
        nev: "Bónó",
        mondat: "Vettem egy új síkesztyűt."
    },
    {
        nev: "Leila",
        mondat: "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    },
    {
        nev: "Bence",
        mondat: "Hálát adtam az úrnak, hogy lementem edzeni."
    },
    {
        nev: "Hunor",
        mondat: "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
    },
    {
        nev: "Ádám",
        mondat: "Kirúgták a gyökér főnökömet."
    },
    {
        nev: "Dominik",
        mondat: "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
    },
    {
        nev: "Lél",
        mondat: "Finom volt a vacsi."
    },
    {
        nev: "Bónó",
        mondat: "Vettem egy új síkesztyűt."
    },
    {
        nev: "Laci",
        mondat: "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
    },
    {
        nev: "Ricsi",
        mondat: "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
    },
    {
        nev: "Dominik",
        mondat: "Az egyik lakótársam hozott nekem sütit."
    },
    {
        nev: "Martin",
        mondat: "Ember, most jöttem a templomból"
    },
    {
        nev: "Valentin",
        mondat: "Vezethettem a volt munkahelyem új céges autóját.",
    }
];

function init()
{
    const szuloElem = document.querySelector("body > article");
    kiir(osszeallit(objList), szuloElem);
}

function osszeallit(lista)
{
    let txt = "";
    for (let i = 0; i < lista.length; i++)
    {
        txt += containeresKiiras(
            containeresKiiras(lista[i].nev, "h3") +
            containeresKiiras(lista[i].mondat, "p"),
            "div"
        );
    }
    return txt;
}

function kiir(tartalom, szuloElem)
{
    szuloElem.innerHTML += tartalom;
}

function containeresKiiras(tartalom, containerTipus)
{
    return `<${containerTipus}>${tartalom}</${containerTipus}>`;
}