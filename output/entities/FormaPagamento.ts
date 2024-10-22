import { Column, Entity, Index } from "typeorm";

@Index("FormaPagamento_pkey", ["id"], { unique: true })
@Entity("FormaPagamento", { schema: "public" })
export class FormaPagamento {
  @Column("text", { primary: true, name: "_id" })
  id: string;

  @Column("text", { name: "descricao_pag" })
  descricaoPag: string;
}
