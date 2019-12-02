import React from 'react';

import { Card, Table } from 'src/components';

const USERS = [
  {
    id: 1,
    name: 'Felippe Rodrigo Puhle',
    city: 'São José do Cedro',
    state: 'Santa Catarina',
  },
  {
    id: 2,
    name: 'Robson Perasolli',
    city: 'São Miguel do Oeste',
    state: 'Santa Catarina',
  },
  {
    id: 3,
    name: 'Marcelo Both',
    city: 'São Miguel do Oeste',
    state: 'Santa Catarina',
  },
  {
    id: 4,
    name: 'Fernando Almeida',
    city: 'São Miguel do Oeste',
    state: 'Santa Catarina',
  },
];

const UsersList: React.FC = () => (
  <Card>
    <Card.Header>
      <Card.Header.Title>Users</Card.Header.Title>
      <Card.Header.Text>Listing all users</Card.Header.Text>
    </Card.Header>

    <Table>
      <Table.THead>
        <Table.THead.TR>
          <Table.THead.TH>ID</Table.THead.TH>
          <Table.THead.TH>Name</Table.THead.TH>
          <Table.THead.TH>City</Table.THead.TH>
          <Table.THead.TH>State</Table.THead.TH>
        </Table.THead.TR>
      </Table.THead>

      <Table.TBody>
        {USERS.map(user => (
          <Table.TBody.TR key={user.id}>
            <Table.TBody.TD>{user.id}</Table.TBody.TD>
            <Table.TBody.TD>{user.name}</Table.TBody.TD>
            <Table.TBody.TD>{user.city}</Table.TBody.TD>
            <Table.TBody.TD>{user.state}</Table.TBody.TD>
          </Table.TBody.TR>
        ))}
      </Table.TBody>
    </Table>
  </Card>
);

export default UsersList;
