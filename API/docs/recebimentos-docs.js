/**
 * @swagger
 * tags:
 *   - name: Recebimentos
 *     description: Operações relacionadas aos recebimentos
 * definitions:
 *  recebimento:
 *     type: object
 *     properties:
 *       idOrdem:
 *         type: integer
 *       idUsuario:
 *         type: integer
 *       setor:
 *         type: string
 *       nProposta:
 *         type: integer
 *       nNotaFiscal:
 *         type: integer
 *       dataDeRecebimento:
 *         type: string
 *         pattern: 2024-03-01
 *       recebidoNaPrevisao:
 *         type: string
 *         pattern: sim/nao
 *       previsaoInicio:
 *         type: string
 *         pattern: 2024-03-01
 *       previsaoTermino:
 *         type: string
 *         pattern: 2024-03-01
 *       clienteConcorda:
 *         type: string
 *         pattern: sim/nao
 *       dataAssinatura:
 *         type: string
 *         pattern: 2024-06-01
 *       pessoaContatada:
 *         type: string
 *       dataContatada:
 *         type: string
 *         pattern: 2024-07-31
 *          
 *      
 * 
 * /registerReceipt:
 *   post:
 *     tags:
 *       - Recebimentos
 *     summary: cadastro de um recebimento
 *     description: cadastra um novo recebimento no banco de dados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/recebimento'
 *     responses:
 *       200:
 *         description: Recibo cadastrado com sucesso
 *       400:
 *         description: Erro ao cadastrar cliente
 *       409:
 *         description: Este cliente já está cadastrado
 *       500:
 *         description: Erro interno do servidor
 * 
 * /getAllReceipts:
 *  get:
 *    tags:
 *      - Recebimentos
 *    summary: retorna recebimentos
 *    description: retorna todos recebimentos cadastrados
 *    responses:
 *      200:
 *        description: Retorna todos os clientes
 *      500:
 *        description: Erro interno do servidor
 * 
 * /receipts/:id:
 *  get:
 *    tags:
 *      - Recebimentos
 *    summary: retorna dados de um recebimento
 *    description: retorna o recebimento com base em um id especifico
 *    parameters:
 *      - in: path
 *        name: id
 *        type: number
 *        required: true
 *    responses:
 *      200:
 *        description: Retorna o cliente correspondente ao id fornecido.
 *      404:
 *        description: Não existe cliente com esse ID no banco de dados.
 *      500:
 *        description: Erro interno do servidor.
 * 
 * /updateReceipt/:id:
 *   put:
 *     tags:
 *       - Recebimentos
 *     summary: atualiza os dados recebimentos
 *     description: atualiza o status do recebimentos
 *     parameters:
 *      - in: path
 *        name: id
 *        type: number
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/recebimento'
 *     responses:
 *      200:
 *        description: Cliente desativado com sucesso
 *      400:
 *        description: Erro ao desativar cliente
 *      409:
 *        description: Este cliente já está desativado
 *      500:
 *        description: Erro interno do servidor
 * 
 * 
 *
 */
