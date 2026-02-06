export const LOCATION_API = 'https://backend.manchitro.club/api/locations/'

// https://backend.manchitro.club/api/locations/divisions
// https://backend.manchitro.club/api/locations/districts/getDistrictsFromDivision/:id
// https://backend.manchitro.club/api/locations/areas/getAreasFromDistrict/:id


export const ADDRESS_API ='addresses/'

export const DIVISIONS_API = LOCATION_API + 'divisions/'
export const DISTRICTS_API = LOCATION_API + 'districts/'
export const AREAS_API = LOCATION_API + 'areas/'



export const MANAGE_ADDRESS_API = ADDRESS_API + 'manageAddress/'
export const DEFAULT_ADDRESSES_API =ADDRESS_API+ 'defaultAddresses/'
// export const AREAS_API = ADDRESS_API + 'areas/'
// export const DIVISIONS_API = ADDRESS_API + 'divisions/'
// export const DISTRICTS_API = ADDRESS_API + 'districts/'

// districtRoutes.route('/getDistrictsFromDivision/:id').get(getDistrictsFromDivision)