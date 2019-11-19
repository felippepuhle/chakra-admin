import React from 'react';

import { Card } from 'src/components';

const UsersList: React.FC = () => (
  <Card>
    <Card.Header>
      <Card.Header.Title>Users</Card.Header.Title>
      <Card.Header.Text>Listing all users</Card.Header.Text>
    </Card.Header>

    <Card.Body>UsersList</Card.Body>
  </Card>
);

export default UsersList;
