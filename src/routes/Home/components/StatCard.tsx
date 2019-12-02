import React from 'react';
import { Flex, Icon, IconProps, Text } from '@chakra-ui/core';

import { Card } from 'src/components';

type Props = {
  icon: IconProps;
  title: string;
  value: string;
};

const StatCard: React.FC<Props> = ({ icon, title, value }) => (
  <Card>
    <Card.Body>
      <Flex align="center" justify="space-between">
        <Icon size="2.75rem" {...icon} mx={1} my={1} />

        <Flex
          direction="column"
          textAlign="right"
          px={1}
          py={1}
          flexWrap="wrap"
        >
          <Text fontSize="sm" fontWeight="medium" color="gray.400">
            {title}
          </Text>
          <Text fontSize="lg" color="gray.500">
            {value}
          </Text>
        </Flex>
      </Flex>
    </Card.Body>
  </Card>
);

export default StatCard;
