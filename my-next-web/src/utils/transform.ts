import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import {
    BsCircle,
    BsFillCheckCircleFill,
    BsFillFileEarmarkFill,
    BsFillFileEarmarkPdfFill,
    BsFillFileEarmarkPlayFill,
    BsFillFileEarmarkSpreadsheetFill,
    BsFillFileEarmarkTextFill,
    BsGlobeAmericas,
    BsRecordCircle,
    BsXCircle,
} from "react-icons/bs";
import { SiCanva, SiGoogledrive } from "react-icons/si";

export function convertFbTimeToDate(timestamp: Timestamp) {
    return timestamp.toDate();
}

export function formatLocalTime(time: Date) {
    return format(new Date(time), "d MMM, HH:mm");
}

export function getFileIcon(fileType: string) {
    switch (fileType) {
        case "doc":
            return { i: BsFillFileEarmarkTextFill, c: "#A7EDE7" };
        case "xls":
            return { i: BsFillFileEarmarkSpreadsheetFill, c: "#A8DF8E" };
        case "canva":
            return { i: SiCanva, c: "#FFBDF7" };
        case "pdf":
            return { i: BsFillFileEarmarkPdfFill, c: "#FF6969" };
        case "vdo":
            return { i: BsFillFileEarmarkPlayFill, c: "#FD8D14" };
        case "drive":
            return { i: SiGoogledrive, c: "#FFE17B" };
        case "web":
            return { i: BsGlobeAmericas, c: "#CDE990" };
        default:
            return { i: BsFillFileEarmarkFill, c: "#c5c5c5" };
    }
}

export function getStatusInfo(statusType: string) {
    switch (statusType) {
        case "TODO":
            return {
                name: "To Do",
                fg: "var(--c-chip-7)",
                bg: "var(--c-bg-todo)",
                i: BsCircle,
            };
        case "PROGRESS":
            return {
                name: "In Progress",
                fg: "var(--c-chip-14)",
                bg: "var(--c-bg-progress)",
                i: BsRecordCircle,
            };
        case "DONE":
            return {
                name: "Done",
                fg: "var(--c-chip-12)",
                bg: "var(--c-bg-done)",
                i: BsFillCheckCircleFill,
            };
        case "CANCEL":
            return {
                name: "Cancel",
                fg: "var(--c-chip-1)",
                bg: "var(--c-bg-cancel)",
                i: BsXCircle,
            };

        default:
            return {
                name: "none",
                fg: "var(--c-chip-17)",
                bg: "var(--c-grey-100)",
            };
    }
}
