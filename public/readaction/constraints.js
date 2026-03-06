// Listes d'éléments qui rentrent aléatoirement dans la liste 'must include'
const couleurs = [
    "bordeaux", "ocre", "vermillon", "indigo", "céladon", "bleu givré",
    "lie-de-vin", "rouge feu", "ardoise", "nacre", "carmin", "Brique",
    "ébène", "ivoire", "aubergine", "bleu électrique", "Olive", "Rouge sang",
    "rouille", "sable", "saumon", "vert lichen", "vermeil", "turquoise", 
    "jaune canari", "taupe", "pourpre", "paille", "framboise", "cholorophylle"
];

const metaux = [
  "bronze", "cuivre", "étain", "acier", "tungstène", "platine", "titane", "zinc",
  "fer", "laiton", "damascus", "argent", "or", "plomb", "nickel", "chrome"
];

const pierres = [
  "rubis", "saphir", "émeraude", "améthyste", "opale", "topaze",
  "jade", "quartz", "corail", "silex", "lapis-lazuli", "grenat"
];

const arbres = [
  "ébène", "noyer", "chêne", "bambou", "cèdre", "saule pleureur", "bouleau",
  "palissandre", "hêtre", "if", "séquoia", "buis", "aspen", "pin", "sapin"
];

const textiles = [
  "velours", "soie", "lin", "dentelle", "satin", "coton", "synthétique", "cuir"
];

const astres = [
  "soleil", "lune", "galaxie", "trou noir", "nébuleuse", "comète", "éclipse",
];

// Une fonction pour prendre un élément au hasard dans ces listes
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Liste de toutes les contraintes ensembles
const WC_CONSTRAINTS = {

  wordCount: [
    { value: "50 mots",                 hint: "Une pensée fugace" },
    { value: "100 mots",                hint: "nano-fiction" },
    { value: "200 mots",                hint: "micro-fiction serrée" },
    { value: "250 mots",                hint: "micro-fiction" },
    { value: "Entre 300 et 400 mots",   hint: "Une courte scène" },
    { value: "500 mots",                hint: "mini-fiction" },
    { value: "1,000 mots",              hint: "Une vraie courte histoire" },
  ],

  // Ce qui est "commented out" c'est des trucs que je ne veux pas faire pour l'instant
  genre: [
    // Genres "classiques"
    { value: "Horreur/Thriller",        hint: "peur et tension" },
    { value: "Aventure",                hint: "obstacles et découvertes" },
    { value: "Science fiction",         hint: "une nouvelle technologie ?" },
    { value: "Fantasy",                 hint: "la magie peut prendre bien des formes..." },
    { value: "Uchronie",                hint: "et si... ?" },
    { value: "Cli-fi",                  hint: "SF centrée sur le climat" },
    { value: "Weird fiction",           hint: "l'étrange inexplicable (type Alice au pays des meveilles)" },
    { value: "Dystopie",                hint: "le pire des mondes possibles" },
    { value: "Romance",                 hint: "l'amour sous toutes ses formes" },
    { value: "Fantastique",             hint: "l'impossible dans le réel" },
    { value: "Conte fabuleux",          hint: "'Il était une fois...'" },
    // { value: "Fable",                    hint: "une morale cachée dans une histoire" },
    { value: "Mythologie",              hint: "mythe réel ou inventé" },
    { value: "Solarpunk",               hint: "ambiance cozy mécanique" },

    // Tons / ambiances
    // { value: "Comédie",                 hint: "faire rire, c'est plus dur qu'il n'y paraît" },
    // { value: "Satire",                  hint: "critiquer en exagérant" },
    { value: "Tragédie",                hint: "une chute inévitable" },
    // { value: "Drame psychologique",     hint: "au plus près d'un esprit qui vacille" },
    { value: "Slice of life",           hint: "rien qu'un moment, sans grande intrigue" },

    // Formes narratives
    { value: "Epistolaire",             hint: "lettre, journal, ou email" },
    // { value: "Monologue intérieur",     hint: "le flux brut d'une pensée" },
    { value: "Récit enchâssé",          hint: "une histoire dans l'histoire" },
  ],
  
  pov: [
    { value: "1ère personne",               hint: "je / moi" },
    { value: "1ère personne pluriel",       hint: "nous/on : collectif/indéfini" },
    { value: "2eme personne",               hint: "tu as fait, tu es allé…" },
    { value: "2eme personne plurielle",     hint: "vous : interpelle un groupe" },
    { value: "3e personne limitée",         hint: "proche d'un personnage" },
    { value: "3e personne omnisciente",     hint: "vue globale" 
    },
  ],

  setting: [
    // Isolement / tension
    { value: "Un phare dans une tempête",                       hint: null },
    { value: "Dans un wagon vide à 3h du matin",                hint: null },
    { value: "Une route de campagne sous un épais brouillard",  hint: null },
    { value: "Un bunker",                                       hint: null },
    { value: "Une salle d'opération",                           hint: null },
    { value: "Un poste-frontière",                              hint: null },

    // Lieux de passage / transition
    { value: "Une salle d'attente",                             hint: null },
    { value: "Un lobby d'hôtel",                                hint: null },
    { value: "Un aéroport en pleine nuit",                      hint: null },
    { value: "Un station-service",                              hint: null },

    // Chargés émotionnellement
    { value: "Un enterrement",                                  hint: null },
    { value: "La chambre de son enfance, des années après",     hint: null },
    { value: "Un appartement vide entre deux locataires",       hint: null },
    { value: "Un grenier plein de cartons",                     hint: null },
    { value: "Une maison en construction",                      hint: null },

    // Lieux publics
    { value: "Un marché en fin de journée",                     hint: null },
    { value: "Un stade après le match",                         hint: null },
    { value: "Une fête foraine qui ferme",                      hint: null },
    { value: "Une bibliothèque un dimanche",                    hint: null },

    // Nature
    { value: "Une plage en hiver",                              hint: null },
    { value: "Une forêt après un incendie",                     hint: null },
    { value: "Un champ après la récolte",                       hint: null },

    // Domestic / intime
    { value: "Une cuisine à l'aube",                            hint: null },
    { value: "Un jardin en rooftop",                            hint: null },

    // Décalage temporel / ruines
    { value: "Des ruines d'une ville moderne",                  hint: null },
    { value: "Un musée la nuit",                                hint: null },
    { value: "Une usine désaffectée",                           hint: null },

    // SF / fantastique
    { value: "Une planète avec deux soleils",                   hint: null },
    { value: "Une ville sans électricité",                      hint: null },
    { value: "Une station spatiale en orbite",                  hint: null },
    ],

  mustInclude: [
    // un élément aléatoire
    () => `la couleur : ${pickRandom(couleurs)}`,
    () => `le métal : ${pickRandom(metaux)}`,
    () => `l'astre : ${pickRandom(astres)}`,
    () => `le textile : ${pickRandom(textiles)}`,
    () => `l'arbre : ${pickRandom(arbres)}`,
    () => `la pierre précieuse : ${pickRandom(pierres)}`,

    // un élément distinctif
    "une horloge cassée",
    "un alcool / une drogue",
    "une image déformée",
    "une lettre jamais envoyée",
    "un personnage avec les yeux fermés",
    "une odeur inattendue",
    "un son régulier et dérangeant",
    "un nombre qui revient",
    "une lumière qui clignote",
    "un goût qui rappelle un souvenir",
    "deux personnages qui évitent de se regarder",
    "une ombre qui ne correspond à rien",
    "un objet cassé mais gardé quand même",
    "un mensonge dit avec le sourire",
    "une photographie",

    // une expression / un mot
    "le mot 'vertige'",
    "le mot 'résidu'",
    "le mot 'seuil'",
    "le mot 'carte'",
    "l'expression 'comme si de rien était'",
    "l'expression 'rien est illégal si personne est au courant'",
    "l'expression 'à titre posthume'",
    "une référence culinaire",
    "une référence pop-culture",
    "une référence jeu-vidéo",
    "une référence litéraire",
    "un mot dans une langue étrangère non traduit",

    // contraintes sur la forme
    "la première phrase est une question",
    "la dernière phrase est une question",
    "une question qui n'est jamais répondue",
    "un dialogue sans verbe de parole"
  ],

};

const WC_COVER_IMAGE = "";