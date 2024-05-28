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
    OilRig,
    ElectricityStation,
    OilBank,

    General
}

type OilRigBuilding = {
    type: BuildingType.OilRig,
    maxTier: 5
}

type Building = OilRigBuilding

// type BuildingType = 'oil-rig' | 'electricity-station' | 'oilbank'

// type Building = {
//     level: number,
//     maxLevel: number,

// }

const $userSlots = createStore([
    'oil-ring',
    'oil-ring',
    'electricity-station',
    'electricity-station',
    'oilbank',
    'oilbank'
])

type UserBuilding = {
    building: BuildingType,
    tier: number,
    phase: 'idle' | 'cooldown' 
}

const $userBuildings = createStore<UserBuilding[]>([
    {
        building: BuildingType.OilRig,
        tier: 0,
        phase: 'idle'
    },
    {
        building: BuildingType.ElectricityStation,
        tier: 0,
        phase: 'idle'
    },
    {
        building: BuildingType.OilBank,
        tier: 0,
        phase: 'idle'
    },
    // {
    //     building: BuildingType.OilRig,
    //     tier: 0,
    //     phase: 'idle'
    // },
    // {
    //     building: BuildingType.OilRig,
    //     tier: 0,
    //     phase: 'idle'
    // },electricity
    // {
    //     building: BuildingType.ElectricityStation,
    //     tier: 0,
    //     phase: 'idle'
    // },
    // {
    //     building: BuildingType.ElectricityStation,
    //     tier: 0,
    //     phase: 'idle'
    // },
    // {
    //     building: BuildingType.OilBank,
    //     tier: 0,
    //     phase: 'idle'
    // },
    // {
    //     building: BuildingType.OilBank,
    //     tier: 0,
    //     phase: 'idle'
    // }
])

type UserBuildingSlot = {
    building: BuildingType,
    slottedBuilding?: UserBuilding
}

const $userBuildingSlots = createStore([]) 

function UserResources() {
    const [oil, electricity, oilcoin, virtualTon] = useUnit([$oil, $electricity, $oilcoin, $virtualTon])

    return <div className="grid gap-1 grid-cols-4 h-32">
        <div className='flex flex-col justify-center items-center'>
            <img className='w-10 h-10 object-contain' src='/images/resources/oil.png' />
            <span>{oil}</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-10 h-10 object-contain' src='/images/resources/electricity.png' />
            <span>{electricity}</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-10 h-10 object-contain' src='/images/resources/oil-coin.png' />
            <span>{oilcoin}</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-10 h-10 object-contain' src='/images/resources/virtual-ton.png' />
            <span>{virtualTon}</span>
        </div>
    </div>
}

export function HomePage() {
    return <div>
        <UserResources />
    </div>
}