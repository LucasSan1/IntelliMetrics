/**
 * @swagger
 * tags:
 *   - name: Peças
 *     description: Todas as operações referentes a peças
 * definitions:
 *   peca:
 *     type: object
 *     properties:
 *       idOsMedicao:
 *         type: number
 *       idCliente:
 *         type: number
 *       nome:
 *         type: string
 *       material:
 *         type: string
 *       nDesenho:
 *         type: number
 *       descricao:
 *         type: string
 * 
 * 
 * /cadastroPeca:
 *   post:
 *     tags:
 *       - Peças
 *     summary: cadastro de peças
 *     description: cadastra uma nova peça 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/peca'
 *     responses:
 *       200:
 *         description: Peça cadastrada
 *       400:
 *         description: Erro ao cadastrar peça
 *       500:
 *         description: Erro interno do servidor
 * 
 * /pecas:
 *   get:
 *     tags:
 *       - Peças
 *     summary: retorna peças
 *     description: retorna todos as peças cadastradas
 *     responses:
 *       200:
 *         description: Retorna todas as peças cadastradas
 *       500:
 *         description: Erro interno do servidor
 * 
 * /pecas/:id:
 *   get:
 *     tags:
 *       - Peças
 *     summary: retorna as informaçoes de uma peça
 *     description: retorna as informaçoes de  uma peça com base em um id especifico
 *     parameters:
 *       - in: path
 *         name: id
 *         type: number
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna as informações da peça
 *       404:
 *         description: Peça não encontrada
 *       500:
 *         description: Erro interno do servidor
 *
 * 
 * /pecasUpdate/:id:
 *   put:
 *     tags:
 *       - Peças
 *     summary: atualizar peça
 *     description: atualiza as informações de uma peça
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
 *              $ref: '#/definitions/peca'
 *     responses:
 *      200:
 *        description: Peça atualizada com sucesso
 *      400:
 *        description: Erro ao atualizar peça
 *      404:
 *        description: Peça não encontrada
 *      500:
 *        description: Erro interno do servidor
 */