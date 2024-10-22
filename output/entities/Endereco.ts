import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cliente } from "./Cliente";

@Index("Endereco_pkey", ["id"], { unique: true })
@Entity("Endereco", { schema: "public" })
export class Endereco {
  @Column("text", { primary: true, name: "_id" })
  id: string;

  @Column("text", { name: "cep" })
  cep: string;

  @Column("text", { name: "numero" })
  numero: string;

  @Column("text", { name: "complemento", nullable: true })
  complemento: string | null;

  @Column("text", { name: "cidade" })
  cidade: string;

  @Column("text", { name: "estado" })
  estado: string;

  @Column("text", { name: "rua" })
  rua: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.enderecos, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "clienteId", referencedColumnName: "id" }])
  cliente: Cliente;
}
