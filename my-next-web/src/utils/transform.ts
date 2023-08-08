import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import {
    BsFillFileEarmarkFill,
    BsFillFileEarmarkSpreadsheetFill,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { SiCanva } from "react-icons/si";

export function convertFbTimeToDate(timestamp: Timestamp) {
    return timestamp.toDate();
}

export function formatLocalTime(time: Date) {
    return format(new Date(time), "d MMM yyyy HH:mm");
}

export function getFileIcon(fileType: string) {
    switch (fileType) {
        case "doc":
            return { i: BsFillFileEarmarkTextFill, c: "#84bbee" };
        case "xls":
            return { i: BsFillFileEarmarkSpreadsheetFill, c: "#75d475" };
        case "canva":
            return { i: SiCanva, c: "#d084ee" };
        default:
            return { i: BsFillFileEarmarkFill, c: "#c5c5c5" };
    }
}
