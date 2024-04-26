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
 * /incertezaPaquimetro:
 *   post:
 *     tags:
 *       - incerteza Paq
 *     summary: incerteza do paq .
 *     description: Tio paulo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/incertezaPaq'
 *     responses:
 *       200:
 *         description: Administrador logado com sucesso(retorna o token).
 *       401:
 *         description: Senha incorreta.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro no banco de dados.
 *
 *
 */
