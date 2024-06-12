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
 *         minItems: 6
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
 *         format: float
 *       novovalorNominal2:
 *         type: number
 *         format: float
 *       novovalorNominal3:
 *         type: number
 *         format: float
 *       novovalorNominal4:
 *         type: number
 *         format: float
 *       novocMovelcFixo1:
 *         type: number
 *         format: float
 *       novocMovelcFixo2:
 *         type: number
 *         format: float
 *       novocMovelcFixo3:
 *         type: number
 *         format: float
 *       novocMovelcFixo4:
 *         type: number
 *         format: float
 *       novocMovelcFixo5:
 *         type: number
 *         format: float
 *       novocMovelcFixo6:
 *         type: number
 *         format: float
 * 
 *   incertMicroParalrlismo:
 *     type: object
 *     properties:
 *       novovalorNominal1:
 *         type: number
 *         format: float
 *       novovalorNominal2:
 *         type: number
 *         format: float
 *       novovalorNominal3:
 *         type: number
 *         format: float
 *       novovalorNominal4:
 *         type: number
 *         format: float
 *       novocMovelcFixo1:
 *          type: number
 *          format: float
 *       novocMovelcFixo2:
 *          type: number
 *          format: float
 *       novocMovelcFixo3:
 *          type: number
 *          format: float
 *       novocMovelcFixo4:
 *          type: number
 *          format: float
 *       novocMovelcFixo5:
 *          type: number
 *          format: float
 *       novocMovelcFixo6:
 *          type: number
 *          format: float
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
 * /insertMicrometroParalelismo:
 *   post:
 *     tags:
 *       - Calculos Micrometro
 *     summary: Calculo para incerteza do paralelismo
 *     description: valores para calculo de incerteza do micrometro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/incertMicroParalrlismo'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 * 
 * /insertMicrometroParalelismo/{id}:
 *   put:
 *     tags:
 *       - Calculos Micrometro
 *     summary: atualiza valores do calculo do paralelismo
 *     description: atualiza valores para calculo de incerteza do micrometro
 *     parameters: 
 *       - in: path
 *         name: id
 *         type: number
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/incertMicroParalrlismo'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 */
