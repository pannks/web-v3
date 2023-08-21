import React from "react";
import styles from "./TaskCard.module.scss";
import { Task } from "@/utils/dataType";
import {
    convertFbTimeToDate,
    formatLocalTime,
    getStatusInfo,
} from "@/utils/transform";
import Badge from "./Badge";
import { HiMiniTrash } from "react-icons/hi2";

type TaskCardProps = {
    task: Task;
    canEdit?: boolean;
    onChangeStatus?: (e: string) => void;
    onDeleteTask?: (id: string) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({
    task,
    canEdit = false,
    onChangeStatus = () => null,
    onDeleteTask = () => null,
}) => {
    const statusInfo = getStatusInfo(task.status);
    let readTime = null;
    if (task.due) {
        const time = convertFbTimeToDate(task.due);
        readTime = formatLocalTime(time);
    }

    return (
        <div
            className={styles.card}
            style={{
                borderLeft: `0.6rem solid ${statusInfo.fg}`,
                backgroundColor: `${statusInfo.bg}`,
            }}
        >
            <div>
                <h4 className={styles.name}>{task.name}</h4>
                <p className={styles.desc}>{task.desc}</p>
            </div>
            <div className={styles.due}>
                <p>{readTime}</p>
            </div>
            {canEdit && (
                <>
                    <div>
                        <h4>{task.subj}</h4>
                        <select
                            defaultValue={task.status}
                            className={styles.select}
                            id="status"
                            onChange={(e) => onChangeStatus(e.target.value)}
                            style={{ backgroundColor: statusInfo.fg }}
                        >
                            <option value="TODO">To Do</option>
                            <option value="PROGRESS">In Progress</option>
                            <option value="DONE">Done</option>
                            <option value="CANCEL">Cancel</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={() => onDeleteTask(task.id)}>
                            <HiMiniTrash />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskCard;
