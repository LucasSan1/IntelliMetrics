/**
 * @swagger
 * tags:
 *   - name: Instrumentos
 *     description: Todas as operações referentes a Instrumentos
 * definitions:
 *   instrumento:
 *     type: object
 *     properties:
 *       fk_idCliente:
 *         type: number
 *       fk_idOs:
 *         type: number
 *       fk_idCategoria:
 *         type: number
 *       nome:
 *         type: string
 *       nSerie:
 *         type: string
 *       identificacaoCliente:
 *         type: string
 *       fabricante:
 *         type: string
 *       faixaNominalNum:
 *         type: string
 *       faixaNominalUni:
 *         type: string
 *       divisaoResolucaoNum:
 *         type: string
 *       divisaoResolucaoUni:
 *         type: string
 *       orgaoResponsavel:
 *         type: string
 *   
 *   updateInstrumento:
 *     type: object
 *     properties:
 *       id_instrumento:
 *         type: number
 *       fk_idCliente:
 *         type: number
 *       fk_idOsCalibracao:
 *         type: number
 *       fk_idTipo:
 *         type: number
 *       nSerie:
 *         type: string
 *       fabricante:
 *         type: string
 *       resolucao:
 *         type: string
 *       unidadeMedida:
 *         type: string
 *       faixaNominal:
 *         type: string      
 * 
 * /cadastroInstrumentos:
 *   post:
 *     tags:
 *       - Instrumentos
 *     summary: cadastro de instrumento
 *     description: cadastra um novo instrumento 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/instrumento'
 *     responses:
 *       200:
 *         description: Instrumento cadastrado
 *       400:
 *         description: Erro ao cadastrar instrumento
 *       500:
 *         description: Erro interno do servidor
 * 
 * /instrumentos:
 *   get:
 *     tags:
 *       - Instrumentos
 *     summary: retorna instrumentos
 *     description: retorna todos os instrumentos cadastrados
 *     responses:
 *       200:
 *         description: retorna todos os instrumentos
 *       500:
 *         description: Erro interno do servidor
 * 
 * /instrumentos/:id:
 *   put:
 *     tags:
 *       - Instrumentos
 *     summary: atualiza instrumento
 *     description: atualiza um instrumento cadastrado
 *     parameters:
 *       - in: path
 *         name: id
 *         type: number
 *         required: true
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/updateInstrumento'
 *     responses:
 *       200:
 *         description: Instrumento atualizado
 *       400:
 *         description: Erro ao atualizar instrumento
 *       404:
 *         description: Instrumento não encontrado
 *       500:
 *         description: Erro interno do servidor
 *
 */
