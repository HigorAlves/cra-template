import React, { useRef, useEffect } from 'react';

import { useStore } from 'store';
import Actiont from 'store/example/actions';

function App(): React.ReactElement {
	const { state, dispatch } = useStore();
	const canvasRef = useRef(null);

	useEffect(() => {
		if (canvasRef !== null) {
			const canvas = canvasRef.current;
			// @ts-ignore
			const ctx = canvas.getContext('2d');

			ctx.beginPath();
			ctx.moveTo(5, 45);
			ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);

			ctx.lineTo(55, 20);
			ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);

			ctx.lineTo(15, 10);

			ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
			ctx.lineTo(5, 45);

			ctx.fillStyle = '#2f3640';
			ctx.strokeStyle = '#f5f6fa';
			ctx.fill();
			ctx.stroke();
		}
	}, []);

	return (
		<header className='App-header'>
			<div className='star star1' />
			<div className='star star2' />
			<div className='star star3' />
			<div className='star star4' />
			<div className='star star5' />

			<div className='astronaut'>
				<div className='astronaut__backpack' />
				<div className='astronaut__body' />
				<div className='astronaut__body__chest' />
				<div className='astronaut__arm-left1' />
				<div className='astronaut__arm-left2' />
				<div className='astronaut__arm-right1' />
				<div className='astronaut__arm-right2' />
				<div className='astronaut__arm-thumb-left' />
				<div className='astronaut__arm-thumb-right' />
				<div className='astronaut__leg-left' />
				<div className='astronaut__leg-right' />
				<div className='astronaut__foot-left' />
				<div className='astronaut__foot-right' />
				<div className='astronaut__wrist-left' />
				<div className='astronaut__wrist-right' />

				<div className='astronaut__head'>
					<canvas id='visor' width='60px' height='60px' ref={canvasRef} />
					<div className='astronaut__head-visor-flare1' />
					<div className='astronaut__head-visor-flare2' />
				</div>
			</div>

			<span className='glitch-wrapper'>
				<h1 className='glitch' data-text='@higoralves/cra-template'>
					@higoralves/cra-template
				</h1>
			</span>
			<p>
				Edit
				<code> src/pages/home/index.tsx </code>
				and save to reload.
			</p>
			<button className='button' type='button' onClick={() => dispatch(Actiont('🎉 Welcome to cra-template'))}>
				{state.example.message}
			</button>
			<a href='https://github.com/higoralves/cra-template' target='blank'>
				Git Wiki
			</a>
		</header>
	);
}

export default App;
