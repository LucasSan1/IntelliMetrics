/**
 * @swagger
 * tags:
 *   - name: cliente
 *     description: Operações relacionadas aos clientes
 * definitions:
 *  cliente:
 *     type: object
 *     properties:
 *       nomeEmpresa:
 *         type: string
 *       representante:
 *         type: string
 *       email:
 *          type: string
 *       telefone:
 *          type: string
 *       endereco:
 *          type: string
 *       cnpj:
 *          type: string
 *       status:
 *          type: string
 * 
 * /cadastroCliente:
 *   post:
 *     tags:
 *       - cliente
 *     summary: cadastro de clientes
 *     description: cadastra um novo cliente no banco de dados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/cliente'
 *     responses:
 *       200:
 *         description: Cliente cadastrado
 *       400:
 *         description: Erro ao cadastrar cliente
 *       409:
 *         description: Este cliente já está cadastrado
 *       500:
 *         description: Erro interno do servidor
 * 
 * /clientes:
 *  get:
 *    tags:
 *      - cliente
 *    summary: mostrar cliente
 *    description: mostra todos os clientes cadastrados
 *    requestBody:
 *       required: false
 *    responses:
 *      200:
 *        description: Mostra todos os clientes
 *      500:
 *        description: Erro interno do servidor
 *
 */
