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
 *   insertMicrometro:
 *     type: object
 *     properties:
 *       novovalorNominal1:
 *         type: number
 *         format: flot
 *       novovalorNominal2:
 *         type: number
 *         format: flot
 *       novovalorNominal3:
 *         type: number
 *         format: flot
 *       novovalorNominal4:
 *         type: number
 *         format: flot
 *       novocMovelcFixo1:
 *         type: number
 *         format: flot
 *       novocMovelcFixo2:
 *         type: number
 *         format: flot
 *       novocMovelcFixo3:
 *         type: number
 *         format: flot
 *       novocMovelcFixo4:
 *         type: number
 *         format: flot
 *       novocMovelcFixo5:
 *         type: number
 *         format: flot
 *       novocMovelcFixo6:
 *         type: number
 *         format: flot
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
 * /insertMicrometerParallelism:
 *   post:
 *     tags:
 *       - valores usados nos calculos
 *     summary: esses valores são usados para 
 *
 */
