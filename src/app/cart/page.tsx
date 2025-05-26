"use client";
import { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function ShoppingCart() {
    // 商品列表狀態
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "商品 A", price: 100, quantity: 0 },
        { id: 2, name: "商品 B", price: 200, quantity: 0 },
        { id: 3, name: "商品 C", price: 300, quantity: 0 },
    ]);

    // 總金額狀態
    const [total, setTotal] = useState<number>(0);

    // 更新商品數量
    const updateQuantity = (id: number, quantity: number) => {

        setProducts(
            // 遍歷 products 陣列每一個商品 類似for迴圈
            products.map((product) =>
                // 如果商品 id 與要更新的 id 相同，則更新數量，否則保持原樣
                product.id === id ? { ...product, quantity } : product
            )
        );

    };

    // 計算總金額
    const calculateTotal = () => {
        let sum = 0; // 用來累加總金額
        for (const product of products) {
            sum += product.price * product.quantity;
        }
        setTotal(sum); // 設定總金額
    };

    return (
        <Card title="購物車" className="shadow-lg rounded-xl bg-slate-50">
            <div className="flex flex-col overflow-x-auto">
                {/* 標題列 */}
                <div className="flex flex-row items-center font-bold text-base border-b py-2 bg-gray-100">
                    <div className="flex-1 text-left pl-2">商品名稱</div>
                    <div className="flex-1 text-blue-700 text-center">單價</div>
                    <div className="flex-1 text-center">數量</div>
                    <div className="flex-1 text-green-700 text-center">小計</div>
                </div>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-row items-center rounded-lg shadow mb-2 bg-white gap-2 p-2"
                    >
                        <div className="flex-1 font-bold">{product.name}</div>
                        <div className="flex-1 text-blue-600 text-center">${product.price}</div>
                        <div className="flex-1 flex justify-center">
                            <InputNumber
                                value={product.quantity}
                                onValueChange={(e) => updateQuantity(product.id, e.value || 0)}
                                showButtons
                                min={0}
                                max={10}
                                className="w-20"
                            />
                        </div>
                        <div className="flex-1 text-green-600 font-semibold text-center">
                            小計: ${product.price * product.quantity}
                        </div>
                    </div>
                ))}
                <div className="flex flex-col items-center mt-6 gap-3">
                    <Button label="計算總金額" onClick={calculateTotal} className="rounded-full px-8 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow" />
                    <div className="text-2xl font-bold text-green-600">總金額: ${total}</div>
                </div>
            </div>
        </Card>
    );
}
