import { useCallback, useMemo, useState } from "react";
import {
  DEFAULT_EDITOR_TAB,
  HOME_TAB_ID,
  EDITOR_TAB_ADD,
  EDITOR_TAB_DELETE,
} from "utils/constants/common";

import { v4 as uuid } from "uuid";

/**
 * Custom hook to handle QueryEditors State and Tabs
 */
export default function useActiveQueryEditor() {
  const [editorTabs, setEditorTabs] = useState({
    [HOME_TAB_ID]: DEFAULT_EDITOR_TAB,
  });

  // keep track of current active editor tab
  const activeEditorTab = useMemo(
    () => Object.values(editorTabs).find((tab) => tab.isActive === true),
    [editorTabs]
  );

  // handler to update editor state with the query value
  const handleQueryChange = useCallback(
    (queryVal) => {
      setEditorTabs((tabs) => ({
        ...tabs,
        [activeEditorTab.id]: {
          ...tabs[activeEditorTab.id],
          query: queryVal,
        },
      }));
    },
    [activeEditorTab]
  );

  // add new editor tab handler
  const addEditorTab = useCallback(() => {
    return new Promise(async (resolve, reject) => {
      const newTabId = `editor_tab_${uuid()}`;
      const newTab = {
        name: `New Tab`,
        id: newTabId,
        value: newTabId,
        canDelete: true,
        isActive: true,
        query: "",
      };

      await setEditorTabs((tabs) => ({
        ...tabs,
        [newTabId]: newTab,
        [activeEditorTab.id]: {
          ...tabs[activeEditorTab.id],
          isActive: false,
        },
      }));
      resolve();
    });
  }, [activeEditorTab]);

  // delete editor tab handler
  const deleteEditorTab = useCallback(
    (tabId) => {
      const tabs = { ...editorTabs };
      const tabIds = Object.keys(tabs);
      const index = tabIds.indexOf(tabId);
      tabs[tabIds[index - 1]].isActive = true;
      delete tabs[tabId];
      setEditorTabs(tabs);
    },
    [editorTabs]
  );

  // switch editor tab  handler
  const switchEditorTab = (prevTabId, newTabId) => {
    setEditorTabs((tabs) => ({
      ...tabs,
      [prevTabId]: {
        ...tabs[prevTabId],
        isActive: false,
      },
      [newTabId]: {
        ...tabs[newTabId],
        isActive: true,
      },
    }));
  };

  // handles all the tabs action
  const updateEditorTabs = useCallback(
    ({ type, data }) => {
      switch (type) {
        case EDITOR_TAB_ADD:
          return addEditorTab();
        case EDITOR_TAB_DELETE:
          deleteEditorTab(data.id);
          break;
        default:
          switchEditorTab(data.prev.id, data.next.id);
          break;
      }
    },
    [addEditorTab, deleteEditorTab]
  );

  return {
    currentQuery: activeEditorTab.query,
    handleQueryChange,
    editorTabs: Object.values(editorTabs),
    updateEditorTabs,
  };
}
