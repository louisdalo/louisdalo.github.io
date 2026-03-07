// Lists of elements that will be picked if selected in 'must include' (see end of file)
const colors = [
    "bordeaux", "ocre", "vermillon", "indigo", "cholorophylle", "bleu givré",
    "lie-de-vin", "rouge feu", "ardoise", "nacre", "carmin", "brique",
    "ébène", "ivoire", "aubergine", "bleu électrique", "olive", "rouge sang",
    "rouille", "sable", "saumon", "vert lichen", "vermeil", "turquoise", 
    "jaune canari", "taupe", "pourpre", "paille", "framboise"
];
const metals = [
  "bronze", "cuivre", "étain", "acier", "tungstène", "platine", "titane", "zinc",
  "fer", "laiton", "damascus", "argent", "or", "plomb", "nickel", "chrome"
];
const rocks = [
  "rubis", "saphir", "émeraude", "améthyste", "opale", "topaze",
  "jade", "quartz", "corail", "silex", "lapis-lazuli", "grenat"
];
const trees = [
  "ébène", "noyer", "chêne", "bambou", "cèdre", "saule pleureur", "bouleau",
  "palissandre", "hêtre", "if", "séquoia", "buis", "aspen", "pin", "sapin"
];
const textiles = [
  "velours", "soie", "lin", "dentelle", "satin", "coton", "synthétique", "cuir"
];
const stars = [
  "soleil", "lune", "galaxie", "trou noir", "nébuleuse", "comète", "éclipse",
];
// A function that takes a random element from a list
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];


// List of all contraints to pick for ReadAction
const WC_CONSTRAINTS = {
  // Number of words
  wordCount: [
    { value: "50 mots",                 hint: "Une pensée fugace" },
    { value: "100 mots",                hint: "nano-fiction" },
    { value: "200 mots",                hint: "micro-fiction serrée" },
    { value: "250 mots",                hint: "micro-fiction" },
    { value: "Entre 300 et 400 mots",   hint: "Une courte scène" },
    { value: "500 mots",                hint: "mini-fiction" },
    { value: "1,000 mots",              hint: "Une vraie courte histoire" },
  ],

  // Literary genre (commented out parameters are things I don't wanna do)
  genre: [
    // Book genres
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

    // Classical genres
    // { value: "Comédie",                 hint: "faire rire, c'est plus dur qu'il n'y paraît" },
    // { value: "Satire",                  hint: "critiquer en exagérant" },
    // { value: "Tragédie",                hint: "une chute inévitable" },
    // { value: "Drame psychologique",     hint: "au plus près d'un esprit qui vacille" },
    { value: "Slice of life",           hint: "rien qu'un moment, sans grande intrigue" },

    // Narrative forms
    { value: "Epistolaire",             hint: "lettre, journal, ou email" },
    // { value: "Monologue intérieur",     hint: "le flux brut d'une pensée" },
    { value: "Récit enchâssé",          hint: "une histoire dans l'histoire" },
  ],
  
  // POVs
  pov: [
    { value: "1ère personne",               hint: "je / moi" },
    { value: "1ère personne pluriel",       hint: "nous/on : collectif/indéfini" },
    { value: "2eme personne",               hint: "tu as fait, tu es allé…" },
    { value: "2eme personne plurielle",     hint: "vous : interpelle un groupe" },
    { value: "3e personne limitée",         hint: "proche d'un personnage" },
    { value: "3e personne omnisciente",     hint: "vue globale" 
    },
  ],

  // A context for the story
  setting: [
    // Solitude / Tension
    { value: "Un phare dans une tempête",                       hint: null },
    { value: "Dans un wagon vide à 3h du matin",                hint: null },
    { value: "Une route de campagne sous un épais brouillard",  hint: null },
    { value: "Un bunker",                                       hint: null },
    { value: "Une salle d'opération",                           hint: null },
    { value: "Un poste-frontière",                              hint: null },

    // Place of passage/transition
    { value: "Une salle d'attente",                             hint: null },
    { value: "Un lobby d'hôtel",                                hint: null },
    { value: "Un aéroport en pleine nuit",                      hint: null },
    { value: "Un station-service",                              hint: null },

    // Emotionally laoded scenes
    { value: "Un enterrement",                                  hint: null },
    { value: "La chambre de son enfance, des années après",     hint: null },
    { value: "Un appartement vide entre deux locataires",       hint: null },
    { value: "Un grenier plein de cartons",                     hint: null },
    { value: "Une maison en construction",                      hint: null },

    // Public places
    { value: "Un marché en fin de journée",                     hint: null },
    { value: "Un stade après le match",                         hint: null },
    { value: "Une fête foraine qui ferme",                      hint: null },
    { value: "Une bibliothèque un dimanche",                    hint: null },

    // Nature
    { value: "Une plage en hiver",                              hint: null },
    { value: "Une forêt après un incendie",                     hint: null },
    { value: "Un champ après la récolte",                       hint: null },

    // Domestic / intimate
    { value: "Une cuisine à l'aube",                            hint: null },
    { value: "Un jardin en rooftop",                            hint: null },
    { value: "Dans un lit avec son amour à ses côtés",          hint: null },

    // Uncanny places
    { value: "Les ruines d'une ville moderne",                  hint: null },
    { value: "Un musée la nuit",                                hint: null },
    { value: "Une usine désaffectée",                           hint: null },

    // SF / fantasy settings
    { value: "Une planète avec deux soleils",                   hint: null },
    { value: "Une ville sans électricité",                      hint: null },
    { value: "Une station spatiale en orbite",                  hint: null },
    ],

  // Random elements to focus on
  mustInclude: [
    // Basic objects
    // Repeated 3 times to balance odds with other possibilites
    () => `la couleur : ${pickRandom(colors)}`,
    () => `le métal : ${pickRandom(metals)}`,
    () => `l'astre : ${pickRandom(stars)}`,
    () => `le textile : ${pickRandom(textiles)}`,
    () => `l'arbre : ${pickRandom(trees)}`,
    () => `la pierre précieuse : ${pickRandom(rocks)}`,
    () => `la couleur : ${pickRandom(colors)}`,
    () => `le métal : ${pickRandom(metals)}`,
    () => `l'astre : ${pickRandom(stars)}`,
    () => `le textile : ${pickRandom(textiles)}`,
    () => `l'arbre : ${pickRandom(trees)}`,
    () => `la pierre précieuse : ${pickRandom(rocks)}`,
    () => `la couleur : ${pickRandom(colors)}`,
    () => `le métal : ${pickRandom(metals)}`,
    () => `l'astre : ${pickRandom(stars)}`,
    () => `le textile : ${pickRandom(textiles)}`,
    () => `l'arbre : ${pickRandom(trees)}`,
    () => `la pierre précieuse : ${pickRandom(rocks)}`,

    // distinctive elements
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

    // a word / an expression
    "le mot 'vertige'",
    "le mot 'résidu'",
    "le mot 'seuil'",
    "le mot 'carte'",
    "le mot 'fissure'",
    "le mot 'archipel'",
    "le mot 'cendres'",
    "le mot 'égalité'",
    "le mot 'vestige'",
    "le mot 'poudre'",
    "l'expression 'comme si de rien était'",
    "l'expression 'rien est illégal si personne est au courant'",
    "l'expression 'à titre posthume'",
    "l'expression 'en dernier ressort'",
    "l'expression 'à l'insu de son plein gré'",

    // a reference
    "une référence culinaire",
    "une référence pop-culture",
    "une référence jeu-vidéo",
    "une référence litéraire",
    "une référence musicale",
    "une référence à un tableau ou une œuvre d'art",
    "un mot dans une langue étrangère non traduit",

    // form constraints
    "la première phrase est une question",
    "la dernière phrase est une question",
    "une question qui n'est jamais répondue",
    "un dialogue sans verbe de parole",
    "chaque paragraphe commence par la même lettre",
    "le texte contient une liste"
  ],

};

const WC_COVER_IMAGE = "";