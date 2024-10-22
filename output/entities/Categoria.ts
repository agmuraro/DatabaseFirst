import { Column, Entity, Index } from "typeorm";

@Index("Categoria_pkey", ["id"], { unique: true })
@Entity("Categoria", { schema: "public" })
export class Categoria {
  @Column("text", { primary: true, name: "_id" })
  id: string;

  @Column("text", { name: "descricao_cat" })
  descricaoCat: string;
}
