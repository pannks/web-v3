"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { useUser } from "@/contexts/UserContext";
import Spinner from "@/components/Spinner";
import AddFileForm from "./AddFileForm";
import FilePreview from "./FilePreview";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const ManagePage = () => {
    const { user, loading } = useUser();
    const [showAddForm, setShowAddForm] = useState(false);

    return (
        <div className={styles.page}>
            <h4 className={styles.heading}>Manage Files</h4>
            {loading && <Spinner />}
            {!user && !loading && <div>Unauthorized [403]</div>}
            {user && (
                <>
                    <div
                        className={styles.headerCollapse}
                        onClick={() => setShowAddForm(!showAddForm)}
                    >
                        <h5>เพิ่มไฟล์</h5>
                        {showAddForm ? <HiChevronUp /> : <HiChevronDown />}
                    </div>
                    {showAddForm && <AddFileForm />}
                    <h5>รายการทั้งหมด</h5>
                    <FilePreview />
                </>
            )}
        </div>
    );
};

export default ManagePage;
