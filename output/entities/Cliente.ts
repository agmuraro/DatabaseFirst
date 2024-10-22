import { Column, Entity, Index, OneToMany } from "typeorm";
import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";

@Index("Cliente_pkey", ["id"], { unique: true })
@Index("Cliente_email_key", ["email"], { unique: true })
@Entity("Cliente", { schema: "public" })
export class Cliente {
  @Column("text", { primary: true, name: "_id" })
  id: string;

  @Column("text", { name: "nome", default: () => "'fulano'" })
  nome: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "senha" })
  senha: string;

  @Column("text", { name: "telefone" })
  telefone: string;

  @Column("timestamp without time zone", {
    name: "data_inscricao_cl",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataInscricaoCl: Date;

  @OneToMany(() => Endereco, (endereco) => endereco.cliente)
  enderecos: Endereco[];

  @OneToMany(() => Pedido, (pedido) => pedido.user)
  pedidos: Pedido[];
}
