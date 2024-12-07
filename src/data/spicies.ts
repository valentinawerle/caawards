export interface Award {
    year: number;
    streamerOfTheYear: { name: string; alias: string };
    revelation: { name: string; alias: string };
}

export const awards: Award[] = [
    {
        year: 2023,
        streamerOfTheYear: { name: "David Quint", alias: "DavoXeneize" },
        revelation: { name: "Tomás Massa", alias: "mazzatomas" },
    },
    {
        year: 2022,
        streamerOfTheYear: { name: "Iván Buhajeruk", alias: "Spreen" },
        revelation: { name: "David Quint", alias: "DavoXeneize" },
    },
    {
        year: 2021,
        streamerOfTheYear: { name: "Gerónimo Benavides", alias: "Momo" },
        revelation: { name: "Iván Buhajeruk", alias: "Spreen" },
    },
    {
        year: 2020,
        streamerOfTheYear: { name: "Galo Blasco", alias: "Pimpeano" },
        revelation: { name: "Bruno Kruszyn", alias: "Brunenger" },
    },
    {
        year: 2019,
        streamerOfTheYear: { name: "Nicolás Graffigna", alias: "Grafo" },
        revelation: { name: "Mariano Nicolás", alias: "Nano" },
    },
    {
        year: 2018,
        streamerOfTheYear: { name: "Francisco Postiglione", alias: "Frankkaster" },
        revelation: { name: "Federico Cristalino", alias: "Zeko" },
    },
];