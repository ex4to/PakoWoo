import bridge from "@vkontakte/vk-bridge";

class UsersService {
  /**
   * @description get Info about user by using bridge
   * @returns VK User Object
   */
  async getVKUserInfo() {
    const userVK = await bridge.send("VKWebAppGetUserInfo");
    return userVK;
  }
}

export default new UsersService();
