export default class User {
  static loadFromWindow(): User|null {
    const wind = window as any;
    if (wind.appUserID) {
      return new User(
        wind.appUserID,
        wind.appUserName,
        wind.appUserURL,
        wind.appUserAvatarURL,
        wind.appUserBadge);
    }
    return null;
  }

  constructor(
    public id: string,
    public nick: string,
    public profileURL: string,
    public avatarURL: string,
    public badge: number) {
  }
}
