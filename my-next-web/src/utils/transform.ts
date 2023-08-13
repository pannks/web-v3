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
    return format(new Date(time), "d MMM yyyy HH:mm");
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
