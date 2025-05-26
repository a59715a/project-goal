"use client";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    password: string;
    lastLogin: string;
}

export default function UserList() {
    // 使用者資料
    const [users] = useState<User[]>([
        {
            id: 1,
            name: "王小明",
            email: "ming@example.com",
            password: "123456",
            status: "active",
            lastLogin: "2024-03-15 14:30",
        },
        {
            id: 2,
            name: "李小華",
            email: "hua@example.com",
            password: "123456",
            status: "active",
            lastLogin: "2024-03-15 13:45",
        },
        {
            id: 3,
            name: "張小美",
            email: "mei@example.com",
            password: "123456",
            status: "active",
            lastLogin: "2024-03-14 09:20",
        },
    ]);

    // 狀態標籤模板
    const statusTemplate = (rowData: User) => {
        return (
            <Tag
                value={rowData.status === "active" ? "啟用" : "停用"}
                severity={rowData.status === "active" ? "success" : "danger"}
            />
        );
    };

    // 操作按鈕模板
    const actionTemplate = (rowData: User) => {
        return (
            <div className="flex gap-2">
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-text p-button-sm"
                    tooltip="編輯"
                    onClick={() => alert(`編輯 ${rowData.name}`)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-text p-button-danger p-button-sm"
                    tooltip="刪除"
                    onClick={() => alert(`刪除 ${rowData.name}`)}
                />
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable
                value={users}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="顯示第 {first} 到 {last} 筆，共 {totalRecords} 筆"
                className="p-datatable-sm"
            >
                <Column
                    field="id"
                    header="ID"
                    sortable
                    style={{ width: "5%" }}
                ></Column>
                <Column
                    field="name"
                    header="姓名"
                    sortable
                    style={{ width: "15%" }}
                ></Column>
                <Column
                    field="email"
                    header="電子郵件"
                    sortable
                    style={{ width: "25%" }}
                ></Column>
                <Column
                    field="password"
                    header="密碼"
                    sortable
                    style={{ width: "15%" }}
                ></Column>
                <Column
                    field="status"
                    header="狀態"
                    body={statusTemplate}
                    sortable
                    style={{ width: "15%" }}
                ></Column>
                <Column
                    field="lastLogin"
                    header="最後登入"
                    sortable
                    style={{ width: "15%" }}
                ></Column>
                <Column
                    body={actionTemplate}
                    header="操作"
                    style={{ width: "10%" }}
                ></Column>
            </DataTable>
        </div>
    );
}
