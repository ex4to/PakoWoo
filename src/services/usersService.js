import bridge from "@vkontakte/vk-bridge";

class UsersService {
  async getVKUserInfo() {
    const fetchedUser = await bridge.send("VKWebAppGetUserInfo");

    const userVK = {
      id: fetchedUser.id,
      firstName: fetchedUser.first_name,
      lastName: fetchedUser.last_name,
      photo: fetchedUser.photo_100,
    };

    return userVK;
  }

  async isPakoUser(userInfo) {
    try {
      const isUserPako = await fetch(
        "http://localhost:8080/api/v1/isPakoUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userID: userInfo.id }),
        }
      ).then((res) => res.json());

      return isUserPako.isUser !== -1;
    } catch (err) {
      throw new Error(err);
    }
  }

  async createPakoUser(userInfo) {
    try {
      const newPakoUser = await fetch(
        "http://localhost:8080/api/v1/createNewPakoUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }
      ).then((res) => res.json());

      return newPakoUser;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getPakoUser(userInfo) {
    try {
      const id = userInfo.id;
      const PakoUser = await fetch(
        "http://localhost:8080/api/v1/pakos/" + id
      ).then((res) => res.json());

      return PakoUser;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new UsersService();
