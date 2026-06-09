import type { FilingTypeId } from './constants'

let preselectedFilingType: FilingTypeId | null = null

export function setPreselectedFilingType(type: FilingTypeId | null) {
  preselectedFilingType = type
}

export function getPreselectedFilingType(): FilingTypeId | null {
  return preselectedFilingType
}

export function clearPreselectedFilingType() {
  preselectedFilingType = null
}
