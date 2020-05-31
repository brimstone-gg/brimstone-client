import { agents } from '../data/agents.json'
import { maps } from '../data/maps.json'

export const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.brimstone.gg/api/v1' : 'http://localhost:3001/api/v1'

export const getAgent = name => agents.filter(val => val.name.toLowerCase() === name.toLowerCase())
export const getAgentPaths = () => agents.filter(val => val.page)

export const getMap = name => maps.filter(val => val.name.toLowerCase() === name.toLowerCase())
export const getMapPaths = name => maps.filter(val => val.page)
