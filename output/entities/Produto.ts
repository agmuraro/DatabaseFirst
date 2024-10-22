import { Column, Entity, Index, OneToMany } from "typeorm";
import { PedidoItem } from "./PedidoItem";

@Index("Produto_pkey", ["id"], { unique: true })
@Entity("Produto", { schema: "public" })
export class Produto {
  @Column("text", { primary: true, name: "_id" })
  id: string;

  @Column("text", { name: "price" })
  price: string;

  @Column("text", { name: "pricepix" })
  pricepix: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("text", { name: "imageUrl", nullable: true })
  imageUrl: string | null;

  @Column("timestamp without time zone", {
    name: "updatedAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp without time zone", {
    name: "createdAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("integer", { name: "estoque" })
  estoque: number;

  @OneToMany(() => PedidoItem, (pedidoItem) => pedidoItem.produto)
  pedidoItems: PedidoItem[];
}
