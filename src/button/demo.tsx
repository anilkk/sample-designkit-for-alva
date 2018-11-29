import * as React from 'react';

import Button, { ButtonOrder } from '.';

const CheckboxDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Button order={ButtonOrder.Primary}>Primary Button</Button>
		</div>
	);
};

export default CheckboxDemo;
