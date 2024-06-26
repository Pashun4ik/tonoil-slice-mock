import { createStore } from "effector"
import { useUnit } from "effector-react"

// user resources
const $oil = createStore(610)
const $electricity = createStore(430)
const $oilcoin = createStore(560)

const $virtualTon = createStore(2)

const $energy = createStore(538)
const $maxEnergy = createStore(1000)

// Make mocked resources persistent by local-storage

// TODO

enum BuildingType {
    Pump = 'pump',
    PowerStation = 'power-station',
    OilBank = 'oil-bank',

    General = 'general'
}

type PumpBuilding = {
    type: BuildingType.Pump,
    maxTier: 5
}

type Building = PumpBuilding

// type Building = {
//     level: number,
//     maxLevel: number,

// }
type UserBuilding = {
    building: BuildingType,
    tier: number,
    phase: 'idle' | 'cooldown' 
}

const $userBuildings = createStore<UserBuilding[]>([
    {
        building: BuildingType.Pump,
        tier: 0,
        phase: 'idle'
    },
    {
        building: BuildingType.PowerStation,
        tier: 0,
        phase: 'idle'
    },
    {
        building: BuildingType.OilBank,
        tier: 0,
        phase: 'idle'
    },
])

type UserBuildingSlot = {
    buildingType: BuildingType,
    slottedBuilding?: UserBuilding
}

const $userBuildingSlots = createStore<UserBuildingSlot[]>([
    {
        buildingType: BuildingType.Pump,
    },
    {
        buildingType: BuildingType.PowerStation,
    },
    {
        buildingType: BuildingType.OilBank,
    },
    {
        buildingType: BuildingType.Pump,
    },
    {
        buildingType: BuildingType.PowerStation,
    },
    {
        buildingType: BuildingType.OilBank,
    },
    {
        buildingType: BuildingType.Pump,
    },
    {
        buildingType: BuildingType.PowerStation,
    },
    {
        buildingType: BuildingType.OilBank,
    }
]) 

function UserResources() {
    const [oil, electricity, oilcoin, virtualTon] = useUnit([$oil, $electricity, $oilcoin, $virtualTon])

    return <div className="grid gap-1 grid-cols-4 h-36 bg-cover" style={{backgroundImage: "url(/images/resources.png)"}}>
        <div className='font-bold flex flex-col justify-center items-center'>
            <img className='mb-4 w-14 h-14 object-contain' src='/images/resources/oil.png' />
            <span>{oil}</span>
        </div>
        <div className='font-bold flex flex-col justify-center items-center'>
            <img className='mb-4 w-14 h-14 object-contain' src='/images/resources/electricity.png' />
            <span>{electricity}</span>
        </div>
        <div className='font-bold flex flex-col justify-center items-center'>
            <img className='mb-4 w-14 h-14 object-contain' src='/images/resources/oil-coin.png' />
            <span>{oilcoin}</span>
        </div>
        <div className='font-bold flex flex-col justify-center items-center'>
            <img className='mb-4 w-14 h-14 object-contain' src='/images/resources/virtual-ton.png' />
            <span>{virtualTon}</span>
        </div>
    </div>
}

function UserBuildingSlots() {
    const userBuildingSlots = useUnit($userBuildingSlots)

    return <div className='w-full gap-3 grid grid-cols-3'>
        {userBuildingSlots.map((slot, idx) => {
            if(slot.slottedBuilding) {
                return <div key={idx} className='rounded-[30px] bg-[rgba(0,0,0,0.5)] aspect-square border-4'>1</div>
            }

            return <div key={idx} className='rounded-[30px] bg-[rgba(0,0,0,0.5)] aspect-square border-4'>
                <img className='p-10' src={`/images/slots/${slot.buildingType}.png`} />
            </div>
        })}
    </div>
}

function UserEnergy() {
    const [energy, maxEnergy] = useUnit([$energy, $maxEnergy])

    return <div className="my-4 px-4 w-full flex relative h-16 flex items-center">
        <div className='flex w-full bg-blue-400 relative'>
            <progress className="progress progress-error w-full h-12" value={energy} max={maxEnergy} />

            <div className="font-bold absolute inset-0 flex justify-center items-center">{energy} / {maxEnergy}</div>
        </div>

        <div className='absolute left-0 w-16 h-16 bg-blue-300 rounded-full flex justify-center items-center'>e</div>
        <div className='absolute right-0 w-16 h-16 bg-blue-300 rounded-full flex justify-center items-center'>+</div>
    </div>
}

export function MainPage() {
    return <div>
        <UserResources />

        <UserEnergy />
        
        <h2 className="uppercase text-center my-4 text-5xl drop-shadow-md">My Business</h2>

        <UserBuildingSlots />
    </div>
}