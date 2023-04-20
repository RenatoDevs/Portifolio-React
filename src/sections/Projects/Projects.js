import React, { useEffect, useState } from 'react'
import ProjectData from '../../data/ProjectData';
import MenuItem from '../../components/MenuItem/MenuItem'

import "./Projects.css";
import Title from '../../components/Title/TitlePage';
import ModelSection from '../../components/ModelSection/ModelSection';
import FilterButton from '../../components/FilterButton/FilteredButton';
import Loader from '../../components/Loader/Loader';

const allButtons = ['ALL', ...new Set(ProjectData.map(item => item.category))];

const Projects = () => {

  const [menuItem, setMenuItems] = useState(ProjectData);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "ALL") {
      setMenuItems(ProjectData);
      return;
    }

    const filteredData = ProjectData.filter(item => item.category === button);
    setMenuItems(filteredData);
  }

  useEffect(() => {
    setMenuItems(menuItem)
  }, []);
  return (
    <Loader>
      <ModelSection customClass='space-evenly'>
        <div>
          <Title name='Projetos' />
        </div>
        <FilterButton filter={filter} button={button} />
        <MenuItem menuItem={menuItem} />
      </ModelSection>
    </Loader>

  )
}

export default Projects;