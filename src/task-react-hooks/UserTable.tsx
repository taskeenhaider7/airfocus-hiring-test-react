import * as React from 'react';
import {listUsers, User} from '../data';
import {usePromise} from './usePromise';

export const UserTable: React.FC = () => {

    const response = usePromise(listUsers);

    return (
        <>

            {(!response || (response && response.type !== 'success')) ?
                <div>Loading....</div>

                :

                <table>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Groups Count</th>
                    </tr>
                    </thead>

                    <tbody>

                    {
                        response.value.map((user: User, index: number) => {

                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.groupIds.length}</td>
                                </tr>
                            )

                        })
                    }

                    </tbody>
                </table>
            }
        </>

    )

};
