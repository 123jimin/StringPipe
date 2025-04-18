import { TrimStringPipe } from "./trim";
import { ReverseStringPipe } from "./reverse";

export * from "./trim";
export * from "./reverse";

export const PIPES_COMMON = [
    TrimStringPipe,
    ReverseStringPipe,
];