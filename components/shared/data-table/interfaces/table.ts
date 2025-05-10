import { SetStateAction } from 'react'

export interface IStackTableSystem_SearchInput_ClientSide {
  clientSide: boolean
}

export interface IStackTableSystem_SearchInput_ServerSide {
  searchQuery: string
  setSearchQuery: React.Dispatch<SetStateAction<IStackTableSystem_SearchInput_ServerSide['searchQuery']>>
  debounce?: number
}

export type IStackTableSystem_SearchInputConfig = IStackTableSystem_SearchInput_ClientSide | IStackTableSystem_SearchInput_ServerSide

export interface IStackTableSystem_HeaderSection {
  tableHeading: string
  includeSearchInput: boolean
  searchInputConfig?: IStackTableSystem_SearchInputConfig
}

export interface IStackTableSystem_FooterSection {
  includePagination: boolean
  rowsPerPageOptions: number[]
}

export interface IStackTableSystem {
  headerSection: IStackTableSystem_HeaderSection
  footerSection: IStackTableSystem_FooterSection
}
