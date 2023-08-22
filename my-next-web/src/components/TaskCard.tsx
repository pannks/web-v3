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
import {
    compareAsc,
    compareDesc,
    formatDistance,
    formatDistanceStrict,
} from "date-fns";

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
    let fullTime,
        dsTime = null;
    let isLate = false;
    if (task.due) {
        const time = convertFbTimeToDate(task.due);
        fullTime = formatLocalTime(time);
        dsTime = formatDistanceStrict(time, new Date(), { addSuffix: true });
        isLate = Boolean(compareAsc(time, new Date()) - 1);
    }

    return (
        <div
            className={styles.card}
            style={{
                borderLeft: `0.6rem solid ${statusInfo.fg}`,
                backgroundColor: `${statusInfo.bg}`,
            }}
        >
            <div className={styles.icon} style={{ color: statusInfo.fg }}>
                {statusInfo.i?.()}
            </div>
            <div>
                {task.status === "DONE" ? (
                    <h4 className={styles.name}>
                        <s>{task.name}</s>
                    </h4>
                ) : (
                    <h4 className={styles.name}>{task.name}</h4>
                )}
                <p className={styles.desc}>{task.desc}</p>
            </div>
            <div className={styles.due}>
                {task.status === "DONE" ? (
                    <p>
                        <span>DONE</span>
                    </p>
                ) : (
                    <p className={isLate ? styles.late : ""}>
                        {dsTime}
                        <span>{fullTime}</span>
                    </p>
                )}
            </div>
            {canEdit && (
                <>
                    <h4>{task.subj}</h4>
                    <div>
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
