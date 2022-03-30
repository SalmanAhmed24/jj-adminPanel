import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import routes from '../../utils/routes';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/router';

function Navbar() {
	const [ drawerFlag, setDrawerFlag ] = useState(false);
	const router = useRouter();
	const onRouteHandler = (route) => {
		router.push(`/${route}`);
		setDrawerFlag(!drawerFlag);
	};
	return (
		<div>
			<div className="navbar">
				<button onClick={() => setDrawerFlag(true)} className="menuBarOpen">
					<MenuIcon sx={{ fontSize: 40 }} />
				</button>
			</div>
			<Drawer anchor={'left'} open={drawerFlag} onClose={() => setDrawerFlag(false)}>
				<div className="innerContent">
					<List>
						{routes.map((i) => {
							return (
								<ListItem key={i.name} className="listItem">
									<ListItemText onClick={() => onRouteHandler(i.route)} className="singleItem">
										{i.name}
									</ListItemText>
								</ListItem>
							);
						})}
					</List>
				</div>
			</Drawer>
		</div>
	);
}

export default Navbar;
