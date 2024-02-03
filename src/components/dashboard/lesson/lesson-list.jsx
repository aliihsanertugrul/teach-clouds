import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import LessonToolbar from "./lesson-toolbar";

const LessonList = ({ data }) => {
	
	const { content, totalPages, number, size } = data;

	const handleComp = (row) => {
		if(row.compulsory){
			return "True"
		}else{
			return "False"
		}
		
	}

	const handleToolbar = (row) => {
		
		return <LessonToolbar row={row}/>;
	};

	return (
		<div className="container">
			<Link href="/dashboard/lesson/new" className="btn btn-primary mb-3">
				New
			</Link>
			<DataTable
				title="Lesson List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				
				<Column title="Lesson Name" field="lessonName" />
				<Column title="Compulsory" template={handleComp} />
				<Column title="Credit Score" field="creditScore" />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default LessonList;
