/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Btc } from './assets/crypto/btc'
import { Eth } from './assets/crypto/eth'
import { Bnb } from './assets/crypto/bnb'
import { Algoland } from './assets/crypto/algorand'
import { Doge } from './assets/crypto/doge'
import { Solana } from './assets/crypto/sol'
import { Xrp } from './assets/crypto/xrp'
import { Matic } from './assets/crypto/matic'
import Tether from './assets/crypto/tether'

import { Button } from './components/shadcn/button'

import { Card } from './components/shadcn/card'
import { Input } from './components/shadcn/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/shadcn/select'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/shadcn/popover'
import { Label } from './components/ui/label'

interface Coin {
	name: string
	label: string
	element: JSX.Element
}

const coins: Coin[] = [
	{
		name: 'usdt',
		label: 'USDT',
		element: <Tether />
	},
	{
		name: 'bitcoin',
		label: 'Bitcoin',
		element: <Btc />
	},
	{
		name: 'ethereum',
		label: 'Ethereum',
		element: <Eth />
	},
	{
		name: 'bnb',
		label: 'BNB',
		element: <Bnb />
	},
	{
		name: 'solana',
		label: 'Solana',
		element: <Solana />
	},
	{
		name: 'xrp',
		label: 'XRP',
		element: <Xrp />
	},
	{
		name: 'doge',
		label: 'Doge',
		element: <Doge />
	},
	{
		name: 'algoland',
		label: 'Algoland',
		element: <Algoland />
	},
	{
		name: 'matic',
		label: 'Matic',
		element: <Matic />
	}
]

function App() {
	return (
		<div className='flex items-center h-screen'>
			<div className='flex items-center relative ml-5'>
				<Card className='h-[90vh] top-0 left-0 w-24'></Card>
			</div>
			<div className=' w-full  flex justify-center items-center'>
				<div>
					<div className='flex items-center mb-5 justify-between'>
						<h2 className=''>Swap</h2>

						{/* Slippering */}
						<Popover>
							<PopoverTrigger asChild>
								<Button variant='outline'>Open popover</Button>
							</PopoverTrigger>
							<PopoverContent className='w-80'>
								<div className='grid gap-4'>
									<div className='space-y-2'>
										<h4 className='font-medium leading-none'>Dimensions</h4>
										<p className='text-sm text-muted-foreground'>
											Set the dimensions for the layer.
										</p>
									</div>
									<div className='grid gap-2'>
										<div className='grid grid-cols-3 items-center gap-4'>
											<Label htmlFor='width'>Width</Label>
											<Input
												id='width'
												defaultValue='100%'
												className='col-span-2 h-8'
											/>
										</div>
										<div className='grid grid-cols-3 items-center gap-4'>
											<Label htmlFor='maxWidth'>Max. width</Label>
											<Input
												id='maxWidth'
												defaultValue='300px'
												className='col-span-2 h-8'
											/>
										</div>
										<div className='grid grid-cols-3 items-center gap-4'>
											<Label htmlFor='height'>Height</Label>
											<Input
												id='height'
												defaultValue='25px'
												className='col-span-2 h-8'
											/>
										</div>
										<div className='grid grid-cols-3 items-center gap-4'>
											<Label htmlFor='maxHeight'>Max. height</Label>
											<Input
												id='maxHeight'
												defaultValue='none'
												className='col-span-2 h-8'
											/>
										</div>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
					<Card className='w-[600px] h-[250px] flex flex-col items-center justify-center gap-10'>
						<div className='flex justify-around gap-20'>
							<div>
								<Select>
									<SelectTrigger className='w-[230px] rounded-[8px] py-7 '>
										<SelectValue
											placeholder={
												<div className='flex items-center gap-2'>
													<Tether />
													<p>USDT</p>
												</div>
											}
										/>
									</SelectTrigger>
									<SelectContent side='right' align='center'>
										{coins.map(coin => (
											<SelectItem key={coin.name} value={coin.name}>
												<div className='flex items-center gap-2'>
													{coin.element}
													<p>{coin.label}</p>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<Input
									placeholder='0.0'
									className='text-end rounded-[8px] py-7'
								/>
							</div>
						</div>
						<div className='flex justify-around gap-20'>
							<div>
								<Select>
									<SelectTrigger className='w-[230px] rounded-[8px] py-7'>
										<SelectValue
											placeholder={
												<div className='flex items-center gap-2'>
													<Btc />
													<p>Bitcoin</p>
												</div>
											}
										/>
									</SelectTrigger>
									<SelectContent side='right' align='center'>
										{coins.map(coin => (
											<SelectItem key={coin.name} value={coin.name}>
												<div className='flex items-center gap-2'>
													{coin.element}
													<p>{coin.label}</p>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<Input
									placeholder='0.0'
									className='text-end rounded-[8px] py-7'
								/>
							</div>
						</div>
					</Card>
					<div className='mt-6'>
						<Card>
							<div className='flex justify-center py-5'>
								<Button className='px-10 rounded-[8px]'>Swap</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
