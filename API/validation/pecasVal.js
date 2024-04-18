const { z } = require ("zod");

const validacaoPecas  = z.object({

    fk_idOs: z.number(),
    fk_idCliente: z.number(),
    nome: z.string().min(1).max(60),
    material: z.string().min(1).max(60),
    nDesenho: z.number(),
    descricao: z.string().min(1).max(300)

    // fk_idOs int NOT NULL
    // fk_idCliente int NOT NULL,
	// nome varchar(60) NOT NULL,
    // material varchar(60) NOT NULL,
    // nDesenho int NOT NULL,
    // descricao varchar(300),

    // nomeEmpresa: z.string().min(1).max(60),
    // representante: z.string().min(1).max(60),
    // email: z.string().email("E-mail inválido!").min(1).max(60),
    // telefone: z.string().length(11, "Numero inválido!"),
    // endereco: z.string().min(1).max(100),
    // cnpj: z.string().length(14),
    // status: z.enum(['ativo', 'inativo']).default('ativo')
    
})


// const validationTiming = z.object({
//     data: z.date({ invalid_type_error: "Precisa ser do tipo date"})
// })


module.exports = validacaoPecas;