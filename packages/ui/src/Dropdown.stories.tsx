import '@with/services/style.css';
import {
	Dropdown,
	DropdownItem,
	DropdownButton,
	DropdownPanel,
} from '@with/services';
import React from 'react';

import { Text } from '@with/services';

export default {
	title: 'Dropdown',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export const DropdownStory = {
	args: {
		items: [
			{
				name: '목록 1',
				content: '내용입니다.',
			},
			{
				name: '목록 2',
				content: '내용입니다.\n내용입니다.',
			},
		],
	},
	render: ({ items }) => (
		<Dropdown style={{ width: '500px' }}>
			{items.map((item) => (
				<DropdownItem key={item.name} itemName={item.name}>
					<DropdownButton>
						<Text color="gray" fontSize="lg">
							{item.name}
						</Text>
					</DropdownButton>
					<DropdownPanel>
						<Text color="gray" fontSize="md">
							{item.content}
						</Text>
					</DropdownPanel>
				</DropdownItem>
			))}
		</Dropdown>
	),
};
