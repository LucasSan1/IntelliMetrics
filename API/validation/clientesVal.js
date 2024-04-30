const { z } = require ("zod");

const validacaoCliente  = z.object({
    nomeEmpresa: z.string().min(1).max(60),
    representante: z.string().min(1).max(60),
    email: z.string().email("E-mail inválido!").min(1).max(60),
    telefone: z.string().length(11, "Numero inválido!"),
    endereco: z.string().min(1).max(100),
    cnpj: z.string().length(14),
    status: z.enum(['ativo', 'inativo']).default('ativo')
})

module.exports = validacaoCliente;