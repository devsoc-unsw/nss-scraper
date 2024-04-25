
export type UngroupedRoomBooking = {
  name: string;
  day: string;
  start: string;
  weekPattern: number;
}

export type RawRoomBooking = UngroupedRoomBooking & {
  roomId: string;
  end: string;
}

export type RoomBooking = {
  bookingType: string;
  name: string;
  roomId: string;
  start: Date;
  end: Date;
}

export const FACILITIES_LIST = [
  "Floor/seating",
  "Microphone",
  "Accessibility", 
  "Audio-visual", 
  "Info technology", 
  "Writing media", 
  "Services"
] as const;

export type Facilities = Record<typeof FACILITIES_LIST[number], string[]>

export type MappedFacilities = {
  floor: string;
  seating: string;
  microphone: string[];
  accessibility: string[];
  audiovisual: string[];
  infotechnology: string[];
  writingMedia: string[];
  service: string[];
}

export type Room = {
  abbr: string;
  name: string;
  id: string;
  usage: string;
  capacity: number;
  school: string;
  buildingId: string;
}

export type ParsedName = {
  bookingType: string;
  name: string;
}

export type NameParser = {
  pattern: RegExp;
  parser: (matchGroups: Record<string, string>) => ParsedName;
}

export type Building = {
  name: string;
  id: string;
  lat: number;
  long: number;
  aliases: string[];
}

export type OverrideData = {
  buildings: Building[];
}
