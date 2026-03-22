import { Event } from "../models/event";
import { Participant } from "../models/participant";


export function isParticipant(obj: any): obj is Participant {
    return obj &&
    typeof obj.id === "number" &&
    typeof obj.name === "string";
}

export function isEvent(obj: any): obj is Event {
    return obj &&
    typeof obj.id === "number" &&
    typeof obj.id === "string" &&
    obj.date instanceof Date &&
    Array.isArray(obj.participants);
}

