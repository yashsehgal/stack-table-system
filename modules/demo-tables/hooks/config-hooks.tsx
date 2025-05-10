import { createStackTable } from '@/components/shared/data-table/helpers/create-stack-table'
import { useState } from 'react'

export function usePersonalProjectsTable() {
  const personalProjectsTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'My projects',
      includeSearchInput: true,
      searchInputConfig: {
        clientSide: true,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [10, 20, 30],
    },
  })

  return personalProjectsTableConfig
}

export function useGeneralProjectsTable() {
  const generalProjectsTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'General projects',
      includeSearchInput: true,
      searchInputConfig: {
        clientSide: true,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [10, 20, 30],
    },
  })

  return generalProjectsTableConfig
}

export function useArchivedProjectsTable() {
  const archivedProjectsTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'Archived projects',
      includeSearchInput: true,
      searchInputConfig: {
        clientSide: true,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [10, 20, 30],
    },
  })

  return archivedProjectsTableConfig
}

export function useProjectAnalyticsTable() {
  const [projectAnalyticsTableSearchQuery, setProjectAnalyticsTableSearchQuery] = useState<string>('')

  const projectAnalyticsTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'Project analytics',
      includeSearchInput: true,
      searchInputConfig: {
        searchQuery: projectAnalyticsTableSearchQuery,
        setSearchQuery: setProjectAnalyticsTableSearchQuery,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [12, 24, 36],
    },
  })

  return projectAnalyticsTableConfig
}

export function useConnectionsTable() {
  const [connectionsTableSearchQuery, setConnectionsTableSearchQuery] = useState<string>('')

  const connectionsTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'Connections',
      includeSearchInput: true,
      searchInputConfig: {
        searchQuery: connectionsTableSearchQuery,
        setSearchQuery: setConnectionsTableSearchQuery,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [20, 30, 40],
    },
  })

  return connectionsTableConfig
}

export function useOrganisationsTable() {
  const organizationsTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'Organizations',
      includeSearchInput: true,
      searchInputConfig: {
        clientSide: true,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [10, 20, 30],
    },
  })

  return organizationsTableConfig
}

export function useMembersTable() {
  const membersTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'Members',
      includeSearchInput: true,
      searchInputConfig: {
        clientSide: true,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [10, 20, 30],
    },
  })

  return membersTableConfig
}

export function useAPIKeysTable() {
  const apiKeysTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'API keys',
      includeSearchInput: true,
      searchInputConfig: {
        clientSide: true,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [10, 20],
    },
  })

  return apiKeysTableConfig
}

export function useKnowledgeBaseTable() {
  const [knowledgeBaseTableSearchQuery, setKnowledgeBaseTableSearchQuery] = useState<string>('')

  const knowledgeBaseTableConfig = createStackTable({
    headerSection: {
      tableHeading: 'Knowledge bases',
      includeSearchInput: true,
      searchInputConfig: {
        searchQuery: knowledgeBaseTableSearchQuery,
        setSearchQuery: setKnowledgeBaseTableSearchQuery,
      },
    },
    footerSection: {
      includePagination: true,
      rowsPerPageOptions: [12, 24, 36],
    },
  })

  return knowledgeBaseTableConfig
}
