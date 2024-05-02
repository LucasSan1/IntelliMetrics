/**
 * @swagger
 * tags:
 *   - name: Relatorios
 *     description: Operações relacionadas aos relatorios de calibração
 * definitions:
 *  relatorio:
 *     type: object
 *     properties:
 *       fk_idCliente:
 *         type: integer
 *       fk_idUsuario:
 *         type: integer
 *       titulo:
 *         type: string
 *       codigoOrdem:
 *         type: string
 *       reponsavel:
 *         type: string
 *       tipo:
 *         type: string
 *       peca:
 *         type: string
 *       dataInicio:
 *         type: string
 *       dataTermino:
 *         type: string
 *       descricao:
 *         type: string
 *             
 * 
 * /registerReport:
 *   post:
 *     tags:
 *       - Relatorios
 *     summary: cadastro de relatorio
 *     description: cadastra um novo relatorio de calibração no banco de dados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/relatorio'
 *     responses:
 *       200:
 *         description: Relatorio cadastrado com sucesso
 *       400:
 *         description: Erro ao cadastrar relatorio
 *       409:
 *         description: ID ja cadastrada
 *       500:
 *         description: Erro interno do servidor
 * 
 * /allReports:
 *  get:
 *    tags:
 *      - Relatorios
 *    summary: retorna relatorios
 *    description: retorna todos os relatorios cadastrados
 *    responses:
 *      200:
 *        description: Retorna todos os relatorios
 *      500:
 *        description: Erro interno do servidor
 * 
 * /report/{id}:
 *  get:
 *    tags:
 *      - Relatorios
 *    summary: retorna dados do relatorio
 *    description: retorna os dados do relatorio com base em um id especifico
 *    parameters:
 *      - in: path
 *        name: id
 *        type: number
 *        required: true
 *    responses:
 *      200:
 *        description: Retorna os dados do relatorio correspondente ao id fornecido.
 *      404:
 *        description: Relatorio inexistente
 *      500:
 *        description: Erro interno do servidor.
 * 
 * /reportUp/{id}:
 *   put:
 *     tags:
 *       - Relatorios
 *     summary: atualiza o relatorio
 *     description: atualiza os dados do relatorio especificado pelo id 
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
 *              $ref: '#/definitions/relatorio'
 *     responses:
 *       200:
 *         description: Relatório atualizado
 *       404:
 *         description: Relatório não encontrado
 *       409:
 *         description: Erro ao atualizar relatório
 *       500:
 *         description: Erro interno do servidor
 *
 */
