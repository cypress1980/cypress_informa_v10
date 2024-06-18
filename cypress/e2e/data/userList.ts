const userList: Record<string, string> = {}

userList['POC User 1'] = 'standard_user';
userList['POC smoke'] = 'standard_user';
userList['POC regression'] = 'performance_glitch_user';

export class UserList {
    public static getUserList(userName : string) {
        return userList[userName];
    }
}