import { Room } from "./types";
import { load } from "cheerio";
import nssFetch from "./nssFetch";
import { excludeRoom } from './exclusions';

const ROOM_REGEX = /^K-[A-Z][0-9]{1,2}-.+$/;

// Returns an array of objects containing classroom info
// {
//   abbr: 'AnatLab7',
//   name: 'BiologicalSci TeachLab 7 Lvl1',
//   id: 'K-D26-106',
//   type: 'LAB',
//   capacity: 100,
//   school: 'BIOS'
// }
const scrapeRooms = async (): Promise<Room[]> => {
  const response = await nssFetch('find_rooms');
  const $ = load(response.data);

  const classroomData: Room[] = [];
  $("form").find("tr.rowLowlight, tr.rowHighlight").each((_, e) => {
    const data = $(e).find("td");

    const room = {
      abbr: $(data[0]).text(),
      name: $(data[1]).text(),
      id: $(data[2]).text(),
      usage: $(data[3]).text(),
      capacity: parseInt($(data[4]).text()),
      school: $(data[5]).text(),
      buildingId: $(data[2]).text().split('-').slice(0, 2).join('-')
    };

    if (room.id.match(ROOM_REGEX) && !excludeRoom(room)) {
      classroomData.push(room);
    }
  })

  return classroomData;
}

export default scrapeRooms;
