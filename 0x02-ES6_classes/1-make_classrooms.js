import ClassRoom from './0-classroom';

//Creates an array of with a specific size.
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
