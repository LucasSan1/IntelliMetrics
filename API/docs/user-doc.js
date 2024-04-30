/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas aos usuário
 * definitions:
 *  usuario:
 *     type: object
 *     properties:
 *       nome:
 *         type: string
 *       email:
 *         type: string
 *       cargo:
 *         type: string
 * 
 * /cadastroMembro:
 *   post:
 *     tags:
 *       - Users
 *     summary: cadastro de usuario
 *     description: cadastra um novo usuario no banco de dados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/usuario'
 *     responses:
 *       200:
 *         description: Usuário cadastrado
 *       400:
 *         description: Erro ao cadastrar usuário
 *       409:
 *         description: Este e-mail já está em uso
 *       500:
 *         description: Erro interno do servidor
 * 
 * /usuarios:
 *  get:
 *    tags:
 *      - Users
 *    summary: retorna usuário
 *    description: retorna todos os usuários cadastrados
 *    responses:
 *      200:
 *        description: Retorna todos os usuários
 *      500:
 *        description: Erro interno do servidor
 * 
 * /usuario/:id:
 *  get:
 *    tags:
 *      - Users
 *    summary: retorna dados
 *    description: retorna os dados do usuário com base em um id especifico
 *    parameters:
 *      - in: path
 *        name: id
 *        type: number
 *        required: true
 *    responses:
 *      200:
 *        description: Retorna o usuário correspondente ao id fornecido.
 *      404:
 *        description: Usuário não encontrado
 *      500:
 *        description: Erro interno do servidor.
 * 
 * /usuarioD/:id:
 *   delete:
 *     tags:
 *       - Users 
 *     summary: remove o usuário
 *     description: remove o usuário do banco de dados
 *     parameters:
 *       - in: path
 *         name: id
 *         type: number
 *         required: true
 *     responses:
 *       200:
 *         description: Usuário deletado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 */
