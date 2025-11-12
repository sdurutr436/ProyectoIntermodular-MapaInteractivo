/**
 * Issue 2.9 - Sprint 2
 * Mapeo de códigos ISO 3166-1 alpha-3 de países a sus idiomas oficiales
 * 
 * Formato: { 'CÓDIGO_PAÍS': 'código_idioma_iso_639-1' }
 * 
 * Este mapeo se utilizará para determinar el idioma de destino
 * cuando el usuario seleccione un país en el mapa
 */

const countryLanguageMap = {
  // Europa
  'ESP': 'es', // España - Español
  'FRA': 'fr', // Francia - Francés
  'DEU': 'de', // Alemania - Alemán
  'ITA': 'it', // Italia - Italiano
  'PRT': 'pt', // Portugal - Portugués
  'GBR': 'en', // Reino Unido - Inglés
  'IRL': 'en', // Irlanda - Inglés
  'NLD': 'nl', // Países Bajos - Holandés
  'BEL': 'nl', // Bélgica - Holandés/Francés (usamos holandés)
  'LUX': 'fr', // Luxemburgo - Francés
  'CHE': 'de', // Suiza - Alemán (multilingüe)
  'AUT': 'de', // Austria - Alemán
  'POL': 'pl', // Polonia - Polaco
  'CZE': 'cs', // República Checa - Checo
  'SVK': 'sk', // Eslovaquia - Eslovaco
  'HUN': 'hu', // Hungría - Húngaro
  'ROU': 'ro', // Rumania - Rumano
  'BGR': 'bg', // Bulgaria - Búlgaro
  'GRC': 'el', // Grecia - Griego
  'SWE': 'sv', // Suecia - Sueco
  'NOR': 'no', // Noruega - Noruego
  'DNK': 'da', // Dinamarca - Danés
  'FIN': 'fi', // Finlandia - Finés
  'ISL': 'is', // Islandia - Islandés
  'EST': 'et', // Estonia - Estonio
  'LVA': 'lv', // Letonia - Letón
  'LTU': 'lt', // Lituania - Lituano
  'UKR': 'uk', // Ucrania - Ucraniano
  'BLR': 'be', // Bielorrusia - Bielorruso
  'MDA': 'ro', // Moldavia - Rumano
  'HRV': 'hr', // Croacia - Croata
  'SRB': 'sr', // Serbia - Serbio
  'BIH': 'bs', // Bosnia - Bosnio
  'MNE': 'sr', // Montenegro - Serbio
  'SVN': 'sl', // Eslovenia - Esloveno
  'MKD': 'mk', // Macedonia del Norte - Macedonio
  'ALB': 'sq', // Albania - Albanés

  // Américas
  'USA': 'en', // Estados Unidos - Inglés
  'CAN': 'en', // Canadá - Inglés/Francés
  'MEX': 'es', // México - Español
  'BRA': 'pt', // Brasil - Portugués
  'ARG': 'es', // Argentina - Español
  'CHL': 'es', // Chile - Español
  'COL': 'es', // Colombia - Español
  'PER': 'es', // Perú - Español
  'VEN': 'es', // Venezuela - Español
  'ECU': 'es', // Ecuador - Español
  'BOL': 'es', // Bolivia - Español
  'PRY': 'es', // Paraguay - Español
  'URY': 'es', // Uruguay - Español
  'CRI': 'es', // Costa Rica - Español
  'PAN': 'es', // Panamá - Español
  'CUB': 'es', // Cuba - Español
  'DOM': 'es', // República Dominicana - Español
  'GTM': 'es', // Guatemala - Español
  'HND': 'es', // Honduras - Español
  'SLV': 'es', // El Salvador - Español
  'NIC': 'es', // Nicaragua - Español
  'JAM': 'en', // Jamaica - Inglés
  'HTI': 'fr', // Haití - Francés

  // Asia
  'CHN': 'zh', // China - Chino
  'JPN': 'ja', // Japón - Japonés
  'KOR': 'ko', // Corea del Sur - Coreano
  'PRK': 'ko', // Corea del Norte - Coreano
  'IND': 'hi', // India - Hindi
  'PAK': 'ur', // Pakistán - Urdu
  'BGD': 'bn', // Bangladesh - Bengalí
  'IDN': 'id', // Indonesia - Indonesio
  'THA': 'th', // Tailandia - Tailandés
  'VNM': 'vi', // Vietnam - Vietnamita
  'PHL': 'en', // Filipinas - Inglés/Tagalo
  'MYS': 'ms', // Malasia - Malayo
  'SGP': 'en', // Singapur - Inglés
  'MMR': 'my', // Myanmar - Birmano
  'KHM': 'km', // Camboya - Jemer
  'LAO': 'lo', // Laos - Lao
  'NPL': 'ne', // Nepal - Nepalí
  'LKA': 'si', // Sri Lanka - Cingalés
  'AFG': 'fa', // Afganistán - Persa
  'IRN': 'fa', // Irán - Persa
  'IRQ': 'ar', // Irak - Árabe
  'SAU': 'ar', // Arabia Saudita - Árabe
  'ARE': 'ar', // Emiratos Árabes - Árabe
  'ISR': 'he', // Israel - Hebreo
  'TUR': 'tr', // Turquía - Turco
  'SYR': 'ar', // Siria - Árabe
  'JOR': 'ar', // Jordania - Árabe
  'LBN': 'ar', // Líbano - Árabe
  'YEM': 'ar', // Yemen - Árabe
  'OMN': 'ar', // Omán - Árabe
  'KWT': 'ar', // Kuwait - Árabe
  'QAT': 'ar', // Qatar - Árabe
  'BHR': 'ar', // Baréin - Árabe

  // África
  'ZAF': 'en', // Sudáfrica - Inglés
  'EGY': 'ar', // Egipto - Árabe
  'NGA': 'en', // Nigeria - Inglés
  'ETH': 'am', // Etiopía - Amárico
  'KEN': 'sw', // Kenia - Suajili
  'TZA': 'sw', // Tanzania - Suajili
  'UGA': 'en', // Uganda - Inglés
  'GHA': 'en', // Ghana - Inglés
  'MAR': 'ar', // Marruecos - Árabe
  'DZA': 'ar', // Argelia - Árabe
  'TUN': 'ar', // Túnez - Árabe
  'LBY': 'ar', // Libia - Árabe
  'SDN': 'ar', // Sudán - Árabe
  'SEN': 'fr', // Senegal - Francés
  'CIV': 'fr', // Costa de Marfil - Francés
  'CMR': 'fr', // Camerún - Francés
  'COD': 'fr', // Rep. Dem. del Congo - Francés
  'AGO': 'pt', // Angola - Portugués
  'MOZ': 'pt', // Mozambique - Portugués
  'ZWE': 'en', // Zimbabue - Inglés
  'ZMB': 'en', // Zambia - Inglés
  'MDG': 'fr', // Madagascar - Francés
  'MLI': 'fr', // Mali - Francés
  'NER': 'fr', // Níger - Francés
  'TCD': 'fr', // Chad - Francés
  'SOM': 'so', // Somalia - Somalí

  // Oceanía
  'AUS': 'en', // Australia - Inglés
  'NZL': 'en', // Nueva Zelanda - Inglés
  'PNG': 'en', // Papúa Nueva Guinea - Inglés
  'FJI': 'en', // Fiyi - Inglés

  // Rusia y ex-URSS
  'RUS': 'ru', // Rusia - Ruso
  'KAZ': 'kk', // Kazajistán - Kazajo
  'UZB': 'uz', // Uzbekistán - Uzbeko
  'TKM': 'tk', // Turkmenistán - Turcomano
  'KGZ': 'ky', // Kirguistán - Kirguís
  'TJK': 'tg', // Tayikistán - Tayiko
  'ARM': 'hy', // Armenia - Armenio
  'GEO': 'ka', // Georgia - Georgiano
  'AZE': 'az', // Azerbaiyán - Azerí

  // Otros
  'MNG': 'mn', // Mongolia - Mongol
  'TWN': 'zh', // Taiwán - Chino
  'HKG': 'zh', // Hong Kong - Chino
  'MAC': 'zh', // Macao - Chino
};

module.exports = countryLanguageMap;
