/**
 * @swagger
 * tags:
 *   - name: Calculos Micrometro
 *     description: Todos os resultados dos calculos referentes a parte de micrometro
 * definitions:
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
 *         pattern: "0 analogico e 1 digital" 
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
 *   incerirControleDimencional:
 *     type: object
 *     properties:
 *       novoVp1:
 *         type: number
 *         format: float
 *       novoVp1_1:
 *         type: number
 *         format: float
 *       novoVp1_2:
 *         type: number
 *         format: float
 *       novoVp1_3:
 *         type: number
 *         format: float
 *       novoVp2:
 *         type: number
 *         format: float
 *       novoVp2_1:
 *         type: number
 *         format: float
 *       novoVp2_2:
 *         type: number
 *         format: float
 *       novoVp2_3:
 *         type: number
 *         format: float
 *       novoVp3:
 *         type: number
 *         format: float
 *       novoVp3_1:
 *         type: number
 *         format: float
 *       novoVp3_2:
 *         type: number
 *         format: float
 *       novoVp3_3:
 *         type: number
 *         format: float
 *       novoVp4:
 *         type: number
 *         format: float
 *       novoVp4_1:
 *         type: number
 *         format: float
 *       novoVp4_2:
 *         type: number
 *         format: float
 *       novoVp4_3:
 *         type: number
 *         format: float
 *       novoVp5:
 *         type: number
 *         format: float
 *       novoVp5_1:
 *         type: number
 *         format: float
 *       novoVp5_2:
 *         type: number
 *         format: float
 *       novoVp5_3:
 *         type: number
 *         format: float
 *       novoVp6:
 *         type: number
 *         format: float
 *       novoVp6_1:
 *         type: number
 *         format: float
 *       novoVp6_2:
 *         type: number
 *         format: float
 *       novoVp6_3:
 *         type: number
 *         format: float
 *       novoVp7:
 *         type: number
 *         format: float
 *       novoVp7_1:
 *         type: number
 *         format: float
 *       novoVp7_2:
 *         type: number
 *         format: float
 *       novoVp7_3:
 *         type: number
 *         format: float
 *       novoVp8:
 *         type: number
 *         format: float
 *       novoVp8_1:
 *         type: number
 *         format: float
 *       novoVp8_2:
 *         type: number
 *         format: float
 *       novoVp8_3:
 *         type: number
 *         format: float
 *       novoVp9:
 *         type: number
 *         format: float
 *       novoVp9_1:
 *         type: number
 *         format: float
 *       novoVp9_2:
 *         type: number
 *         format: float
 *       novoVp9_3:
 *         type: number
 *         format: float
 *       novoVp10:
 *         type: number
 *         format: float
 *       novoVp10_1:
 *         type: number
 *         format: float
 *       novoVp10_2:
 *         type: number
 *         format: float
 *       novoVp10_3:
 *         type: number
 *         format: float
 *       novoVp11:
 *         type: number
 *         format: float
 *       novoVp11_1:
 *         type: number
 *         format: float
 *       novoVp11_2:
 *         type: number
 *         format: float
 *       novoVp11_3:
 *         type: number
 *         format: float
 * 
 *   valoresResultadoMicrometro:
 *     type: object
 *     properties:
 *       nrCertificado:
 *         type: munber
 *       idControle:
 *         type: number
 *       idPlaneza:
 *         type: number
 *       idParalelismoMicro:
 *         type: number
 *       idInstrumento:
 *         type: number
 *       alterarTecnico:
 *         type: string
 *       novoResponsável:
 *         type: string
 *       novaFaixaCalibradaNum:
 *         type: string
 *       novaFaixaCalibradaUni:
 *         type: string
 *       novaDataCalibracao:
 *         type: string
 *         format: date
 *       novaInspecao:
 *         type: string
 *       novoTipoEscala:
 *         type: string
 *       novaVersaoMetodo:
 *         type: integer
 *       novoTempInicial:
 *         type: number
 *         format: decimal
 *       novoTempFinal:
 *         type: number
 *         format: decimal
 * 
 *   novoResultadoMicrometro:
 *     type: object
 *     properties:
 *       antigoNrCertificad:
 *         type: munber
 *       alterarNrCertificado:
 *         type: number
 *       idControle:
 *         type: number
 *       idPlaneza:
 *         type: number
 *       idParalelismoMicro:
 *         type: number
 *       idInstrumento:
 *         type: number
 *       alterarTecnico:
 *         type: string
 *       alterarResponsável:
 *         type: string
 *       alterarFaixaCalibradaNum:
 *         type: string
 *       alterarFaixaCalibradaUni:
 *         type: string
 *       alterarDataCalibracao:
 *         type: string
 *         format: date
 *       alterarInspecao:
 *         type: string
 *       alterarTipoEscala:
 *         type: string
 *       alterarVersaoMetodo:
 *         type: integer
 *       alterarTempInicia:
 *         type: number
 *         format: decimal
 *       alterarTempFinal:
 *         type: number
 *         format: decimal
 * 
 *   Planeza:
 *     type: object
 *     properties: 
 *       CMovel1:
 *         type: number
 *         format: float
 *       CMovel2:
 *         type: number
 *         format: float
 *       CMovel3:
 *         type: number
 *         format: float
 *       CFixo1:
 *         type: number
 *         format: float
 *       CFixo2:
 *         type: number
 *         format: float
 *       CFixo3:
 *         type: number
 *         format: float
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
 * /inserirMicrometroParalelismo:
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
 * 
 * /updateMicrometroParalelismo/{id}:
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
 * 
 * 
 * /incerirControleDimencional:
 *   post:
 *     tags:
 *       - Calculos Micrometro
 *     summary: Valores controle dimencional
 *     description: valores para calculo de controle dimencional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/incerirControleDimencional'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 * 
 * 
 * /inserirResultadoMicrometro:
 *   post:
 *     tags:
 *       - Calculos Micrometro
 *     summary: Valores controle dimencional
 *     description: valores para resultado micrometro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/valoresResultadoMicrometro'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 * 
 * 
 * /updateResultadoMicrometro/{id}:
 *   put:
 *     tags:
 *       - Calculos Micrometro
 *     summary: descrições de resultados do certificado
 *     description: informações do relatorio
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
 *             $ref: '#/definitions/novoResultadoMicrometro'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 * 
 * /insertPlaneza:
 *   post:
 *     tags:
 *       - Calculos Micrometro
 *     summary: Valores planeza
 *     description: valores para planeza
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Planeza'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 * 
 * /updatePlaneza:
 *   put:
 *     tags:
 *       - Calculos Micrometro
 *     summary: Valores planeza
 *     description: atualiza valores para planeza
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
 *             $ref: '#/definitions/Planeza'
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 */
