import Navbar from "Components/Navbar";
import SideBar from "Components/SideBar";
import Playground from "Containers/PlayGround";
import useAppContext from "hooks/useAppContext";
import HomePageLayout from "layouts/HomePageLayout";
import { useCallback, useMemo, useState } from "react";

/**
 * Home Component
 *
 * Can have routing logic to render different Layouts/pages
 * for different routes,  devices etc.
 */
const Home = () => {
  // Sidebar State to toggle drawer
  const [showDrawer, setShowDrawer] = useState(true);
  const toggleDrawerState = useCallback(() => {
    setShowDrawer((show) => !show);
  }, [setShowDrawer]);

  // hook to fetch data from context
  const { tablesData } = useAppContext();

  // creates list of sidebars items to be shown
  // returns Array of tables metadata info
  const sideBarItems = useMemo(
    () =>
      Object.keys(tablesData).map(
        (tableName) => tablesData[tableName].metaData
      ),
    [tablesData]
  );

  return (
    <HomePageLayout
      navBar={<Navbar onMenuButtonClick={toggleDrawerState} />}
      sideBar={<SideBar showDrawer={showDrawer} items={sideBarItems} />}
    >
      {/* Content  for the Home page*/}
      <Playground />
    </HomePageLayout>
  );
};

export default Home;
