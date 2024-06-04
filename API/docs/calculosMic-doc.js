/**
 * @swagger
 * tags:
 *   - name: Calculos Micrometro
 *     description: Todos os resultados dos calculos referentes a parte de micrometro
 * definitions:
 *    
 *   calculosMic:
 *     type: object
 *     properties:
 *       cMovel:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 3
 *       cFixo:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 3
 *       dadosParalelismo:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 3
 *       dadosControle:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       faixaCalibrada:    
 *         type: number
 *       valorDivResolucao:
 *         type: number
 *       dig_anal:
 *         type: number
 *         pattern: 0 analogico e 1 digital 
 * 
 * 
 * /calculateMicrometro:
 *   post:
 *     tags:
 *       - Calculos Micrometro
 *     summary: Todos os calculos
 *     description: Todos os calculos referentes a micrometro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/calculosMic'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 *
 * 
 *
 */
