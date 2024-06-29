const userList: Record<string, string> = {}

userList['POC User 1'] = 'inxbuyer@mailinator.com';
userList['POC smoke'] = 'standard_user';
userList['POC regression'] = 'performance_glitch_user';

export class UserList {
    public static getUserList(userName : string) {
        return userList[userName];
    }
}