const { z } = require ("zod");

const validacaoInstrumentos  = z.object({
    fk_idCliente: z.number(),
    fk_idOs: z.number(),
    fk_idCategoria: z.number(),
    nome: z.string().min(1).max(60),
    nSerie: z.number(),
    identificacaoCliente: z.string().min(1).max(50),
    fabricante: z.string().min(1).max(60),
    faixaNominalNum: z.decimal(4,2),
    faixaNominalUni: z.enum(['mm', 'pol']),
    divisaoResolucaoNum: z.decimal(4,2),
    divisaoResolucaoUni: z.enum(['mm', 'pol']),
    orgaoResponsavel: z.string().min().max(60)
})


// const validationTiming = z.object({
//     data: z.date({ invalid_type_error: "Precisa ser do tipo date"})
// })


module.exports = validacaoInstrumentos;