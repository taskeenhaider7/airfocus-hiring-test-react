import {listUserGroups, User, UserGroup} from '../data';

export interface ProcessedUser extends Pick<User, 'id' | 'email'> {
    groupNames: string[]
    mateCount: number
}

export async function userListProcessor(users: User[]): Promise<ProcessedUser[]> {
    const groups: UserGroup[] = await listUserGroups();
    const result: ProcessedUser[] = [];


    users.forEach((user: User) => {
        const mates: string[] = [];
        const groupNames: string[] = [];
        const userGroups = groups.filter(group => user.groupIds.indexOf(group.id) >= 0);
        userGroups.forEach((group: UserGroup) => {
            const groupMates = group.userIds.filter(userId => userId !== user.id && mates.indexOf(userId) < 0);
            mates.push(...groupMates);
            groupNames.push(group.name)
        });

        result.push({
            id: user.id,
            email: user.email,
            groupNames,
            mateCount: mates.length,
        })

    });

    return result
}
