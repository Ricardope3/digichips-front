export type User = {
  userId: string;
  username?: string;
};
export const CachedUserKey = 'digichipsUser';
export const DefaultUser: User = { userId: '123', username: 'guest' };
