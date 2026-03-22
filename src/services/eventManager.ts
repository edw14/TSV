import { BaseManager } from "./baseManager";
import { Event } from "../models/event";
import { Participant } from "../models/participant";

export class EventManager extends BaseManager<Event> {
    updateEvent(updateEvent: Event): void {
        if (!this.items.has(updateEvent.id)) return;
        this.items.set(updateEvent.id, updateEvent)
    }

    addParticipantToEvent(eventId: number, participant: Participant): void {
        const event = this.items.get(eventId);
        if (!event) return;

        event.participants.push(participant)
    }

    removeParticipantFromEvent(eventId: number, participantId: number): void {
        const event = this.items.get(eventId);
        if (!event) return;

        event.participants = event.participants.filter(
            p => p.id !== participantId
        );
    }

    groupEventsByTheme(): Map<string, Event[]> {
    const grouped = new Map<string, Event[]>();

    for (const event of this.items.values()) {
      const key = event.theme.name;

      if (!grouped.has(key)) {
        grouped.set(key, []);
      }

      grouped.get(key)!.push(event);
    }

    return grouped;
  }
}





