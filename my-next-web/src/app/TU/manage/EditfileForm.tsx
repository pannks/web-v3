"use client";

import { useFiles } from "@/contexts/FilesContext";
import { File } from "@/utils/dataType";
import { updateFileById } from "@/utils/firebase";
import React, { useState } from "react";
import styles from "./EditFileForm.module.scss";

type EditFileFormProps = {
	file: File | undefined;
	onClose?: () => void;
};

const EditFileForm: React.FC<EditFileFormProps> = ({
	file,
	onClose = () => null,
}) => {
	const { revalidate } = useFiles();

	const id = file?.id;

	const [updatedFields, setUpdatedFields] = useState<{ [key: string]: any }>(
		{}
	);

	const onUpdateField = (field: keyof File, newValue: any) => {
		setUpdatedFields((prevFields) => ({
			...prevFields,
			[field]: newValue,
		}));
	};

	const onEditFile = async () => {
		if (id) {
			updateFileById(id, updatedFields);
			revalidate();
			onClose();
		}
	};

	if (file) {
		return (
			<div className={styles.form}>
				<h4>Edit File</h4>
				<label htmlFor="name">name</label>
				<input
					name="name"
					id="name"
					type="text"
					defaultValue={file.name}
					onChange={(e) => onUpdateField("name", e.target.value)}
				/>
				<label htmlFor="desc">คำอธิบาย</label>
				<input
					id="desc"
					type="text"
					onChange={(e) => onUpdateField("desc", e.target.value)}
					defaultValue={file.desc}
				/>
				<label htmlFor="subj">วิชา</label>
				<select
					id="subj"
					defaultValue={file.subj}
					onChange={(e) => onUpdateField("subj", e.target.value)}
				>
					<option value="_private">_private</option>
					<option value="JC461">JC461</option>
				</select>
				<label htmlFor="url">ลิงก์</label>
				<input
					id="url"
					type="url"
					onChange={(e) => onUpdateField("url", e.target.value)}
					defaultValue={file.url}
				/>
				<label htmlFor="type">ชนิดไฟล์</label>
				<select
					id="type"
					defaultValue={file.type}
					onChange={(e) => onUpdateField("type", e.target.value)}
				>
					<option value="doc">Google Docs</option>
					<option value="xls">Spread Sheet</option>
					<option value="pdf">PDF</option>
					<option value="vdo">VDO</option>
					<option value="canva">Canva</option>
					<option value="drive">Google Drive</option>
					<option value="web">Website</option>
				</select>
				<button onClick={onEditFile}>Update</button>
			</div>
		);
	} else {
		return <div>File not found</div>;
	}
};

export default EditFileForm;
