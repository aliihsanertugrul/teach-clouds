import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import ManagerToolbar from "./manager-toolbar";

const ManagerList = ({ data }) => {
  const { content, totalPages, number, size } = data;
// console.log("data",data)

const handleToolBar = (row) => {
  return <ManagerToolbar row={row}/>
}
  return (
    <div className="container">
      <Link href="/dashboard/manager/new" className="btn btn-primary mb-3">
        New
      </Link>
      <DataTable
        title="Manager List"
        dataSource={content}
        dataKey="id"
        pagination={true}
        totalPages={totalPages}
        pageNumber={number}
        pageSize={size}
      >
        <Column index={true} title="#" />
        <Column title="First Name" field="name" />
        <Column title="Last Name" field="surname" />
        <Column title="Username" field="username" />
        <Column title="Tools" template={handleToolBar} />
      </DataTable>
    </div>
  );
};

export default ManagerList;
