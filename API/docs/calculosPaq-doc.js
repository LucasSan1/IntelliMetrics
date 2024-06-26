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
 *   calculosPaq:
 *     type: object
 *     properties:
 *       valorIndicado:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorNominalMedExterna:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 5
 *       valorIndicadoProxOrelhas:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorIndicadoAfasOrelhas:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorNominalPara:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 2
 *       valorIndicadoProxBicos:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorIndicadoAfasBicos:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorIndicadoMedInterna:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorNominalMedInterna:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 3
 *       valorNominalMedRessalto:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 3
 *       valorIndicadoMedRessalto:
 *         type: array
 *         items:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 3
 *       valorNominalMedProf:
 *         type: array
 *         items:
 *           type: number
 *         minItems: 3
 *       valorIndicadoMedProf:
 *        type: array
 *        items:
 *          type: array
 *          items:
 *            type: number
 *          minItems: 3
 * 
 * 
 *   modeloInserirParalelismo:
 *     type: object
 *     properties:
 *       novoValorNominalOrelha: 
 *         type: number
 *         format: decimal
 *       novoValorProxOrelha1:
 *         type: number
 *         format: decimal
 *       novoValorProxOrelha2:
 *         type: number
 *         format: decimal
 *       novoValorProxOrelha3:
 *         type: number
 *         format: decimal
 *       novoValorAfasOrelha1:
 *         type: number
 *         format: decimal
 *       novoValorAfasOrelha2:
 *         type: number
 *         format: decimal
 *       novoValorAfasOrelha3:
 *         type: number
 *         format: decimal
 *       novoValorNominalBico:
 *         type: number
 *         format: decimal
 *       novoValorProxBico1:
 *         type: number
 *         format: decimal
 *       novoValorProxBico2:
 *         type: number
 *         format: decimal
 *       novoValorProxBico3:
 *         type: number
 *         format: decimal
 *       novoValorAfasBico1:
 *         type: number
 *         format: decimal
 *       novoValorAfasBico2:
 *         type: number
 *         format: decimal
 *       novoValorAfasBico3:
 *         type: number
 *         format: decimal
 * 
 * 
 *   modeloMedicaoExterna:
 *     type: object
 *     properties:
 *       novoVn1: 
 *         type: number
 *         format: float
 *       novoVn1_1: 
 *         type: number
 *         format: float
 *       novoVn1_2: 
 *         type: number
 *         format: float
 *       novoVn1_3: 
 *         type: number
 *         format: float
 *       novoVn2: 
 *         type: number
 *         format: float
 *       novoVn2_1: 
 *         type: number
 *         format: float
 *       novoVn2_2: 
 *         type: number
 *         format: float
 *       novoVn2_3: 
 *         type: number
 *         format: float
 *       novoVn3: 
 *         type: number
 *         format: float
 *       novoVn3_1: 
 *         type: number
 *         format: float
 *       novoVn3_2: 
 *         type: number
 *         format: float
 *       novoVn3_3: 
 *         type: number
 *         format: float
 *       novoVn4: 
 *         type: number
 *         format: float
 *       novoVn4_1: 
 *         type: number
 *         format: float
 *       novoVn4_2: 
 *         type: number
 *         format: float
 *       novoVn4_3: 
 *         type: number
 *         format: float
 *       novoVn5: 
 *         type: number
 *         format: float
 *       novoVn5_1: 
 *         type: number
 *         format: float
 *       novoVn5_2: 
 *         type: number
 *         format: float
 *       novoVn5_3: 
 *         type: number
 *         format: float
 *       novoVn6: 
 *         type: number
 *         format: float
 *       novoVn6_1: 
 *         type: number
 *         format: float
 *       novoVn6_2: 
 *         type: number
 *         format: float
 *       novoVn6_3: 
 *         type: number
 *         format: float
 *       novoVn7: 
 *         type: number
 *         format: float
 *       novoVn7_1: 
 *         type: number
 *         format: float
 *       novoVn7_2: 
 *         type: number
 *         format: float
 *       novoVn7_3: 
 *         type: number
 *         format: float
 *       novoVnExtra1: 
 *         type: number
 *         format: float
 *       novoVnExtra1_1: 
 *         type: number
 *         format: float
 *       novoVnExtra1_2: 
 *         type: number
 *         format: float
 *       novoVnExtra1_3: 
 *         type: number
 *         format: float
 *       novoVnExtra2: 
 *         type: number
 *         format: float
 *       novoVnExtra2_1: 
 *         type: number
 *         format: float
 *       novoVnExtra2_2: 
 *         type: number
 *         format: float
 *       novoVnExtra2_3: 
 *         type: number
 *         format: float
 *       novoVnExtra3: 
 *         type: number
 *         format: float
 *       novoVnExtra3_1: 
 *         type: number
 *         format: float
 *       novoVnExtra3_2: 
 *         type: number
 *         format: float
 *       novoVnExtra3_3: 
 *         type: number
 *         format: float
 * 
 *   modeloResultPaquimetro:
 *     type: object
 *     properties:
 *       nrCertificado:
 *         type: number
 *       idInstrumento:
 *         type: number
 *       idParalelismoPaq:
 *         type: number
 *       idMedExterna:
 *         type: number
 *       idMedInterna:
 *         type: number
 *       idMedRessalto:
 *         type: number
 *       idMedProfundidade:
 *         type: number
 *       novoTecnico:
 *         type: number
 *       novoResponsável:
 *         type: number
 *       novaDataCalibracao:
 *         type: string
 *         pattern: 2024-12-30
 *       novaInspecao:
 *         type: string
 *         enum:
 *           - ok
 *           - nok
 *       novoTipoEscala:
 *         type: string
 *         enum:
 *           - analogico
 *           - digital
 *       novaVersaoMetodo:
 *         type: number
 *       novoTempInicial:
 *         type: number
 *         format: double
 *         minimum: 0
 *         maximum: 999.99
 *       novoTempFinal:
 *         type: number
 *         format: double
 *         minimum: 0
 *         maximum: 999.99
 * 
 *   modeloMedicaoInternaRessalto:
 *     type: object
 *     properties:
 *       novaPrimeiraMedida: 
 *         type: number
 *         format: float
 *       novoValorNominal1_1: 
 *         type: number
 *         format: float
 *       novoValorNominal1_2: 
 *         type: number
 *         format: float
 *       novoValorNominal1_3: 
 *         type: number
 *         format: float
 *       novaSegundaMedida: 
 *         type: number
 *         format: float
 *       novoValorNominal2_1: 
 *         type: number
 *         format: float
 *       novoValorNominal2_2: 
 *         type: number
 *         format: float
 *       novoValorNominal2_3: 
 *         type: number
 *         format: float
 *       novaTerceiraMedida: 
 *         type: number
 *         format: float
 *       novoValorNominal3_1: 
 *         type: number
 *         format: float
 *       novoValorNominal3_2: 
 *         type: number
 *         format: float
 *       novoValorNominal3_3: 
 *         type: number
 *         format: float
 * 
 *   modeloMedicaoProfundidade:
 *     type: object
 *     properties:
 *       nova_primeiraMedida: 
 *         type: number
 *         format: float
 *       novo_valorNominal1_1: 
 *         type: number
 *         format: float
 *       novo_valorNominal1_2: 
 *         type: number
 *         format: float
 *       novo_valorNominal1_3: 
 *         type: number
 *         format: float
 *       nova_segundaMedida: 
 *         type: number
 *         format: float
 *       novo_valorNominal2_1: 
 *         type: number
 *         format: float
 *       novo_valorNominal2_2: 
 *         type: number
 *         format: float
 *       novo_valorNominal2_3: 
 *         type: number
 *         format: float
 *       nova_terceiraMedida: 
 *         type: number
 *         format: float
 *       novo_valorNominal3_1: 
 *         type: number
 *         format: float
 *       novo_valorNominal3_2: 
 *         type: number
 *         format: float
 *       novo_valorNominal3_3: 
 *         type: number
 *         format: float
 * 
 * 
 * /incertezaPaq:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: incerteza do paquimetro
 *     description: Todos os calculos referentes a incerteza de paquimetros
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
 * /calculosPaq:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: calculos de paquimetro
 *     description: Calculos de tendencia, paralelismo e desvio padrao de paquimetros
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/calculosPaq' 
 *     responses:
 *       200:
 *         description: Retorna os resultados dos calculos.
 *       500:
 *         description: Erro interno da API.
 *
 * 
 * /inserirParalelismo:
 *    post: 
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: Inserir dados de paralelismo do paquimetro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/modeloInserirParalelismo' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       500:
 *         description: Erro interno do servidor. * 
 * 
 * /calibrarParalelismo/{id}:
 *    put: 
 *     tags:
 *       - Calibrar paralelismo paq
 *     summary: inserir dados
 *     description: atualizar dados de paralelismo do paquimetro
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
 *             $ref: '#/definitions/modeloInserirParalelismo' 
 *     responses:
 *       200:
 *         description: Paralelismo atualizado.
 *       400:
 *         description: Erro ao atualizar paralelismo.
 *       404:
 *         description: Relatório não encontrado
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /medicaoExterna:
 *    post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: inserir dados da medicao externa do paquimetro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/modeloMedicaoExterna' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /medicaoExterna/{id}:
 *    put:
 *     tags:
 *       - Calculos paquimetro
 *     summary: atualizar dados
 *     description: atualizar dados da medicao externa do paquimetro
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
 *             $ref: '#/definitions/modeloMedicaoExterna' 
 *     responses:
 *       200:
 *         description: Medições externas atualizadas.
 *       400:
 *         description: Erro ao atualizar medições externas.
 *       404:
 *         description: Relatório não encontrado
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /resultadoPaquimetro:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: inserir dados do resultado da calibracao
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/modeloResultPaquimetro' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /resultadoPaquimetro/{id}:
 *   put:
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: inserir dados do resultado do paquimetro
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
 *             $ref: '#/definitions/modeloResultPaquimetro' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       404:
 *         description: Relatório não encontrado
 *       500:
 *         description: Erro interno do servidor.
 * 
 * 
 * /medicaoInterna:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: inserir dados da medição interna
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/modeloMedicaoInternaRessalto' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /medicaoInterna/{id}:
 *   put:
 *     tags:
 *       - Calculos paquimetro
 *     summary: atualizar dados
 *     description: atualizar dados da medição interna
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
 *             $ref: '#/definitions/modeloMedicaoInternaRessalto' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       404:
 *        description: Relatório não encontrado
 *       500:
 *         description: Erro interno do servidor.
 * 
 * 
 * /medicaoRessalto:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: inserir dados da medição de ressalto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/modeloMedicaoInternaRessalto' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       500:
 *         description: Erro interno do servidor.
 * 
 * 
 * /medicaoRessalto/{id}:
 *   put:
 *     tags:
 *       - Calculos paquimetro
 *     summary: atualizar dados
 *     description: atualizar dados da medição interna
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
 *             $ref: '#/definitions/modeloMedicaoInternaRessalto' 
 *     responses:
 *       200:
 *         description: Medições de ressalto atualizadas.
 *       400:
 *         description: Erro ao atualizar as medições de ressalto
 *       404:
 *        description: Relatório não encontrado
 *       500:
 *         description: Erro interno do servidor.
 * 
 * 
 * /medicaoProfundidade:
 *   post:
 *     tags:
 *       - Calculos paquimetro
 *     summary: inserir dados
 *     description: inserir dados da medição de profundidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/modeloMedicaoProfundidade' 
 *     responses:
 *       200:
 *         description: Valor inserido com sucesso.
 *       400:
 *         description: Erro ao inserir
 *       500:
 *         description: Erro interno do servidor.
 * 
 */
