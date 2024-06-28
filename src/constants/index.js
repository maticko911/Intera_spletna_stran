import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  avto_krka_logo,
  bigbang_logo,
  dewe_soft_logo,
  kompas_logo,
  mik_logo,
  mladinska_knjiga_logo,
  roto,
  sanofarm_logo,
  sip_logo,
  zarja_logo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  avto_krka_logo,
  bigbang_logo,
  dewe_soft_logo,
  kompas_logo,
  mik_logo,
  mladinska_knjiga_logo,
  roto,
  sanofarm_logo,
  sip_logo,
  zarja_logo,
];

export const brainwaveServices = [
  "Boljša realizacija ponudb",
  "Vztopite v stik z vašimi strankami hitreje in preprosteje",
  "Brezhibna integracija",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Prepoznavanje glasa",
    text: "Omogočite CRM/HRM sistemu razumevanje in odzivanje na glasovne ukaze, kar uporabnikom omogoča lažjo uporabo mobilne aplikacije.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Igrifikacija",
    text: "Dodajte elemente, podobne igram, kot so značke ali lestvice najboljših, da spodbudite uporabnike k pogostejši uporabi platforme Intrix.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Prilagoditve",
    text: "Dovolite uporabnikom, da prilagodijo videz in vedenje CRM/HRM sistema, s čimer bo bolj privlačen in zabaven za interakcijo",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integracija z APIs",
    text: "Dovolite CRM/HRM sistemu dostop do zunanjih virov podatkov, kot so finančni API-ji ali tržni raziskovalni API-ji, da lahko zagotovi bolj relevantna priporočila.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "S pametno avtomatizacijo in vrhunsko varnostjo je to popolna rešitev za ekipe, ki želijo delati pametneje.";

export const collabContent = [
  {
    id: "0",
    title: "Brezhibna integracija",
    text: collabText,
  },
  {
    id: "1",
    title: "Pametna Avtomacija",
  },
  {
    id: "2",
    title: "Top-notch Varnost",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Osnovni",
    description: "Standardni CRM, mini prilagoditve.",
    price: "0",
    features: [
      "Spremljanje podjetij in kontaktov",
      "Spremljanje priložnosti",
      "Delovna tabla (neomejeno število tabel)",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Za večino podjetij, možne prilagoditve.",
    price: "9.99",
    features: [
      "Vse lastnosti osnovnega paketa plus: ",
      "Dodatni zavihki po meri in možnost prilagoditev procesov",
      "Možnost povezave s spletnimi obrazci",
      "Prikaz strank na zemljevidu",
      "Dodeljen projektni skrbnik",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Zelo prilagojen CRM, povezan z drugimi sistemi.",
    price: null,
    features: [
      "Vse lastnosti premium paketa plus: ",
      "SSO (enotna prijava)",
      "Po meri prilagojene pravice za uporabnike",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Popolna prilagodljivost",
    text: "Sistem prilagodimo po vaši meri, da vsebuje to kar potrebujete – nič več in nič manj. Manjše prilagoditve tekom uporabe so brezplačne.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Nepremagljiva podpora",
    text: "Hitra odzivnost, osebni pristop in svetovanje so zagotovilo za vaš uspeh. Uvedba sistema za CRM, HRM in vodenje projektov je naša strast.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Intrix za prodajo (CRM)",
    text: "Ne izgubljajte dragocenega časa z iskanjem informacij po preglednicah, e-pošti, zvezkih in listkih. Z Intrixom so vsi podatki o strankah in prodajnih aktivnostih podjetja zbrani na enem mestu ter vsem članom ekipe na voljo kjerkoli in kadarkoli: na računalniku, tablici ali mobilnem telefonu. Pot od prejetega povpraševanja prek izdane ponudbe, prodajnih aktivnosti in sestankov do uspešno izpeljanega posla še nikoli ni bila preglednejša!",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Intrix za kadre (HRM)",
    text: "Poslovite se od iskanja podatkov po preglednicah in kadrovskih arhivih. Optimizirajte procese in na enem mestu učinkovito upravljajte podatke o zaposlenih in njihovem razvoju. Avtomatizirani procesi v Intrixu vam bodo močno olajšali iskanje novih sodelavcev, saj je pot od iskanja kandidatov za zaposlitev do uvajanja novih sodelavcev pregledna, hitra in enostavna. Medtem, ko se boste lahko vi posvetili strateškim opravilom in zadovoljstvu zaposlenih, se bo Intrix ukvarjal s podatki. Ključni podatki iz Intrixa so vam in vašim sodelavcem na voljo vedno in povsod.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Intrix za vodenje projektov",
    text: "Naj gre za izvedbene projekte za stranke ali za interne projekte, z Intrixom ste veliko učinkovitejši. Z njegovo pomočjo lahko posameznim članom projektne ekipe pregledno delegirate naloge ter na enem mestu spremljate njihovo izvajanje, pa tudi porabljen čas, finančno konstrukcijo in projektno dokumentacijo. Gantogram in planer omogočata enostaven pregled stanja projekta v realnem času ter pravočasno ukrepanje ob zastojih.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Intrix za servis in reklamacije",
    text: "Poprodajne servisne aktivnosti in reklamacije so sestavni del posla. Bodite v tem odlični in tudi tako ustvarite dodano vrednost za svoje izdelke ali storitve! Intrix vam omogoča enostaven pregled nad prejetimi zahtevki in delegiranje različnih zadolžitev ter spremljanje dokumentacije, vzdrževalnih pogodb, periodičnih servisov itd. Tako boste imeli vse informacije zmeraj pri roki ter zahtevke uredili v dolgoročno zadovoljstvo kupcev.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
