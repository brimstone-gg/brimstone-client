import { agents } from '../data/agents.json'
import { maps } from '../data/maps.json'
import { sidearms, smgs, shotguns, rifles, snipers, heavies } from '../data/weapons.json'

const allWeapons = [ ...sidearms, ...smgs, ...shotguns, ...rifles, ...snipers, ...heavies ]

export const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.brimstone.gg/api/v1' : 'http://localhost:3001/api/v1'
export const CDN_URL = 'https://cdn.brimstone.gg'

export const getAgent = name => agents.filter(val => val.key === name.toLowerCase())
export const getAgentPaths = () => agents.filter(val => val.path)

export const getMap = name => maps.filter(val => val.key === name.toLowerCase())
export const getMapPaths = () => maps.filter(val => val.path)

export const getWeapon = name => allWeapons.filter(val => val.key === name.toLowerCase())
export const getWeaponPaths = () => allWeapons.filter(val => val.path)
