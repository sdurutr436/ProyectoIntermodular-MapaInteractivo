/**
 * Issue 2.9 - Sprint 2
 * Mapeo de nombres de países a códigos ISO 3166-1 alpha-3
 * 
 * Este mapeo se utiliza para convertir nombres de países
 * (que vienen del mapa GeoJSON) a códigos ISO de 3 letras
 * 
 * Formato: { 'Nombre del País': 'CÓDIGO_ISO' }
 */

const countryCodeMapping = {
  // Europa
  'Spain': 'ESP',
  'France': 'FRA',
  'Germany': 'DEU',
  'Italy': 'ITA',
  'Portugal': 'PRT',
  'United Kingdom': 'GBR',
  'Ireland': 'IRL',
  'Netherlands': 'NLD',
  'Belgium': 'BEL',
  'Luxembourg': 'LUX',
  'Switzerland': 'CHE',
  'Austria': 'AUT',
  'Poland': 'POL',
  'Czech Republic': 'CZE',
  'Czechia': 'CZE',
  'Slovakia': 'SVK',
  'Hungary': 'HUN',
  'Romania': 'ROU',
  'Bulgaria': 'BGR',
  'Greece': 'GRC',
  'Sweden': 'SWE',
  'Norway': 'NOR',
  'Denmark': 'DNK',
  'Finland': 'FIN',
  'Iceland': 'ISL',
  'Estonia': 'EST',
  'Latvia': 'LVA',
  'Lithuania': 'LTU',
  'Ukraine': 'UKR',
  'Belarus': 'BLR',
  'Moldova': 'MDA',
  'Croatia': 'HRV',
  'Serbia': 'SRB',
  'Bosnia and Herzegovina': 'BIH',
  'Montenegro': 'MNE',
  'Slovenia': 'SVN',
  'North Macedonia': 'MKD',
  'Macedonia': 'MKD',
  'Albania': 'ALB',

  // Américas
  'United States of America': 'USA',
  'United States': 'USA',
  'USA': 'USA',
  'Canada': 'CAN',
  'Mexico': 'MEX',
  'Brazil': 'BRA',
  'Argentina': 'ARG',
  'Chile': 'CHL',
  'Colombia': 'COL',
  'Peru': 'PER',
  'Venezuela': 'VEN',
  'Ecuador': 'ECU',
  'Bolivia': 'BOL',
  'Paraguay': 'PRY',
  'Uruguay': 'URY',
  'Costa Rica': 'CRI',
  'Panama': 'PAN',
  'Cuba': 'CUB',
  'Dominican Republic': 'DOM',
  'Guatemala': 'GTM',
  'Honduras': 'HND',
  'El Salvador': 'SLV',
  'Nicaragua': 'NIC',
  'Jamaica': 'JAM',
  'Haiti': 'HTI',

  // Asia
  'China': 'CHN',
  'Japan': 'JPN',
  'South Korea': 'KOR',
  'Korea': 'KOR',
  'North Korea': 'PRK',
  "Dem. Rep. Korea": 'PRK',
  'India': 'IND',
  'Pakistan': 'PAK',
  'Bangladesh': 'BGD',
  'Indonesia': 'IDN',
  'Thailand': 'THA',
  'Vietnam': 'VNM',
  'Viet Nam': 'VNM',
  'Philippines': 'PHL',
  'Malaysia': 'MYS',
  'Singapore': 'SGP',
  'Myanmar': 'MMR',
  'Cambodia': 'KHM',
  'Laos': 'LAO',
  'Nepal': 'NPL',
  'Sri Lanka': 'LKA',
  'Afghanistan': 'AFG',
  'Iran': 'IRN',
  'Iraq': 'IRQ',
  'Saudi Arabia': 'SAU',
  'United Arab Emirates': 'ARE',
  'Israel': 'ISR',
  'Turkey': 'TUR',
  'Syria': 'SYR',
  'Jordan': 'JOR',
  'Lebanon': 'LBN',
  'Yemen': 'YEM',
  'Oman': 'OMN',
  'Kuwait': 'KWT',
  'Qatar': 'QAT',
  'Bahrain': 'BHR',

  // África
  'South Africa': 'ZAF',
  'Egypt': 'EGY',
  'Nigeria': 'NGA',
  'Ethiopia': 'ETH',
  'Kenya': 'KEN',
  'Tanzania': 'TZA',
  'Uganda': 'UGA',
  'Ghana': 'GHA',
  'Morocco': 'MAR',
  'Algeria': 'DZA',
  'Tunisia': 'TUN',
  'Libya': 'LBY',
  'Sudan': 'SDN',
  'Senegal': 'SEN',
  "Côte d'Ivoire": 'CIV',
  'Ivory Coast': 'CIV',
  'Cameroon': 'CMR',
  'Dem. Rep. Congo': 'COD',
  'Democratic Republic of the Congo': 'COD',
  'Angola': 'AGO',
  'Mozambique': 'MOZ',
  'Zimbabwe': 'ZWE',
  'Zambia': 'ZMB',
  'Madagascar': 'MDG',
  'Mali': 'MLI',
  'Niger': 'NER',
  'Chad': 'TCD',
  'Somalia': 'SOM',

  // Oceanía
  'Australia': 'AUS',
  'New Zealand': 'NZL',
  'Papua New Guinea': 'PNG',
  'Fiji': 'FJI',

  // Rusia y ex-URSS
  'Russia': 'RUS',
  'Russian Federation': 'RUS',
  'Kazakhstan': 'KAZ',
  'Uzbekistan': 'UZB',
  'Turkmenistan': 'TKM',
  'Kyrgyzstan': 'KGZ',
  'Tajikistan': 'TJK',
  'Armenia': 'ARM',
  'Georgia': 'GEO',
  'Azerbaijan': 'AZE',

  // Otros
  'Mongolia': 'MNG',
  'Taiwan': 'TWN',
  'Hong Kong': 'HKG',
  'Macao': 'MAC',
  'Greenland': 'GRL',
};

/**
 * Función helper para buscar código de país
 * @param {string} countryName - Nombre del país
 * @returns {string|null} - Código ISO o null si no se encuentra
 */
function getCountryCode(countryName) {
  if (!countryName) return null;
  
  // Buscar coincidencia exacta
  if (countryCodeMapping[countryName]) {
    return countryCodeMapping[countryName];
  }
  
  // Buscar coincidencia case-insensitive
  const lowerName = countryName.toLowerCase();
  for (const [name, code] of Object.entries(countryCodeMapping)) {
    if (name.toLowerCase() === lowerName) {
      return code;
    }
  }
  
  return null;
}

module.exports = {
  countryCodeMapping,
  getCountryCode
};
