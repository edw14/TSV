import { EventManager } from "./services/eventManager";
import { Rock, Classical } from "./models/theme";
import { Event } from "./models/event";
import { Participant } from "./models/participant";


const manager = new EventManager();

const rock = new Rock("Rock", "Hard Rock");
const classical = new Classical("Classical", "Baroque");

const event1: Event = {
    id: 1,
    name: "Rock Concert",
    location: "Budapest",
    date: new Date(),
    participants: [],
    theme: rock
};

const event2: Event = {
    id: 2,
    name: "Classical Concert",
    location: "Vienna",
    date: new Date(),
    participants: [],
    theme: classical
};



manager.addItem(event1);
manager.addItem(event2);

const p1: Participant = { id: 1, name: "Thomas" };
const p2: Participant = { id: 2, name: "Janette" };

manager.addParticipantToEvent(1, p1);
manager.addParticipantToEvent(1, p2);

const updateEvent1: Event = {
    id: 1,
    name: "Rock Concert Premium",
    location: "Debrecen",
    date: new Date(),
    participants: [p1, p2],
    theme: rock
}
manager.updateEvent(updateEvent1);

manager.removeParticipantFromEvent(1, 2);

console.log("ALL EVENTS");
console.log(manager.listItems());

console.log("GROUPED BY THEME");
console.log(manager.groupEventsByTheme());
