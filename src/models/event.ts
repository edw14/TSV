import { Theme } from "./theme";
import { Participant } from "./participant";


export interface Event {
    id: number;
    name: string;
    location: string;
    date: Date;
    participants: Participant[];
    theme: Theme;
}

