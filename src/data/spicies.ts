import { allCategories } from "./categories";

export type PicanteCategory = typeof allCategories[number]['id'];

interface Picante {
    nickname: string;
    name: string;
    year: number;
    channel: string;
    image: string;
}

export const picantes: Record<PicanteCategory, Picante[]> = {
    "streamers-of-the-year": [
        {
            nickname:"Frankkaster",
            name:"Francisco Postiglione",
            year:2018,
            channel:"https://kick.com/frankkaster",
            image:"https://www.famousbirthdays.com/headshots/frankkaster-1.jpg",
        },
        {
            nickname:"Grafo",
            name:"Nicolás Graffigna",
            year:2019,
            channel:"https://kick.com/grafo",
            image:"https://pbs.twimg.com/media/E6XpDw1X0AgrWzO.jpg:large",
        },
        {
            nickname:"Pimpeano",
            name:"Galo Blasco",
            year:2020,
            channel:"https://kick.com/pimpeano",
            image:"https://yt3.googleusercontent.com/ay_j629cjH9ClIv_ftFFnXbZzJthKlmNtENpz2x4X3SatIiyCguWkTD3YlQS-Q7wOrRmI0RI9g=s900-c-k-c0x00ffffff-no-rj",
        },
        {
            nickname:"Momo",
            name:"Gerónimo Benavides",
            year:2021,
            channel:"https://www.twitch.tv/momoladinastia",
            image:"https://www.mdzol.com/u/fotografias/m/2023/6/22/f850x638-1430770_1508259_5740.png",
        },
        {
            nickname:"Spreen",
            name:"Ivan Buhajeruk",
            year:2022,
            channel:"https://kick.com/spreen",
            image:"https://resizer.glanacion.com/resizer/v2/spreen-el-santafesino-de-22-anos-que-crea-XAZGRZAE2BD6PAUGYVQKKI7MMU.JPG?auth=8d5dd24bfd296b206013bbff5921d330fb2cef695ec7f3414de5b2dba9ab8f55&width=1280&height=854&quality=70&smart=true",
        },
        {
            nickname:"DavooXeneize",
            name:"David Quint",
            year:2023,
            channel:"https://kick.com/davooxeneize",
            image:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/R2KIOQZLKJHRLND3F3A345UZDQ.jpg",
        }
    ],
    "promising-streamers": [
        {
            nickname:"Mili",
            name:"Milagros Mansilla",
            year:2019,
            channel:"https://www.twitch.tv/milimansiilla",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbj3P3jEMksIEqxpVJQhNIjD44VbSUrG4eHA&s",
        },
        {
            nickname:"Francobertello74",
            name:"Franco Bertello",
            year:2020,
            channel:"https://www.twitch.tv/francobertello74",
            image:"https://i.scdn.co/image/ab6761610000e5eb472a7d8001d0ddec06676527",
        },
        {
            nickname:"Baldu",
            name:"Matías Balduzzi",
            year:2021,
            channel:"https://kick.com/baldu",
            image:"https://steamuserimages-a.akamaihd.net/ugc/2055373724699278732/6AFED9804745CC35B4646F2CEEBCCB7D11ACEDE1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        },
        {
            nickname:"LaAgusneta",
            name:"Agustín Rodríguez",
            year:2022,
            channel:"https://kick.com/agusneta",
            image:"https://www.famousbirthdays.com/headshots/la-agusneta-1.jpg",
        },
        {
            nickname:"Chinassj",
            name:"Valentina Solorza",
            year:2023,
            channel:"https://kick.com/chinassj",
            image:"https://pbs.twimg.com/profile_images/1861128143567749120/vL8NdvsQ_400x400.jpg",
        },
    ],
    "streamers-revelation": [
        {
            nickname:"Zeko",
            name:"Federico Cristalino",
            year:2018,
            channel:"https://kick.com/zeko",
            image:"https://yt3.googleusercontent.com/EegmVyJf-oQ56ylDFG_aTD5pxmC-cyJPun3mQPlO9Pmem4NlTqemf57Pxmo05PNs9mBFB1En8A=s900-c-k-c0x00ffffff-no-rj",
        },
        {
            nickname:"Nano",
            name:"Mariano Nicolas",
            year:2019,
            channel:"https://www.twitch.tv/nanocs1",
            image:"https://www.famousbirthdays.com/faces/nanocs1-image.jpg",
        },
        {
            nickname:"Brunenger",
            name:"Bruno Kruszyn",
            year:2020,
            channel:"https://kick.com/brunenger",
            image:"https://www.famousbirthdays.com/headshots/brunenger-12.jpg",
        },
        {
            nickname:"Spreen",
            name:"Ivan Buhajeruk",
            year:2021,
            channel:"https://kick.com/spreen",
            image:"https://resizer.glanacion.com/resizer/v2/spreen-el-santafesino-de-22-anos-que-crea-XAZGRZAE2BD6PAUGYVQKKI7MMU.JPG?auth=8d5dd24bfd296b206013bbff5921d330fb2cef695ec7f3414de5b2dba9ab8f55&width=1280&height=854&quality=70&smart=true",
        },
        {
            nickname:"DavooXeneize",
            name:"David Quint",
            year:2022,
            channel:"https://kick.com/davooxeneize",
            image:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/R2KIOQZLKJHRLND3F3A345UZDQ.jpg",
        },
        {
            nickname:"Mazza",
            name:"Tomas Mazza",
            year:2023,
            channel:"https://kick.com/mazzatomas",
            image:"https://pbs.twimg.com/card_img/1868646736161353728/7nJgzXvY?format=jpg&name=360x360",
        },
    ],
    "trajectory": [
        {
            nickname:"Hastad",
            name:"Hernán Klingler",
            year:2018,
            channel:"https://www.twitch.tv/hastad",
            image:"https://www.famousbirthdays.com/faces/klingler-hernan-image.jpg",
        },
        {
            nickname:"Duende",
            name:"Pablo Ballon",
            year:2019,
            channel:"https://kick.com/duendepablo",
            image:"https://api.setupsgamers.com/images/streamers/duendepablo.jpg",
        },
        {
            nickname:"Darkoz",
            name:"Lucas Ledesma",
            year:2020,
            channel:"https://kick.com/darkoztv",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtE6avaiq5jajPRK4jDC6L6S7FtSY2xLe_zw&s",
        },
        {
            nickname:"Unicornio",
            name:"German Usinger",
            year:2021,
            channel:"https://kick.com/unicornio",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIfaPWH9oQj75cGyVhY7iEShvQMY-VS2bHw&s",
        },
        {
            nickname:"Zeko",
            name:"Federico Cristalino",
            year:2022,
            channel:"https://kick.com/zeko",
            image:"https://yt3.googleusercontent.com/EegmVyJf-oQ56ylDFG_aTD5pxmC-cyJPun3mQPlO9Pmem4NlTqemf57Pxmo05PNs9mBFB1En8A=s900-c-k-c0x00ffffff-no-rj",
        },
        {
            nickname:"Luchi",
            name:"Lucia Quinteros",
            year:2023,
            channel:"https://www.twitch.tv/luchi",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-b9vg6TPpDnsjUG072Vktko_AMwDR37uYQ&s",
        }
    ],
    "best-irl-streamer": [
        {
            nickname:"Frankkaster",
            name:"Francisco Postiglione",
            year:2018,
            channel:"https://kick.com/frankkaster",
            image:"https://www.famousbirthdays.com/headshots/frankkaster-1.jpg",
        },
        {
            nickname:"Goncho",
            name:"Gonzalo Banzas",
            year:2019,
            channel:"https://kick.com/goncho",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00Ix18nQyOi62FWsb94QHFgCi5cPG4tG78w&s",
        },
        {
            nickname:"Brunenger",
            name:"Bruno Kruszyn",
            year:2020,
            channel:"https://kick.com/brunenger",
            image:"https://www.famousbirthdays.com/headshots/brunenger-12.jpg",
        },
        {
            nickname:"Luquitas",
            name:"Lucas Rodríguez",
            year:2021,
            channel:"https://kick.com/luquitarodriguez",
            image:"https://www.famousbirthdays.com/faces/rodriguez-luquitas-image.jpg",
        },
        {
            nickname:"Carrera",
            name:"Rodrigo Carrera",
            year:2022,
            channel:"https://kick.com/carre",
            image:"https://i.pinimg.com/236x/46/39/a3/4639a322dca3edd674c6e16a63f740de.jpg",
        },
        {
            nickname:"Santutu",
            name:"Santiago Rodríguez",
            year:2023,
            channel:"https://kick.com/Santutu",
            image:"https://multimusic.com.ar/wp-content/uploads/2024/07/contratar-a-santutu-1.jpg",
        },
    ]
}