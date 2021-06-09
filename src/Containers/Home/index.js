import Navbar from "Components/Navbar";
import SideBar from "Components/SideBar";
import HomePageLayout from "layouts/HomePageLayout";
import { useCallback, useState } from "react";

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

  return (
    <HomePageLayout
      navBar={<Navbar onMenuButtonClick={toggleDrawerState} />}
      sideBar={<SideBar showDrawer={showDrawer} />}
    >
      {/* Content  for the Home page*/}
      <h3>Hello</h3>
    </HomePageLayout>
  );
};

export default Home;
