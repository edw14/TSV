import { EventManager } from "./services/eventManager";
import { Theme } from "./models/theme";
import { Event } from "./models/event";

test("should add and list events", () => {
  const manager = new EventManager();
  const theme = new Theme("Rock");

  const event: Event = {
    id: 1,
    name: "Test Event",
    location: "Test",
    date: new Date(),
    participants: [],
    theme
  };

  manager.addItem(event);

  const events = manager.listItems();
  expect(events).toContain(event);
});