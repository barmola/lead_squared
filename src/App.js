import { useState } from "react"
import { ScrollableTab } from "./components"
import { photo } from './constants/images'
function App() {

  const [data, setData] = useState([
    {
      id: Math.floor(100000000 + Math.random() * 900000000),
      name: "Custom Data",
      title: "Title of Custom Data",
      description: "Description of Custom Data"
    }])


  return (
    <div className="App" >
      {/* Scrollable Tab with all functionality and default theme */}
      <ScrollableTab
        title="Demo Container"
        titleLogo={photo.logo}
        showNavigators
      />
      {/* Scrollable Tab with all functionality and custom theme */}
      <ScrollableTab
        title="Demo Container"
        titleLogo={photo.logo}
        themeColor="#D63D75"
        showNavigators
      />

      {/* Scrollable Tab without Header Logo */}
      <ScrollableTab
        title="Demo Container"
        themeColor="#D63D75"
        showNavigators
      />
      {/* Scrollable Tab without title*/}
      <ScrollableTab
        titleLogo={photo.logo}
        themeColor="#D63D75"
        showNavigators
      />
      {/* Scrollable Tab without Header */}
      <ScrollableTab
        themeColor="#D63D75"
        showNavigators
      />
      {/* Scrollable Tab without navigators */}
      <ScrollableTab
        title="Demo Container"
        titleLogo={photo.logo}
        themeColor="#D63D75"
      />
      {/* Scrollable Tab with Custom Data */}
      <ScrollableTab
        title="Lead Squared"
        titleLogo={photo.logo}
        tabs={data}
        setTabItem={setData}
        themeColor="#D63D75"
        showNavigators
      />
    </div>
  );
}

export default App;
