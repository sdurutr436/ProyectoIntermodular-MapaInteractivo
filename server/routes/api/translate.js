/**
 * Issue 2.7 y 2.8 - Sprint 2
 * Rutas de traducción con endpoint de prueba
 */
const express = require('express');
const router = express.Router();
const Translation = require('../../models/Translation');

/**
 * POST /api/translate/test
 * Issue 2.8: Endpoint de prueba básico
 * Valida entrada y retorna respuesta mock
 */
router.post('/test', async (req, res) => {
  try {
    const { text, country } = req.body;

    // Validación de entrada
    if (!text || typeof text !== 'string') {
      return res.status(400).json({
        error: 'El campo "text" es obligatorio y debe ser un string',
        timestamp: new Date().toISOString()
      });
    }

    if (!country || typeof country !== 'string') {
      return res.status(400).json({
        error: 'El campo "country" es obligatorio y debe ser un string',
        timestamp: new Date().toISOString()
      });
    }

    if (text.trim().length === 0) {
      return res.status(400).json({
        error: 'El texto no puede estar vacío',
        timestamp: new Date().toISOString()
      });
    }

    if (text.length > 5000) {
      return res.status(400).json({
        error: 'El texto no puede exceder 5000 caracteres',
        timestamp: new Date().toISOString()
      });
    }

    // Respuesta mock de prueba
    const mockResponse = {
      success: true,
      data: {
        originalText: text,
        country: country,
        alpha3Code: country.toUpperCase().substring(0, 3),
        language: 'es',
        translation: `[MOCK] Traducción de prueba para: "${text}"`,
        fromCache: false
      },
      message: 'Endpoint de prueba funcionando correctamente (Sprint 2)',
      timestamp: new Date().toISOString()
    };

    console.log(`[${new Date().toISOString()}] INFO: Test translation request - Country: ${country}`);
    
    res.json(mockResponse);

  } catch (error) {
    console.error(`[${new Date().toISOString()}] ERROR:`, error);
    res.status(500).json({
      error: 'Error en el servidor',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/translate
 * Endpoint principal de traducción (se implementará en Sprint 3)
 */
router.post('/', async (req, res) => {
  res.status(501).json({
    error: 'Endpoint en desarrollo',
    message: 'La traducción completa se implementará en Sprint 3',
    sprint: 2,
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /api/translate/cache
 * Obtener estadísticas del caché
 */
router.get('/cache', async (req, res) => {
  try {
    const totalTranslations = await Translation.countDocuments();
    const recentTranslations = await Translation.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('originalText alpha3Code language createdAt -_id');

    res.json({
      success: true,
      cache: {
        total: totalTranslations,
        recent: recentTranslations
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ERROR:`, error);
    res.status(500).json({
      error: 'Error al obtener estadísticas del caché',
      timestamp: new Date().toISOString()
    });
  }
});

module.exports = router;
