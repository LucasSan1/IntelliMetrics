
 /**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Operações relacionadas a administradores do sistema
 *
 * /admin/login:
 *   put:
 *     tags:
 *       - Admin
 *     summary: Logar como admin.
 *     description: Verifica se o admin está no banco de dados e devolve o token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/adminModelo'
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