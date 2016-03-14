import fetch from 'isomorphic-fetch'
import { buildEndpoint } from './base'

const BASE_ENDPOINT = buildEndpoint('milestones')

export function getMilestones() {
    return fetch(BASE_ENDPOINT)
}
