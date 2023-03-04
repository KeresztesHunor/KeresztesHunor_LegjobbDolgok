window.addEventListener("load", init)

const objList = [
    {
        nev: "Zoé",
        mondat: "Befejeztem tegnap a szobám kifestését!",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Kornél",
        mondat: "Finom volt a gyros ebéd.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Bónó",
        mondat: "Vettem egy új síkesztyűt.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Leila",
        mondat: "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Bence",
        mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Hunor",
        mondat: "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
        kor: 23,
        teso: 2,
        szemszin: "zöld"
    },
    {
        nev: "Ádám",
        mondat: "Kirúgták a gyökér főnökömet.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Dominik",
        mondat: "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Lél",
        mondat: "Finom volt a vacsi.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Bónó",
        mondat: "Vettem egy új síkesztyűt.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Laci",
        mondat: "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Ricsi",
        mondat: "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Dominik",
        mondat: "Az egyik lakótársam hozott nekem sütit.",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Martin",
        mondat: "Ember, most jöttem a templomból",
        kor: 21,
        teso: 0,
        szemszin: "zöld"
    },
    {
        nev: "Valentin",
        mondat: "Vezethettem a volt munkahelyem új céges autóját.",
        kor: 21,
        teso: 31,
        szemszin: "zöld"
    }
];

function init()
{
    const szuloElem = document.querySelector("body > article");
    letezoTagekKozeIr(szuloElem, () =>
    {
        let txt = "";
        for (let i = 0; i < objList.length; i++)
        {
            txt += ujTagekKozeIr("div", () => ujTagekKozeIr("h3", () => objList[i].nev) + ujTagekKozeIr("p", () => objList[i].mondat));
        }
        return txt;
    });
    const tablazat = document.querySelector("#tablazat");
    letezoTagekKozeIr(tablazat, () => ujTagekKozeIr("table", () =>
    {
        let txt = "";
        txt += ujTagekKozeIr("tr", () =>
        {
            let txt = "";
            for (const key in objList[0])
            {
                txt += ujTagekKozeIr("th", () =>
                {
                    switch (key)
                    {
                        case "nev":
                            return "Név";
                        case "mondat":
                            return "Mondat";
                        case "kor":
                            return "Kor";
                        case "teso":
                            return "Tesó";
                        case "szemszin":
                            return "Szem szín";
                        default:
                            return "Hiba! Nincs ilyen kulcs.";
                    }
                });
            }
            return txt;
        });
        for (let i = 0; i < objList.length; i++)
        {
            txt += ujTagekKozeIr("tr", () =>
            {
                let txt = "";
                for (const key in objList[i])
                {
                    txt += ujTagekKozeIr("td", () => objList[i][key]);
                }
                return txt;
            });
        }
        return txt;
    }));
}

function ujTagekKozeIr(tag, tartalom = () => "")
{
    let txt = `<${tag}>`;
    txt += tartalom();
    return txt + `</${tag}>`;
}

function letezoTagekKozeIr(szuloElem, tartalom = () => "")
{
    szuloElem.innerHTML += tartalom();
}