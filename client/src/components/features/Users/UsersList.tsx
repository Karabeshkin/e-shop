/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import { RootState } from '../store/store';

function UsersList(): JSX.Element {
  const users = useSelector((store: RootState) => store.users.users);
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
export default UsersList;
