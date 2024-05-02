const { z } = require ("zod");

const validacaoInstrumentos  = z.object({
    fk_idCliente: z.number(),
    fk_idOs: z.number(),
    fk_idCategoria: z.number(),
    nome: z.string().min(1).max(60),
    nSerie: z.number(),
    identificacaoCliente: z.string().min(1).max(50),
    fabricante: z.string().min(1).max(60),
    faixaNominalNum: z.number(),
    faixaNominalUni: z.enum(['mm', 'pol']),
    divisaoResolucaoNum: z.number(),
    divisaoResolucaoUni: z.enum(['mm', 'pol']),
    orgaoResponsavel: z.string().min(1).max(60)
})

module.exports = validacaoInstrumentos;