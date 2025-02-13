import { format, fromUnixTime } from "date-fns";
import th from "date-fns/locale/th";
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
    BsXCircle
} from "react-icons/bs";
import {
    HiOutlineDocumentText,
    HiOutlineGlobeEuropeAfrica,
    HiOutlinePresentationChartLine,
    HiOutlineTableCells
} from "react-icons/hi2";
import { SiCanva, SiGoogledrive } from "react-icons/si";

export function convertFbTimeToDate(timestamp: Timestamp) {
    return timestamp.toDate();
}

export function formatLocalTime(time: Date) {
    return format(new Date(time), "dd MMM yyyy, HH:mm");
}

export function formatLocalDate(time: Date) {
    return format(new Date(time), "EEEE d MMMM yyyy HH:mm", { locale: th });
}

export function formatUnixToLocal(time: number) {
    if (!time) return "N/A";
    const date = fromUnixTime(time);
    return formatLocalTime(date);
}

export function getFileIcon(fileType: string) {
    switch (fileType) {
        case "doc":
            return { i: HiOutlineDocumentText, c: "#5aa6ed" };
        case "xls":
            return { i: HiOutlineTableCells, c: "#8ee665" };
        case "canva":
            return { i: HiOutlinePresentationChartLine, c: "#cb60e0" };
        case "pdf":
            return { i: BsFillFileEarmarkPdfFill, c: "#EF3B36" };
        case "vdo":
            return { i: BsFillFileEarmarkPlayFill, c: "#FD8D14" };
        case "drive":
            return { i: SiGoogledrive, c: "#FFE17B" };
        case "web":
            return { i: HiOutlineGlobeEuropeAfrica, c: "#96e0d4" };
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
                i: BsCircle
            };
        case "PROGRESS":
            return {
                name: "In Progress",
                fg: "var(--c-chip-14)",
                bg: "var(--c-bg-progress)",
                i: BsRecordCircle
            };
        case "DONE":
            return {
                name: "Done",
                fg: "var(--c-chip-12)",
                bg: "var(--c-bg-done)",
                i: BsFillCheckCircleFill
            };
        case "CANCEL":
            return {
                name: "Cancel",
                fg: "var(--c-chip-1)",
                bg: "var(--c-bg-cancel)",
                i: BsXCircle
            };

        default:
            return {
                name: "none",
                fg: "var(--c-chip-17)",
                bg: "var(--c-grey-100)"
            };
    }
}
