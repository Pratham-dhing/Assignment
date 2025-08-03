import { useState } from 'react';
import './App.css';
import MultipleTabs from './Component/MultipleTab';
import Menu from './Component/Menu';
import Collapsible from './Component/Collapsible';
import Images from './Component/Images';
import Slider from './Component/Slider';
import Links from './Component/Links';
import CssProp from './Component/CssProp';
import Frame from './Component/IFrames';

function App() {
  const [activeTab, setActiveTab] = useState('');

  const handleChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <select value={activeTab} onChange={handleChange}>
          <option value="">More ...</option>
          <option value="MultipleTabs">Multiple Tabs</option>
          <option value="Menu">Menu</option>
          <option value="Collapsible">Collapsible Content</option>
          <option value="Images">Images</option>
          <option value="Slider">Slider</option>
          <option value="Links">Links</option>
          <option value="CssProp">CssProp</option>
          <option value="Frame">Frame</option>
        </select>

        <div style={{ marginTop: '20px' }}>
          {activeTab === 'MultipleTabs' && <h2><MultipleTabs /></h2>}
          {activeTab === 'Menu' && <h2><Menu /></h2>}
          {activeTab === 'Collapsible' && <h2><Collapsible /></h2>}
          {activeTab === 'Images' && <h2><Images /></h2>}
          {activeTab === 'Slider' && <h2><Slider /></h2>}
          {activeTab === 'Links' && <h2><Links /></h2>}
          {activeTab === 'CssProp' && <h2><CssProp /></h2>}
          {activeTab === 'Frame' && <h2><Frame /></h2>}
        </div>
        
      </div>
    </div>
  );
}

export default App;
