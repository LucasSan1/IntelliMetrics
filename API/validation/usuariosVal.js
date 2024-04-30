const { z } = require ("zod");

const validacaoUsuario  = z.object({
    nome: z.string().min(1).max(60),
    email: z.string().email("E-mail inválido!").min(1).max(60),
    cargo: z.enum(['gestor', 'tecnico']),
    status: z.enum(['ativo', 'inativo']).default('ativo') 
})

module.exports = validacaoUsuario;