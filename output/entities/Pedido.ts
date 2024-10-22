import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cliente } from "./Cliente";
import { PedidoItem } from "./PedidoItem";

@Index("Pedido_pkey", ["id"], { unique: true })
@Entity("Pedido", { schema: "public" })
export class Pedido {
  @Column("text", { primary: true, name: "_id" })
  id: string;

  @Column("timestamp without time zone", { name: "data_pedido" })
  dataPedido: Date;

  @Column("double precision", { name: "preco_pedido", precision: 53 })
  precoPedido: number;

  @Column("double precision", { name: "desconto", precision: 53 })
  desconto: number;

  @Column("double precision", { name: "preco_final", precision: 53 })
  precoFinal: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Cliente;

  @OneToMany(() => PedidoItem, (pedidoItem) => pedidoItem.pedido)
  pedidoItems: PedidoItem[];
}
