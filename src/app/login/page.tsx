"use client";
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

interface FormData {
    email: string; // 帳號
    password: string; // 密碼
    rememberMe: boolean; // 記住我
}
export default function LoginForm() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(
            `登入資訊：\nEmail：${formData.email}\n密碼：${formData.password}\n記住我：${formData.rememberMe}\n\n王大明   歡迎回來！！`
        );
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card className="w-96" title="登入">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <InputText
                            id="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block font-medium text-gray-700"
                        >
                            密碼
                        </label>
                        <InputText
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            inputId="rememberMe"
                            checked={formData.rememberMe}
                            onChange={(e) =>
                                setFormData({ ...formData, rememberMe: e.checked ?? false })
                            }
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                            記住我
                        </label>
                    </div>
                    <Button
                        label="登入"
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                    />
                </form>
            </Card>
        </div>
    );
}
