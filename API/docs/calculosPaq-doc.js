/**
 * @swagger
 * tags:
 *   - name: Calculos paquimetro
 *     description: Todos os resultados dos calculos referentes a parte de paquimetro 
 * definitions:
 *   incertezaPaq:
 *     type: object
 *     properties:
 *       desvpad:
 *         type: array
 *         items:
 *           type: number
 *       resolucao:
 *         type: number
 *       faixaNominal:
 *         type: number
 * 
 * /incertezaPaquimetro:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: incerteza do paquimetro
 *     description: Todos os calculos referentes a incerteza de paquimetos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/incertezaPaq'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 *
 * /calculosPaquimetro:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: calculos de paquimetro
 *     description: Calculos de tendencia, paralelismo e desvio padrao de paquimetros 
 *
 */
