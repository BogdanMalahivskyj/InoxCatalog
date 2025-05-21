import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    title_ua: "Стелаж 4 полиці",
    title_en: "4-Shelf Rack",
    size: "800×700×1800 мм",
    quantity: 1,
    price: 7800,
    image: "/images/rack.jpg"
  },
  {
    id: 2,
    title_ua: "Візок для гастроємностей",
    title_en: "Gastronorm Trolley",
    size: "430×650×1800 мм",
    quantity: 1,
    price: 6500,
    image: "/images/trolley.jpg"
  }
];

export default function Catalog() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="rounded-2xl shadow-md">
          <Image
            src={product.image}
            alt={product.title_ua}
            width={300}
            height={300}
            className="object-contain w-full h-64"
          />
          <CardContent className="space-y-2">
            <div className="font-semibold text-lg">
              {product.title_ua} / {product.title_en}
            </div>
            <div className="text-sm text-muted-foreground">Розмір / Size: {product.size}</div>
            <div className="text-sm">Кількість / Qty: {product.quantity}</div>
            <div className="text-base font-bold">{product.price} грн</div>
            <Button className="w-full mt-2">Замовити / Order</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}