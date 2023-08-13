"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { useUser } from "@/contexts/UserContext";
import Spinner from "@/components/Spinner";
import AddFileForm from "./AddFileForm";
import FilePreview from "./FilePreview";
import Modal from "@/components/Modal";

const ManagePage = () => {
    const { user, loading } = useUser();
    const [showAddForm, setShowAddForm] = useState(false);

    return (
        <div className={styles.page}>
            {loading && <Spinner />}
            {!user && !loading && <div>Unauthorized [403]</div>}
            {user && (
                <>
                    <div
                        className={styles.headerCollapse}
                        onClick={() => setShowAddForm(!showAddForm)}
                    >
                        <h5>เพิ่มไฟล์ 1/66</h5>
                    </div>
                    {showAddForm && (
                        <Modal onClose={() => setShowAddForm(false)}>
                            <AddFileForm />
                        </Modal>
                    )}
                    <h5>รายการทั้งหมด</h5>
                    <FilePreview />
                </>
            )}
        </div>
    );
};

export default ManagePage;
