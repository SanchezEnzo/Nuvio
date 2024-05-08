import { Bnb } from '@/assets/crypto/bnb'
import { Btc } from '@/assets/crypto/btc'
import { Doge } from '@/assets/crypto/doge'
import { Eth } from '@/assets/crypto/eth'
import { Matic } from '@/assets/crypto/matic'
import { Solana } from '@/assets/crypto/sol'
import { Ton } from '@/assets/crypto/ton'
import { Xrp } from '@/assets/crypto/xrp'
import { useCryptoPrices } from '@/hooks/useCryptoPrices'
import { useEffect } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/shadcn/table'

function TableCoins(): React.ReactNode {
	const { cryptoPrices, getCryptoPrices } = useCryptoPrices()

	useEffect(() => {
		getCryptoPrices()
	}, [])

	return (
		<Table className='text-right '>
			{/* <TableCaption>A list of crypto </TableCaption> */}
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>Token name</TableHead>
					<TableHead className='w-[100px] text-right'>Market cap</TableHead>
					<TableHead className='w-[100px] text-right'>24h %</TableHead>
					<TableHead className='w-[100px] text-right'>7D %</TableHead>
					<TableHead className='w-[100px] text-right'>Price</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{cryptoPrices?.data
					.filter(
						coin =>
							coin.symbol === 'BTC' ||
							coin.symbol === 'ETH' ||
							coin.symbol === 'BNB' ||
							coin.symbol === 'SOL' ||
							coin.symbol === 'XRP' ||
							coin.symbol === 'DOGE' ||
							coin.symbol === 'TON' ||
							coin.symbol === 'MATIC'
					)
					.map(coin => (
						<TableRow key={coin.id} className=''>
							<TableCell className='font-medium  my-2 flex items-center gap-2'>
								{coin.symbol === 'BTC' && <Btc />}
								{coin.symbol === 'ETH' && <Eth />}
								{coin.symbol === 'BNB' && <Bnb />}
								{coin.symbol === 'SOL' && <Solana />}
								{coin.symbol === 'XRP' && <Xrp />}
								{coin.symbol === 'DOGE' && <Doge />}
								{coin.symbol === 'TON' && <Ton />}
								{coin.symbol === 'MATIC' && <Matic />}
								{coin.symbol}
							</TableCell>
							<TableCell>
								{new Intl.NumberFormat().format(parseInt(coin.market_cap_usd))}{' '}
								US$
							</TableCell>
							<TableCell>{coin.percent_change_24h}%</TableCell>
							<TableCell>{coin.percent_change_7d}%</TableCell>
							<TableCell>{parseFloat(coin.price_usd).toFixed(2)} US$</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	)
}

export function Market(): React.ReactNode {
	return (
		<section className='flex items-start mt-28 w-full h-screen justify-center'>
			<div className='w-[70%]'>
				<h2 className='mb-4 font-semibold text-2xl'>Tokens</h2>
				<TableCoins />
			</div>
		</section>
	)
}
