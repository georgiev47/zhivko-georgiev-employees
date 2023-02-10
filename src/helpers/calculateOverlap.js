import daysBetween from "./daysBetween";

export default function calculateOverlap(from1, to1, from2, to2) {
    let overlap = 0;

    if(from1<=from2 && to1>=to2) { overlap = daysBetween(from2, to2) + 1; }
    else if(from1>=from2 && to1<=to2) { overlap = daysBetween(from1, to1) + 1; }
    else if(from1<=from2<=to1 && to2>to1) { overlap = daysBetween(from2, to1) + 1; }
    else if(from2<=from1<=to2 && to1>to2) { overlap = daysBetween(from1, to2) + 1; }
    else if(from2>to1 || from1>to2) { overlap = 0; }

    if(overlap < 0) overlap = 0;

    return overlap;
}