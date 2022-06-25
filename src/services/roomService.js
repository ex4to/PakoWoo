class RoomService {
  async getPakoRooms(pako) {
    try {
      const pakoRooms = await fetch(
        "http://localhost:8080/api/v1/rooms/getPakoRooms",
        {
          headers: { Authentication: pako },
        }
      ).then((res) => res.json());

      return pakoRooms;
    } catch (err) {
      throw new Error(err);
    }
  }

  async enterPakoRoom(roomID, roomPass, pakoID) {
    try {
      const isEntered = await fetch(
        "http://localhost:8080/api/v1/rooms/enterRoom/" + roomID,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authentication: roomPass,
          },
          body: JSON.stringify({ id: pakoID }),
        }
      );
      return isEntered;
    } catch (err) {
      throw new Error(err);
    }
  }

  async createPakoRoom(roomName, pakoID) {
    try {
      const isCreated = await fetch(
        "http://localhost:8080/api/v1/rooms/createRoom",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roomName, pakoID }),
        }
      );
      return isCreated;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new RoomService();
