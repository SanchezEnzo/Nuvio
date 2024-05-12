export function Doge(): JSX.Element {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='32'
			height='32'
			viewBox='0 0 32 32'
		>
			<defs>
				<linearGradient id='doge-c' x1='50%' x2='50%' y1='0%' y2='100%'>
					<stop offset='0%' stopColor='#FFF' stopOpacity='.5' />
					<stop offset='100%' stopOpacity='.5' />
				</linearGradient>
				<circle id='doge-b' cx='16' cy='15' r='15' />
				<filter
					id='doge-a'
					width='111.7%'
					height='111.7%'
					x='-5.8%'
					y='-4.2%'
					filterUnits='objectBoundingBox'
				>
					<feOffset dy='.5' in='SourceAlpha' result='shadowOffsetOuter1' />
					<feGaussianBlur
						in='shadowOffsetOuter1'
						result='shadowBlurOuter1'
						stdDeviation='.5'
					/>
					<feComposite
						in='shadowBlurOuter1'
						in2='SourceAlpha'
						operator='out'
						result='shadowBlurOuter1'
					/>
					<feColorMatrix
						in='shadowBlurOuter1'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0'
					/>
				</filter>
				<path
					id='doge-e'
					d='M13.2477876,13.6106443 L17.5619469,13.6106443 L17.5619469,15.8963585 L13.2477876,15.8963585 L13.2477876,20.7142857 L15.9690265,20.7142857 C17.0457281,20.7142857 17.9269877,20.5686289 18.6128319,20.2773109 C19.298676,19.9859929 19.8370187,19.5826356 20.2278761,19.0672269 C20.6187335,18.5518182 20.8842176,17.9467822 21.0243363,17.2521008 C21.164455,16.5574195 21.2345133,15.8067267 21.2345133,15 C21.2345133,14.1932733 21.164455,13.4425805 21.0243363,12.7478992 C20.8842176,12.0532178 20.6187335,11.4481818 20.2278761,10.9327731 C19.8370187,10.4173644 19.298676,10.0140071 18.6128319,9.72268908 C17.9269877,9.43137109 17.0457281,9.28571429 15.9690265,9.28571429 L13.2477876,9.28571429 L13.2477876,13.6106443 Z M10.4823009,15.8963585 L9,15.8963585 L9,13.6106443 L10.4823009,13.6106443 L10.4823009,7 L17.0309735,7 C18.240419,7 19.2876062,7.20914824 20.1725664,7.62745098 C21.0575265,8.04575373 21.7802332,8.61717658 22.340708,9.34173669 C22.9011827,10.0662968 23.3178452,10.9140941 23.590708,11.8851541 C23.8635707,12.856214 24,13.8944856 24,15 C24,16.1055144 23.8635707,17.143786 23.590708,18.1148459 C23.3178452,19.0859059 22.9011827,19.9337032 22.340708,20.6582633 C21.7802332,21.3828234 21.0575265,21.9542463 20.1725664,22.372549 C19.2876062,22.7908518 18.240419,23 17.0309735,23 L10.4823009,23 L10.4823009,15.8963585 Z'
				/>
				<filter
					id='doge-d'
					width='123.3%'
					height='121.9%'
					x='-11.7%'
					y='-7.8%'
					filterUnits='objectBoundingBox'
				>
					<feOffset dy='.5' in='SourceAlpha' result='shadowOffsetOuter1' />
					<feGaussianBlur
						in='shadowOffsetOuter1'
						result='shadowBlurOuter1'
						stdDeviation='.5'
					/>
					<feColorMatrix
						in='shadowBlurOuter1'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0'
					/>
				</filter>
			</defs>
			<g fill='none' fillRule='evenodd'>
				<use fill='#000' filter='url(#doge-a)' xlinkHref='#doge-b' />
				<use fill='#C3A634' xlinkHref='#doge-b' />
				<use
					fill='url(#doge-c)'
					style={{ mixBlendMode: 'soft-light' }}
					xlinkHref='#doge-b'
				/>
				<circle cx='16' cy='15' r='14.5' stroke='#000' strokeOpacity='.097' />
				<g>
					<use fill='#000' filter='url(#doge-d)' xlinkHref='#doge-e' />
					<use fill='#FFF' xlinkHref='#doge-e' />
				</g>
			</g>
		</svg>
	)
}
