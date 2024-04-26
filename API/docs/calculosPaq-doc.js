/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Operações relacionadas a administradores do sistema
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
