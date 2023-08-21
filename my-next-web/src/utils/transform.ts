import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import {
    BsFillFileEarmarkFill,
    BsFillFileEarmarkPdfFill,
    BsFillFileEarmarkPlayFill,
    BsFillFileEarmarkSpreadsheetFill,
    BsFillFileEarmarkTextFill,
    BsGlobeAmericas,
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
            return { i: BsFillFileEarmarkTextFill, c: "#4fc3f7" };
        case "xls":
            return { i: BsFillFileEarmarkSpreadsheetFill, c: "#66bb6a" };
        case "canva":
            return { i: SiCanva, c: "#ea80fc" };
        case "pdf":
            return { i: BsFillFileEarmarkPdfFill, c: "#f44336" };
        case "vdo":
            return { i: BsFillFileEarmarkPlayFill, c: "#ff5722" };
        case "drive":
            return { i: SiGoogledrive, c: "#ffa726" };
        case "web":
            return { i: BsGlobeAmericas, c: "#8bc34a" };
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
            };
        case "PROGRESS":
            return {
                name: "In Progress",
                fg: "var(--c-chip-14)",
                bg: "var(--c-bg-progress)",
            };
        case "DONE":
            return {
                name: "Done",
                fg: "var(--c-chip-12)",
                bg: "var(--c-bg-done)",
            };
        case "CANCEL":
            return {
                name: "Cancel",
                fg: "var(--c-chip-1)",
                bg: "var(--c-bg-cancel)",
            };

        default:
            return {
                name: "none",
                fg: "var(--c-chip-17)",
                bg: "var(--c-grey-100)",
            };
    }
}
