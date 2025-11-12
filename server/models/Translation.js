const mongoose = require('mongoose');

/**
 * Issue 2.3 y 2.4 - Sprint 2
 * Schema de Translation para almacenar traducciones en caché
 * 
 * Campos:
 * - originalText: Texto original a traducir
 * - alpha3Code: Código ISO 3166-1 alpha-3 del país (ej: ESP, USA, FRA)
 * - language: Idioma del país al que se traduce
 * - translation: Texto traducido
 * - createdAt: Fecha de creación automática
 * 
 * Índice compuesto único en (originalText, alpha3Code) para optimizar búsquedas
 * y evitar duplicados
 */
const TranslationSchema = new mongoose.Schema({
  originalText: {
    type: String,
    required: [true, 'El texto original es obligatorio'],
    trim: true,
    maxlength: [5000, 'El texto no puede exceder 5000 caracteres']
  },
  alpha3Code: {
    type: String,
    required: [true, 'El código del país es obligatorio'],
    uppercase: true,
    trim: true,
    minlength: [3, 'El código debe tener 3 caracteres'],
    maxlength: [3, 'El código debe tener 3 caracteres']
  },
  language: {
    type: String,
    required: [true, 'El idioma es obligatorio'],
    trim: true
  },
  translation: {
    type: String,
    required: [true, 'La traducción es obligatoria'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Índice compuesto único para evitar traducciones duplicadas
// y optimizar búsquedas por (texto + país)
TranslationSchema.index({ originalText: 1, alpha3Code: 1 }, { unique: true });

// Índice simple para búsquedas por idioma
TranslationSchema.index({ language: 1 });

// Método estático para buscar en caché
TranslationSchema.statics.findInCache = function(originalText, alpha3Code) {
  return this.findOne({ originalText, alpha3Code });
};

module.exports = mongoose.model('Translation', TranslationSchema);
