const { z } = require ("zod");

const validacaoPecas  = z.object({
    fk_idOs: z.number(),
    fk_idCliente: z.number(),
    nome: z.string().min(1).max(60),
    material: z.string().min(1).max(60),
    nDesenho: z.number(),
    descricao: z.string().min(1).max(300)
})

module.exports = validacaoPecas;