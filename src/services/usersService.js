import bridge from "@vkontakte/vk-bridge";

class UsersService {
  /**
   * @description get Info about user by using VKBridge
   * @returns VK User Object
   */
  async getVKUserInfo() {
    const fetchedUser = await bridge.send("VKWebAppGetUserInfo");

    const userVK = {
      id: fetchedUser.id,
      firstName: fetchedUser.first_name,
      lastName: fetchedUser.last_name,
      photo: fetchedUser.photo_100,

      getFullName() {
        return this.firstName + " " + this.lastName;
      },
    };

    return userVK;
  }

  async getPakoUserInfo(userInfo) {
    try {
      const isUserPako = await fetch("http://localhost:8080/api/v1/isPakoUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID: userInfo.id }),
      });
      return isUserPako;
    } catch (err) {
      throw new Error(err);
    }
  }
}

/*
const queueCardHandler = async (bool) => {
    const postMeth = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedItem, userName }),
    };

    if (bool) {
      await fetch("http://localhost:8080/queues/delete", postMeth);
    } else {
      await fetch("http://localhost:8080/queues/insert", postMeth);
    }

    getFromServData();
    setSelectedItem(null);
  };

*/

export default new UsersService();
