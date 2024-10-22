import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

@Index("PedidoItem_pkey", ["id"], { unique: true })
@Entity("PedidoItem", { schema: "public" })
export class PedidoItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "quantidade" })
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.pedidoItems, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "pedidoId", referencedColumnName: "id" }])
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.pedidoItems, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "produtoId", referencedColumnName: "id" }])
  produto: Produto;
}
