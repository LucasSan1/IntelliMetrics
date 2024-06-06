/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas aos usuário
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 * definitions:
 *  usuario:
 *     type: object
 *     properties:
 *       nome:
 *         type: string
 *         pattern: auristelio 
 *       email:
 *         type: string
 *         pattern: auristelio@sp.senai.br
 *       cargo:
 *         type: string
 *         pattern: gestor/tecnico
 *         
 *  email: 
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       
 *  senha:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       senha:
 *         type: string
 * 
 *  login:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       senha:
 *         type: string
 *  
 * /newUser:
 *   post:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       409:
 *         description: Este e-mail já está em uso
 *       500:
 *         description: Erro interno do servidor
 * 
 * /allUsers:
 *   get:
 *     tags:
 *       - Users
 *     summary: retorna usuário
 *     description: retorna todos os usuários cadastrados
 *     responses:
 *       200:
 *         description: Retorna todos os usuários
 *       401:
 *         description: Usuário não autorizado
 *       500:
 *         description: Erro interno do servidor
 * 
 * /user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     summary: retorna dados
 *     description: retorna os dados do usuário com base em um id especifico
 *     parameters:
 *       - in: path
 *         name: id
 *         type: number
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna o usuário correspondente ao id fornecido.
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /disableUser:
 *   put:
 *     security:
*       - bearerAuth: []
 *     tags:
 *       - Users 
 *     summary: desativa o usuario
 *     description: muda o status do usuario para desativado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/email'
 *     responses:
 *       200:
 *         description: Usuário desativado
 *       404:
 *         description: Usuário já esta desativado
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       500:
 *         description: Erro interno do servidor
 * 
 * /enableUser:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users 
 *     summary: ativa o usuario
 *     description: muda o status do usuario para ativado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/email'
 *     responses:
 *       200:
 *         description: Usuário ativado
 *       404:
 *         description: Usuário já esta ativado
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       500:
 *         description: Erro interno do servidor
 * 
 * /updatePass:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     summary: atualiza a senha
 *     description: atualiza a senha do usuario no banco
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/senha'
 *     responses:
 *       200:
 *         description: Senha atualizada
 *       400:
 *         description: Não foi possivel redefinir senha
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       404:
 *         description: Usuario Não Encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 * 
 * /user/login:
 *   put:
 *     tags:
 *       - Users
 *     summary: autentica o usuario
 *     description: gera um token de autenticação para o usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/senha'
 *     responses:
 *       200:
 *         description: Gera o token
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       500:
 *         description: Erro interno do servidor
 * 
 * 
 * /updateUser:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     summary: atualiza os dados 
 *     description: atualiza os dados do usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/usuario'
 *     responses:
 *       200:
 *         description: Usuario atualizado
 *       400:
 *         description: Erro ao atualizar usuário
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       404:
 *         description: Usuario Não Encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 * /logout:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     summary: atualiza os dados 
 *     description: atualiza os dados do usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/email'
 *     responses:
 *       200:
 *         description: Usuário desconectado
 *       400:
 *         description: Erro ao desconectar
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token invalido
 *       404:
 *         description: Usuario Não Encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 */
