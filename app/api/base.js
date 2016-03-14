const API_ROOT = 'https://api.github.com/repos/facebook/react/'

export function buildEndpoint(resource) {
    return `${API_ROOT}${resource}`
}
