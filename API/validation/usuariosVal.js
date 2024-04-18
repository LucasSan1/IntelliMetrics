const { z } = require ("zod");

const validacaoUsuario  = z.object({
    nome: z.string().min(1).max(60),
    email: z.string().email("E-mail inválido!").min(1).max(60),
    cargo: z.string().enum(['gestor', 'tecnico']),
    status: z.enum(['ativo', 'inativo']).default('ativo')
    
})


// const validationTiming = z.object({
//     data: z.date({ invalid_type_error: "Precisa ser do tipo date"})
// })

module.exports = validacaoUsuario;